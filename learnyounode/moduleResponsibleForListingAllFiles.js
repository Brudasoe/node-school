let fs = require('fs');
let path = require('path');

module.exports = function(dir, extension, callBackReceived){
    
    let givenFileExtension = '.' + extension.toString(); 
    let fileList = [];

    fs.readdir(dir, listFilesInAFolder);

    function listFilesInAFolder(err, list){
        
        if (err) return callBackReceived(err);
        fileQuantity = list.length;
        for(let i = 0; i < fileQuantity; i++){
            if (path.extname(list[i].toString()) === givenFileExtension){
                fileList.push(list[i])
            }
        }
        callBackReceived(null,fileList);
    }
}