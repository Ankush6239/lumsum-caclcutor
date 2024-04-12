let promise = new Promise(function ( resolve, reject){
    alert(" i am an alert in promise")
    resolve(56)
 });

console.log("hello one ")
setTimeout(function(){
    console.log("helllo in 2 seconds")
}, 2000)
console.log( "my name is " + "john three");
console.log(promise);
 

 let p = new Promise(( resolve, reject) =>{
    console.log("promise is pending");
      setTimeout(()=>{
        // console.log(" i am promise , i am full filled ");
        resolve(true);
      }, 5000);
 });
 let p2 = new Promise(( resolve, reject) =>{    
    console.log("promise is pending");
      setTimeout(()=>{
        // console.log(" i am promise , i am full filled ");
        reject(newerror("error"))
      }, 5000);
 });
 p.then((value)=>{
    console.log(value);
 } );
 p2.catch((error) =>{
    console.log(" error is occured")
 })
 
  let p3 = new Promise((resolve, reject) =>{
      setTimeout(()=>{
        console.log("resolved after 2 second");
        resolve(56);
      },2000)
 })
 p3.then((value)=>{
    console.log(value)
    let p4 = new promise((resolve, reject)=>{
        settime(()=>{
            resolve("promise 2");
        },2000);
        return p4;     
    })   
 }).then((value) =>{
    console.log("we are the done");
 });

//  multi promise
let ab = new Promise((resolve, reject) => {
    setTimeout(() => {
        alert("we are the resolve the problem");
        resolve(1);
    }, 2000);
});

ab.then(() => {
    console.log("Congratulations! This promise is now resolved.");
});

ab.then(() => {
    console.log("hello world");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4); // Resolve the inner promise with a value
        }, 6000);
    });
}).then(() => {
    console.log("hello bche");
});





