let fs = require('fs');

function readTextFromFile(err, data){
    
    if (err) throw err;
    let textReadFromFile = data.toString();
    let numberOfLines = textReadFromFile.split('\n');
    console.log(numberOfLines.length - 1);
}
//console.log(textReadFromFile);
fs.readFile(process.argv[2], readTextFromFile)