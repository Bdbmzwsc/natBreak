var net = require("net");

const CONFIG = {
  serverPort: 7777,
  appPort: 25565,
  server: "127.0.0.1",
  app: "127.0.0.1",
};

var clients = [];

var newBridge = net.createConnection(CONFIG.serverPort, CONFIG.server, () => {
  console.log("successlly");
});

newBridge.on('data',(data)=>{
  if(data.toString('utf8')=='new'){
    var newSocket=new net.Socket();
    newSocket.connect(CONFIG.appPort,CONFIG.app,()=> console.log('new connection'))
    clients.push(newSocket);
  }
})
