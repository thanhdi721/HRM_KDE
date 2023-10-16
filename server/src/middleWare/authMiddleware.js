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
    const tokenHeader = req.headers.token;
    const userId = req.params.id;
    const token = tokenHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, user) {
        if (err) {
            return res.status(401).json({
                status: 'error',
                message: 'Bạn không có quyền truy cập'
            });
        }
        if (user?.isAdmin || user?.id === userId) {
            next();
        } else {
            return res.status(401).json({
                status: 'error',
                message: 'Bạn không có quyền truy cập'
            });
        }
    });
}

module.exports = { authMiddleware, authUserMiddleware };
