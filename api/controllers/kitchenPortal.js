var mongoose = require('mongoose');
var KitchenPortal = mongoose.model('KitchenPortal');
module.exports.kitchenPortal = function(req, res) {
    console.log('KitchenPortal', req.body)
    for (let i = 0; i < req.body.length; i++) {
        var kitchenPortal = new KitchenPortal()
        kitchenPortal.name = req.body[i].name;
        kitchenPortal.quantity = req.body[i].quantity;
        kitchenPortal.save()
    }
    res.send(true)
}