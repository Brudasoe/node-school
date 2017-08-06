const net = require("net");
const pad = require("pad");
const strftime = require("strftime");
const date = new Date();
const currentDate = "";

function createSocketAndPassDate(socket){
  currentDate = `${strftime('%F %R',date)}
`
  socket.write(currentDate);
  socket.end();

}

const server = net.createServer(createSocketAndPassDate);
console.log(currentDate)
server.listen(process.argv[2]);
