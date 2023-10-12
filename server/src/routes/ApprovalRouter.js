const express = require('express')
const router = express.Router();
const approvalController = require('../controllers/ApprovalController')

router.post('/register-approval-config',approvalController.create)

module.exports = router;