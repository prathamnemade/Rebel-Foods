var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    completedTillNow: {
        type: Number,
    }
});
mongoose.model('KitchenPortal', userSchema);