var mongoose = require('mongoose');
var ItemDetails = mongoose.model('ItemDetails');
module.exports.savePredicted = function(req, res) {
    if (req.body.operation == "add") {
        var itemDetails = new ItemDetails()
        itemDetails.name = req.body.name;
        itemDetails.createdTillNow = 0;
        itemDetails.predicted = req.body.predicted;
        itemDetails.save()
        ItemDetails.find().exec((err, data) => {
            if (data) {
                res.send(data)
            }
        })
    } else if (req.body.operation == 'cancel') {
        ItemDetails.deleteOne({ name: req.body.removed[0].name }).exec((err, data) => {
            if (data) {
                ItemDetails.find().exec((err, data) => {
                    if (data) {
                        res.send(data)
                    }
                    if (err) {
                        res.send("Error")
                    }
                })
            }
            if (err) {
                res.send("Error")
            }
        })
    }
}