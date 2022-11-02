var net = require("net");
var client = new net.Socket();

client.connect(7654, "127.0.0.1", () => console.log("connect successlly"));

client.write("HelloWorld");

client.on('data',(data)=>{
    console.log(data.toString('utf8'));
})
