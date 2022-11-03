"use strict";
exports.__esModule = true;
var net = require("net");
var server = net.createServer();
server.listen(25565, "127.0.0.1");
server.on("connection", function (sock) {
    console.log("new connection");
    sock.on("close", function () {
        console.log("this connection closed");
    });
    sock.on('data', function (data) {
        console.log(data.toString('utf8'));
    });
    sock.write('HelloWorld');
});
