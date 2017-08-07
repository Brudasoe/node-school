let http = require('http');
let bl = require('bl');

http.get(process.argv[2], mainCallback);

function mainCallback(response){
    
    response.setEncoding('utf8');

    response.pipe(bl('callBack', (err, data)=>{
        if(err) return err;
        console.log(data.length);
        console.log(data.toString());           
    }));

};
