const mongoose = require('mongoose');

async function connect(){

    try {
        await mongoose.connect(`${process.env.mongo_db}`);
        console.log('Kết nối thành công!!');
    } catch (error) {
        console.log('Kết nối thất bại!!');
    }

}

module.exports = { connect };