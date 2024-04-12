
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value1");
    }, 1000); 
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("error")); // Fix typo here
    }, 2000); 
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value3");
    }, 3000); 
});

let Promise_all = Promise.race([p1, p2, p3]);

Promise_all.then((values) => {
    console.log(values); // Logging the results of all promises
});
