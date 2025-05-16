// Promises were introduced in the ES6 version in 201 5, it contains producing code and consuming code

let myprom = new Promise(function(reslove,reject){
    let x = 1;
   x<=10 ? reslove(x):reject(x)
})

myprom
.then(result=>{
    console.log("Resolve with :",result);
})

.catch(error=>{
    console.log("Reject with:",error);
    
})