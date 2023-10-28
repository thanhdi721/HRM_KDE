const GatePass = require('../models/GatePassModel');
const Personnel = require('../models/PersonnelModel');

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
        const id = req.params.id;
        const updateData = req.body;
        console.log('Received ID:', id);
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
      const id = req.params.id;
      console.log('Received ID:', id); // Kiểm tra giá trị id tại đây
      const result = await GatePass.findByIdAndDelete(id);
  
      if (!result) {
        return res.status(404).json({
          status: 'error',
          message: 'Không tìm thấy phiếu cần xóa'
        });
      }
  
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
  };
const approveGatePass = async (req, res) => {

    // Kiểm tra quyền
    const user = req.user;
    if(!user.isManager) {
    return res.status(401).json({message: "Bạn không có quyền duyệt đơn"});
    }
    const { gatePassId } = req.body;
    
    try {
      // Lấy thông tin đơn cần duyệt
      const gatePass = await GatePass.findById(gatePassId);
    
      // Kiểm tra đơn tồn tại
      if(!gatePass) return res.status(404).json({message: "Đơn không tồn tại"});
    
      // Cập nhật trạng thái duyệt
      gatePass.status = "Đã duyệt";
      await gatePass.save();
    
      return res.json({message: "Duyệt đơn thành công"});
    
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
}

const confirmGatePass = async (req, res) => {
    const { gatePassId } = req.body;
    
    try {
      // Lấy thông tin đơn
      const gatePass = await GatePass.findById(gatePassId);
    
      // Kiểm tra đơn đã được duyệt
      if(gatePass.status !== "Đã duyệt") 
        return res.status(400).json({message: "Đơn chưa được duyệt"});
    
      // Cập nhật xác nhận
      gatePass.status = "Đã xác nhận";  
      await gatePass.save();
    
      return res.json({message: "Xác nhận đơn thành công"});
    
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
}

const attendancePayroll = async (req, res) => {

    try {
      const personnel = await Personnel.find();
    
      personnel.forEach(async staff => {
        // Tính số ngày công
        // Tính lương 
        // Cập nhật dữ liệu
      });
    
      return res.json({message: "Chấm công thành công"});
    
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
}
module.exports = {
    createGatePass,
    getGatePassList,
    updateGatePass,
    deleteGatePass,
    approveGatePass,
    confirmGatePass,
    attendancePayroll
}