let http = require('http');
let bl = require('bl');

http.get(process.argv[2], mainCallback);

function mainCallback(response){
    
    response.setEncoding('utf8');

    response.pipe(bl((err, data)=>{
        if(err) console.log(err);
        else{
            data = data.toString();
            console.log(data.length);
            console.log(data);     
        }
    }));
};

/*
var http = require('http');
var url = process.argv[2];
var bl = require('bl');
http.get(url, function(res) {
    res.pipe(bl(function(err, data) {
        if (err) {
            console.error(err);
        } else {
            data = data.toString();
            console.log(data.length);
            console.log(data);
        }
    }));
});
*/