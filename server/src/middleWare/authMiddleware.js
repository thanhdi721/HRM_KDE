const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const authMiddleware = (req, res, next) => {
    const tokenHeader = req.headers.token;
    if (!tokenHeader) {
        return res.status(401).json({
            status: 'error',
            message: 'Token không hợp lệ'
        });
    }

    const token = tokenHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, user) {
        if (err) {
            return res.status(401).json({
                status: 'error',
                message: 'Bạn không có quyền truy cập'
            });
        }
        if (user?.isAdmin) {
            next();
        } else {
            return res.status(401).json({
                status: 'error',
                message: 'Bạn không có quyền truy cập'
            });
        }
    });
}


const authUserMiddleware = (req, res, next) => {
  const tokenHeader = req.headers.tokenheader; // Đọc token từ header 'tokenheader'
  console.log('tokenHeader', tokenHeader);
  if (!tokenHeader) {
    return res.status(401).json({
      status: 'error',
      message: 'Token không được cung cấp'
    });
  }

  const token = tokenHeader.split(' ')[1]; // Tách token từ header 'tokenheader'
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) {
      console.error("Lỗi xác thực token:", err);
      return res.status(401).json({
        status: 'error',
        message: 'Token không hợp lệ hoặc đã hết hạn'
      });
    }

    if (user?.isAdmin || user?.id === req.params.id) {
      next();
    } else {
      return res.status(401).json({
        status: 'error',
        message: 'Bạn không có quyền truy cập tài nguyên này'
      });
    }
  });
};
const isManagerMiddleware = (req, res, next) => {
  // Kiểm tra quyền người quản lý và cho phép hoặc từ chối truy cập
  // Làm tương tự như isAdminMiddleware
};
const isSecurityMiddleware = (req, res, next) => {
  // Kiểm tra quyền người bảo vệ và cho phép hoặc từ chối truy cập
  // Làm tương tự như isAdminMiddleware
};
const isAttendanceLMiddleware = (req, res, next) => {
  // Kiểm tra quyền người chấm công và cho phép hoặc từ chối truy cập
  // Làm tương tự như isAdminMiddleware
};
  

module.exports = { authMiddleware, authUserMiddleware, isManagerMiddleware, isSecurityMiddleware, isAttendanceLMiddleware};
