var mongoose = require('mongoose');
var ItemDetails = mongoose.model('ItemDetails');
module.exports.getSuggestions = function(req, res) {
    ItemDetails.find().exec((err, data) => {
        if (data) {
            res.send(data)
        }
        if (err) {
            res.send("Error")
        }
    })
}