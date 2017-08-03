const net = require("net");
const pad = require("pad");
const strftime = require("strftime");
let date = new Date();
let currentDate = "";

function createSocketAndPassDate(socket){
  currentDate = `${strftime('%F %R',date)}
`
  socket.write(currentDate);
  socket.end();

}

let server = net.createServer(createSocketAndPassDate);
console.log(currentDate)
server.listen(process.argv[2]);
