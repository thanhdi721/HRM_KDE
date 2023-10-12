const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const gatePassSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    msnv: {
        type: String,
        required: true,
        unique: true
    },
    office: {
        type: String,
        required: true
    },
    from: {
        date: { type: Date, required: true },
        time: { type: String, required: true }
    },
    to: {
        date: { type: Date, required: true },
        time: { type: String, required: true }
    },
    reason: {
        type: String,
        required: true
    },
    assetOut: {
        type: Boolean,
        required: true
    },
    assetDescription: {
        type: String
    },
    assetImage: {
        type: String 
    },
    approval: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Chờ xử lý"
    },
},
{
    timestamps: true,
    toJSON: { virtuals: true } // Cho phép sử dụng virtual trong khi chuyển đổi thành JSON
});
// Định nghĩa trường ảo 'ngayTao' để format ngày
gatePassSchema.virtual('ngayTao').get(function() {
    return this.createdAt.toISOString().split('  ')[0];
});

module.exports = mongoose.model('GatePass', gatePassSchema);
