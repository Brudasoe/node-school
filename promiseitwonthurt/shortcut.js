const promise = Promise.resolve('SECRET VALUE');

function onReject(error){
  console.error(error.message);
}

promise.catch(onReject);