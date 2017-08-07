const net = require("net");
const strftime = require("strftime");
const date = new Date();
let currentDate = "";

function createSocketAndPassDate(socket){
  currentDate = `${strftime('%F %R',date)}
`
  socket.write(currentDate);
  socket.end();

}

const server = net.createServer(createSocketAndPassDate);
console.log(currentDate)
server.listen(process.argv[2]);