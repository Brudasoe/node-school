const http = require('http');
const bl = require('bl');
let results = [];
let count = 0;

function displayResults (){
  for(let j=0; j < results.length; j++){
    console.log(results[j])
  }
}
for(let i=0; i < 3; i++){
  getData(i);
}

function getData (index){
  http.get(process.argv[2 + index], mainCallback);

  function mainCallback(response) {
    response.setEncoding('utf8');

    response.pipe(bl((err, data) => {
      if (err) console.log(err);

        results[index] = data.toString();
        count++;
        if (count === 3){
          displayResults();
        }
    }));

  }
}
