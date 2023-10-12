const ApprovalConfig = require('../models/ApprovalConfig');

// API endpoint để đăng ký cấu hình phân quyền
const create = async (req, res) => {
    try {
        const { department, office, position } = req.body;

        // Kiểm tra xem bộ phận đã được đăng ký chưa
        const existingConfig = await ApprovalConfig.findOne({ office });
        if (existingConfig) {
            return res.status(400).json({
                status: 'error',
                message: 'Cấu hình phân quyền cho bộ phận này đã tồn tại.'
            });
        }

        // Tạo và lưu cấu hình phân quyền mới
        const newConfig = new ApprovalConfig({ department, office , position });
        await newConfig.save();

        return res.status(201).json({
            status: 'success',
            message: 'Cấu hình phân quyền đã được đăng ký thành công.'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 'error',
            message: 'Đã có lỗi xảy ra khi đăng ký cấu hình phân quyền.'
        });
    }
};



module.exports = {
    create
};

