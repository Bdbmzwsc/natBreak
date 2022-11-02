var net = require("net");

const CONFIG = {
  outPort: 7654,
  newBridgePort: 7777,
};

var outServer = net.createServer();
var newBridgeServer = net.createServer();


outServer.listen(CONFIG.outPort);
newBridgeServer.listen(CONFIG.newBridgePort);

newBridgeServer.on("connection", (sock) => {
  console.log('connection');
  outServer.on("connection", (sock1) => {
    console.log('new')
    sock.write('new');
  });
});
