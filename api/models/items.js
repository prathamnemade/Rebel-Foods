var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    createdTillNow: {
        type: Number,
    },
    predicted: {
        type: Number,
    }
});
mongoose.model('ItemDetails', userSchema);