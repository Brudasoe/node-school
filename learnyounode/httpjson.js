const http = require('http');
const url = require('url');



const server = http.createServer(handlingRequests);

function handlingRequests(req, res){
  res.writeHead(200, {'Content-Type': 'application/json'});
  parsedPath = url.parse(req.url, true);
  chosenTime = parsedPath.pathname;
  let date = new Date(parsedPath.query.iso);
  let currentDate = {};

  if(chosenTime === '/api/parsetime'){
    
    currentDate.hour = date.getHours();
    currentDate.minute = date.getMinutes();
    currentDate.second = date.getSeconds();
  }
  if(chosenTime === '/api/unixtime'){
    
    currentDate.unixtime = date.getTime();
  }
  currentDateJSON = JSON.stringify(currentDate);
  res.end(currentDateJSON);
}


server.listen(process.argv[2]);