var promise= new Promise(function(resolve,reject) {
   
}).then(function(success) {
    console.log('I FIRED');
    console.log(success)
}) .then(function onRejected(error){
    console.log('I DID NOT FIRE');
    console.log(error);
}); promise().then((console.log),onRejected);
    
    
    
    