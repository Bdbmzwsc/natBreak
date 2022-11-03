import net from 'net';
var server = net.createServer();
server.listen(25565, "127.0.0.1");
server.on("connection", (sock: net.Socket) => {
  console.log("new connection");
  sock.on("close", () => {
    console.log("this connection closed");
  });

  sock.on('data',(data: Buffer)=>{
    console.log(data.toString('utf8'));
  });
  sock.write('HelloWorld');
});
