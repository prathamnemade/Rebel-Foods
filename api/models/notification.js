var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    time: {
        type: Date,
    },
    predicted: {
        type: Number,
    },
    completedTillNow: {
        type: Number,
    }
});
mongoose.model('Notification', userSchema);