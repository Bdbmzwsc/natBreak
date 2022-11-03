import * as net from 'net';

const CONFIG = {
  serverPort: 7777,
  appPort: 25565,
  server: "127.0.0.1",
  app: "127.0.0.1",
};

var clients: net.Socket[] = [];

var newBridge = net.createConnection(CONFIG.serverPort, CONFIG.server, () => {
  console.log("successlly");
});

newBridge.on("data", (data: string) => {
  let datas = JSON.parse(data);
  if (datas.type == "new") {
    var newSocket = new net.Socket();
    newSocket.connect(CONFIG.appPort, CONFIG.app);
    var newServer = new net.Socket();
    newServer.connect(datas.port, CONFIG.server);
    newServer.pipe(newSocket);
    newSocket.pipe(newServer);

    clients.push(newSocket);
  }
});
