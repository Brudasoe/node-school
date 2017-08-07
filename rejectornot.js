const promise = new Promise(timerFunction)

function timerFunction(resolve, reject){

  resolve("I FIRED");
  reject(new Error("I DID NOT FIRE"));

}
function onReject(error){
  console.log(error.message);
}

promise.then(console.log, onReject);