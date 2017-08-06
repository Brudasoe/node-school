const http = require('http');
const fs = require('fs');

const server = http.createServer(handlingRequests);

function handlingRequests(req, res){
  const dir = process.argv[3];
  const readStream = fs.createReadStream(dir);
  readStream.on('open', () =>{
    readStream.pipe(res);
  })
}


server.listen(process.argv[2]);