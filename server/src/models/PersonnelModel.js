const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const personnelSchema = new Schema({
    msnv: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    isManager: {
        type: Boolean,
        default: false
    },
    isSecurity:{
        type: Boolean,
        default: false
    },
    isAttendanceL:{
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true 
    },
    gender: {
        type: String,
        enum: ['Nam', 'Nữ'],
        required: true
    },
    position: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    office: {
        type: String,
        required: true
    },
    workHours: {
        type: String,
        required: true
    },
    directManagers: {        
        type: String,
        required: true
    },
    superiorManagers: {        
        type: String,
        required: true
    },
    access_token: { type: String },
    refresh_token: { type: String }
});

module.exports = mongoose.model('Personnel', personnelSchema);