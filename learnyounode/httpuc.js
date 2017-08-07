const http = require('http');
const thr2Map = require('through2-map');

const server = http.createServer(handlingRequests);

function handlingRequests(req, res){
  if (req.method === 'POST');{
    
    req.pipe(thr2Map((chunk) =>{
      return chunk.toString().toUpperCase();
    })).pipe(res)
    
  }
  //should add else when method != POST
}


server.listen(process.argv[2]);