let http = require('http');

http.get(process.argv[2], mainCallback);

function mainCallback(response){
    let data = [];
    response.setEncoding('utf8');
    response.on("error", (error)=>{
        return error;
    });

    response.on("data", (data)=>{
        console.log(data);
    });

};

