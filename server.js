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
  outServer.on("connection", (sock1) => {
    CONFIG.newBridgePort++;
    sock.write(JSON.stringify({ type: "new", port: CONFIG.newBridgePort }));
    var newBridge = net.createServer();
    newBridge.listen(CONFIG.newBridgePort);
    newBridge.on("connection", (sock2) => {
      sock1.on("data", (data) => {
        sock2.write(data);
      });
      sock2.on('data',(data)=>{
        sock1.write(data);
      });
    });
  });
});
