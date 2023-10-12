const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const generalAccessToken = (payload) => {
    const access_token = jwt.sign({
        payload
    }, process.env.ACCESS_TOKEN, { expiresIn: '1h' });
    return access_token;
};

const generalRefreshToken = (payload) => {
    const refresh_token = jwt.sign({
        payload
    }, process.env.REFRESH_TOKEN, { expiresIn: '365d' });
    return refresh_token;
};

const RefreshTokenJWtService = (token) => {
    return new Promise((resolve, reject) => {
        try{
            console.log('token', token);
            jwt.verify(token, process.env.REFRESH_TOKEN, (err, user) => {
                if (err) {
                    console.log('err', err);
                    resolve({
                        status: 'error',
                        message: 'Token không hợp lệ'
                    });
                }
                const { payload } = user
                const access_token = generalAccessToken({
                    id: payload?.id,
                    isAdmin: payload?.isAdmin
                })
                console.log('access_token', access_token);
                resolve({
                    status:'success',
                    access_token
                })
            })
        } catch(e){
            reject(e)
        }
    })
};

module.exports = { generalAccessToken, generalRefreshToken,RefreshTokenJWtService };