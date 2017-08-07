const promise = new Promise(timerFunction)

function timerFunction(resolve, reject){

  setTimeout(() =>{
    reject(new Error("REJECTED!"));
  }, 300)
}

function onReject(error){
  console.log(error.message);
}
promise.then(null, onReject);