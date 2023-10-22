const UserService = require('../services/UserService');
const JwtService = require('../services/JwtService');

const createUser = async (req, res) => {
    try{
        const {msnv, fullName, password, confirmPassword, gender,position,department,office,workHours} = req.body;
        const reg = /^[a-zA-Z0-9]+$/
        const isCheckMsnv = reg.test(msnv)
        if(!msnv || !fullName || !password || !confirmPassword || !gender || !position || !department || !office || !workHours){
            return res.status(200).json({
                status: 'error',
                message:'Vui lòng nhập đầy đủ thông tin'
            });
        }else if(!isCheckMsnv){
            return res.status(200).json({
                status: 'error',
                message:'Mã số nhân viên không hợp lệ'
            });
        }else if(password!== confirmPassword){
            return res.status(200).json({
                status: 'error',
                message:'Mật khẩu không trùng khớp'
            });
        }
        console.log('isCheckMsnv', isCheckMsnv);
        const response = await UserService.createUser(req.body)
        return res.status(200).json(response);
    }catch(e){
        return res.status(404).json({
            message:e
        });
    }
}

const loginUser = async (req, res) => {
    try {
        const {msnv, password} = req.body;
        const reg = /^[a-zA-Z0-9]+$/
        const isCheckMsnv = reg.test(msnv)
        if(!msnv || !password) {
             return res.status(200).json({
                status: 'error',
                message: 'Vui lòng nhập đầy đủ thông tin'
            });
        }else if(!isCheckMsnv){
            return res.status(200).json({
                status: 'error',
                message: 'Mã số nhân viên không hợp lệ'
            });
        }
        const response = await UserService.loginUser(req.body)
        const { refresh_token, ...newReponse } = response
        // console.log('response', response);
        res.cookie('refresh_token', refresh_token,{
            httpOnly: true,
            secure: false,
            sameSite: 'strict'
        })
        return res.status(200).json(newReponse);
    } catch (e) {
        return res.status(404).json({
            message: e
        });
    }
}

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id
        const data = req.body
        if(!userId){
            return res.status(200).json({
                status: 'error',
                message: 'Vui lòng nhập đầy đủ thông tin'
            });
        }
        const response = await UserService.updateUser(userId, data)
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e
        });
    }
}

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id
        if(!userId){
            return res.status(200).json({
                status: 'error',
                message: 'Vui lòng nhập đầy đủ thông tin'
            });
        }
        const response = await UserService.deleteUser(userId)
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e
        });
    }
}

const getAllUser = async (req, res) => {
    try {
        const response = await UserService.getAllUser()
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e
        });
    }
}

const getDetailsUser = async (req, res) => {
    try {
        const userId = req.params.id;
        console.log('userId', userId);
        if(!userId){
            return res.status(200).json({
                status: 'error',
                message: 'Vui lòng nhập đầy đủ thông tin'
            });
        }
        const response = await UserService.getDetailsUser(userId);
        console.log('response from getDetailsUser', response);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e
        });
    }
}

const refreshToken = async (req, res) => {
    console.log('req.cookies.refresh_token', req.cookies.refresh_token);
    try {
        const token = req.cookies.refresh_token;
        if (!token) {
            return res.status(401).json({
                status: 'error',
                message: 'Yêu cầu có token'
            });
        }
        const response = await JwtService.RefreshTokenJWtService(token)
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e
        });
    }
}

const logoutUser = async (req, res) => {
    try {
        res.clearCookie('refresh_token');
        return res.status(200).json({
            status: 'success',
            message: 'Logout successfully'
        });
    } catch (e) {
        return res.status(404).json({
            message: e
        });
    }
}
module.exports = { createUser, loginUser,updateUser,deleteUser,getAllUser,getDetailsUser,refreshToken, logoutUser };