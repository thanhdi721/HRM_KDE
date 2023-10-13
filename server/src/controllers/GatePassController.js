const GatePass = require('../models/GatePassModel');
const getApprovalConfig = require('./ApprovalController');

const createGatePass = async (req, res) => {
    try {
        const {
            fullName,
            msnv,
            office,
            from,
            to,
            reason,
            assetOut,
            assetDescription,
            assetImage,
            approval
        } = req.body;

        const gatePass = new GatePass({
            fullName,
            msnv,
            office,
            from: {
                date: new Date(from.date),
                time: from.time
            },
            to: {
                date: new Date(to.date),
                time: to.time
            },
            reason,
            assetOut,
            assetDescription,
            assetImage,
            approval
        });

        await gatePass.save();

        return res.status(201).json({
            status: 'success',
            message: 'Đơn đăng ký ra cổng đã được tạo thành công'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 'error',
            message: 'Đã có lỗi xảy ra khi tạo đơn đăng ký ra cổng'
        });
    }    
}

const getGatePassList = async (req, res) => {
    try {
        // Lấy tất cả các phiếu có trạng thái "Chờ xử lý" từ cơ sở dữ liệu
        const pendingGatePasses = await GatePass.find({ status: 'Chờ xử lý' });

        // Trả về danh sách các phiếu đang chờ xử lý cho client
        return res.status(200).json({
            status: 'success',
            data: pendingGatePasses
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 'error',
            message: 'Đã có lỗi xảy ra khi lấy danh sách phiếu đang chờ xử lý'
        });
    }
}

const updateGatePass = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        await GatePass.findByIdAndUpdate(id, updateData);

        return res.status(200).json({
            status: 'success',
            message: 'Phiếu đã được sửa thành công'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 'error',
            message: 'Đã có lỗi xảy ra khi sửa phiếu'
        });
    }
}

const deleteGatePass = async (req, res) => {
    try {
        const { id } = req.params;
        await GatePass.findByIdAndDelete(id);

        return res.status(200).json({
            status: 'success',
            message: 'Phiếu đã được xóa thành công'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 'error',
            message: 'Đã có lỗi xảy ra khi xóa phiếu'
        });
    }
}

module.exports = {
    createGatePass,
    getGatePassList,
    updateGatePass,
    deleteGatePass
}