var express = require('express');
var router = express.Router();

var getSuggestions = require('../controllers/suggestions');
var savePredicted = require('../controllers/predicted')
var kitchenPortal = require('../controllers/kitchenPortal')
var notification = require('../controllers/notifications')
router.get('/getSuggestions', getSuggestions.getSuggestions);
router.post('/savePredicted', savePredicted.savePredicted);
router.post('/kitchenPortal', kitchenPortal.kitchenPortal);
router.post('/saveNotification', notification.saveNotification);
router.get('/getnotification', notification.getNotification);
router.get('/updateNotification', notification.updateNotification)
module.exports = router;