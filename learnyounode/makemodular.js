let moduleResponsibleForListingAllFiles = require('./moduleResponsibleForListingAllFiles.js');
let data = [];
function callbackPassedToTheModule(err,data){
    if (err) return err;
    data.forEach(function(element) {
        console.log(element);
    }, this);
    
}
moduleResponsibleForListingAllFiles(process.argv[2],process.argv[3],callbackPassedToTheModule);
