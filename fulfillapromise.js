const promise = new Promise(timerFunction)

function timerFunction(resolve, reject){
  setTimeout(() =>{
    resolve("FULFILLED!");
  }, 300)
}
promise.then(console.log);