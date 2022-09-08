const express = require('express');
const router = express.Router();
const middlewares = require('../middlewares');
const roleActionController = require('../../controllers/authentication/roleActionController');

router.post('/insert', middlewares.authorize, roleActionController.createRoleAction);
router.delete('/delete/:id', middlewares.authorize, roleActionController.deleteRoleAction);
router.get('/getPaging', roleActionController.getPagingRoleActions);
router.get('/getPagingRoleActionsByUserId', roleActionController.getPagingRoleActionsByUserId);
router.put('/update/:id', middlewares.authorize, roleActionController.updateRoleAction);

module.exports = router;