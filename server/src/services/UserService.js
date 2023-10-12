const User = require('../models/PersonnelModel');
const bcrypt = require('bcrypt');

const { generalAccessToken, generalRefreshToken } = require('./JWtService');

const createUser = async (newUser) => {
    const {msnv, fullName, password, confirmPassword, gender,position,department,office,workHours} = newUser;

    try {
        const checkUser = await User.findOne({ msnv: msnv });

        if (checkUser !== null) {
            return {
                status: 'error',
                message: 'Mã số nhân viên đã tồn tại',
            };
        }

        // Hash mật khẩu trước khi lưu vào cơ sở dữ liệu
        const hashedPassword = await bcrypt.hash(password, 10);

        const createUser = await User.create({
            msnv,
            fullName,
            password: hashedPassword,
            confirmPassword,
            gender,
            position,
            department,
            office,
            workHours
        });

        if (createUser) {
            return {
                status: 'success',
                message: 'Thêm thành công',
                data: createUser,
            };
        }
    } catch (error) {
        return {
            status: 'error',
            message: 'Đã có lỗi xảy ra khi tạo người dùng',
            error: error.message,
        };
    }
};

const loginUser = async (userLogin) => {
    const { msnv, password } = userLogin;

    try {
        const user = await User.findOne({ msnv: msnv });

        if (!user) {
            return {
                status: 'error',
                message: 'Mã số nhân viên không tồn tại',
            };
        }

        const comparePassword = bcrypt.compareSync(password, user.password);

        if (!comparePassword) {
            return {
                status: 'error',
                message: 'Mật khẩu không chính xác',
            };
        }
        const access_token = await generalAccessToken({
            id: user._id,
            isAdmin: user.isAdmin,
        })
        const refresh_token = await generalRefreshToken({
            id: user._id,
            isAdmin: user.isAdmin,
        })
        return {
            status: 'success',
            message: 'Đăng nhập thành công',
            access_token,
            refresh_token,
        };
    } catch (error) {
        console.error(error)
        return {
            status: 'error',
            message: 'Đã có lỗi xảy ra khi đăng nhập',
            error: error.message,
        };
    }
};

const updateUser = async (id, data) => {

    try {
        const user = await User.findOne({
            _id: id,
        });
        if (!user) {
            return {
                status: 'error',
                message: 'Người dùng không tồn tại',
            };
        }

        const updateUser = await User.findByIdAndUpdate(id,data,{
            new: true,
        })
        return {
            status: 'success',
            message: 'Cập nhật người dùng thành công',
            data: updateUser,
        };
    } catch (error) {
        console.error(error);
        return {
            status: 'error',
            message: 'Đã có lỗi xảy ra khi cập nhật',
            error: error.message,
        };
    }
};

const deleteUser = async (id) => {

    try {
        const user = await User.findOne({
            _id: id,
        });
        if (!user) {
            return {
                status: 'error',
                message: 'Người dùng không tồn tại',
            };
        }

        await User.findByIdAndDelete(id)
        return {
            status:'success',
            message: 'Xóa người dùng thành công',
        };
    } catch (error) {
        return {
            status: 'error',
            error: error.message,
        };
    }
};

const getAllUser = async (id) => {

    try {
        const allUser = await User.find()
        return {
            status:'success',
            data: allUser,
        };
    } catch (error) {
        return {
            status: 'error',
            error: error.message,
        };
    }
};

const getDetailsUser = async (id) => {

    try {
        const user = await User.findOne({
            _id: id,
        });
        if (!user) {
            return {
                status: 'error',
                message: 'Người dùng không tồn tại',
            };
        }

        return {
            status:'success',
            data: user,
        };
    } catch (error) {
        return {
            status: 'error',
            error: error.message,
        };
    }
};
module.exports = {createUser, loginUser,updateUser,deleteUser,getAllUser,getDetailsUser}