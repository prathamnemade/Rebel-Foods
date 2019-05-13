var mongoose = require('mongoose');
var Notification = mongoose.model('Notification');
var ItemDetails = mongoose.model('ItemDetails')
module.exports.saveNotification = function(req, res) {
    ItemDetails.find().exec((err, data) => {
        if (data) {
            for (let i = 0; i < req.body.length; i++) {
                var notification = new Notification()
                notification.name = req.body[i].name;
                notification.quantity = req.body[i].quantity;
                notification.time = req.body[i].time;
                for (let j = 0; j < data.length; j++) {
                    if (data[j].name == req.body[i].name) {
                        notification.predicted = data[j].predicted
                    }
                }
                notification.completedTillNow = 0;
                notification.save()
            }
        }
    })
    res.send('Done')
}


module.exports.getNotification = function(req, res) {
    Notification.find().exec((err, data) => {
        if (data) {
            res.send(data)
        }
    })
}

module.exports.updateNotification = function(req, res) {
    console.log(req.body)
    Notification.findOneAndUpdate({ name: req.body.name, quantity: req.body.quantity, predicted: req.body.predicted }, { $inc: { 'completedTillNow': 1, 'quantity': -1 } }).exec((err, data) => {
        if (data) {
            Notification.find().exec((err, data) => {
                if (data) { res.send(data) }
            })
        }
    })
}