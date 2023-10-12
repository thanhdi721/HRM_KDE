const express = require('express')
const router = express.Router()

const gatePassController = require('../controllers/GatePassController')
const { authMiddleware,authUserMiddleware } = require('../middleWare/authMiddleware');

router.post('/create', gatePassController.createGatePass);
router.get('/get-list-pending', gatePassController.getGatePassList);
router.put('/update/:id', gatePassController.updateGatePass);
router.delete('/delete/:id', gatePassController.deleteGatePass);

module.exports = router