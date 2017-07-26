let fs = require('fs');
let path = require('path');

// temporary
//let path = './'; 

// adding . at the beginning of the extension for 
// easier comparison with path.extname
let givenFileExtension = '.' + process.argv[3].toString(); 

function listFilesInAFolder(err, list){
    if (err) throw err;
    fileQuantity = list.length;
    for(let i = 0; i < fileQuantity; i++){
        if (path.extname(list[i].toString()) === givenFileExtension){
            console.log(list[i]);
        }
    }
}
fs.readdir(process.argv[2], listFilesInAFolder);
