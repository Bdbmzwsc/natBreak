var net = require("net");
var server = net.createServer();
server.listen(25565, "127.0.0.1");
server.on("connection", (sock) => {
  console.log("new connection");
  sock.on("close", () => {
    console.log("this connection closed");
  });

  sock.on('data',(data)=>{
    console.log(data.toString('utf8'));
  });
  sock.write('HelloWorld');
});
