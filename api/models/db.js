var mongoose = require('mongoose');
var dbURI = 'mongodb://admin:admin123@ds155396.mlab.com:55396/rebelfoods';

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, });

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

require('./items');
require('./kitchen');
require('./notification');