let fs = require('fs');

let textReadFromFile = fs.readFileSync(process.argv[2]).toString();
//console.log(textReadFromFile);
numberOfLines = textReadFromFile.split('\n');
console.log(numberOfLines.length - 1);