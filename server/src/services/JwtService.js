const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const generalAccessToken = (payload) => {
    const access_token = jwt.sign({
        ...payload
    }, process.env.ACCESS_TOKEN, { expiresIn: '15m' });
    return access_token;
};


const generalRefreshToken = (payload) => {
    const refresh_token = jwt.sign({
        ...payload
    }, process.env.REFRESH_TOKEN, { expiresIn: '365d' });
    return refresh_token;
};

const RefreshTokenJWtService = (token) => {
    return new Promise((resolve, reject) => {
        try {
            jwt.verify(token, process.env.REFRESH_TOKEN, (err, user) => {
                if (err) {
                    console.log('err', err);
                    reject({
                        status: 'error',
                        message: 'Token không hợp lệ'
                    });
                }
                const access_token = generalAccessToken({
                    id: user?.id,
                    isAdmin: user?.isAdmin
                });
                resolve({
                    status: 'success',
                    access_token
                });
            });
        } catch (e) {
            reject(e);
        }
    });
};


module.exports = { generalAccessToken, generalRefreshToken,RefreshTokenJWtService };