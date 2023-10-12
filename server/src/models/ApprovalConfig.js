const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const approvalConfigSchema = new Schema({
    department: {
        type: String,
        required: true,
    },
    office: {
        type: String,
        required: true,
        unique: true
    },
    position: {
        type: Map,
        of: Number
    }
});

module.exports = mongoose.model('ApprovalConfig', approvalConfigSchema);
