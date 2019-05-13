var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
const port = process.env.PORT || 2000;
app.set('port', port);
server.listen(1111);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
require('./api/models/db');

// socket io
io.on('connection', function(socket) {
    console.log('User connected');
    socket.on('disconnect', function() {
        console.log('User disconnected');
    });
    socket.on('notificationData', function(data) {
        console.log(data);
        io.emit('newNotification', { value: true, newOrder: data });
    });
});
var routesApi = require('./api/routes/index');
app.use('/', routesApi)
app.listen(port, () => console.log(`Example app listening on port ` + port))