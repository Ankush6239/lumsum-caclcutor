

//   async function wheather(){
//     let delhiwheather = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(" 27 deg"); 
//         },1000);
//       });
    
//       let banglorewheather = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(" 37 deg"); 
//         },2000);
//       });  
//       let punjabwheather = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(" 10 deg"); 
//         },3000);
//       });  
//       let punewheather = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//               resolve("15 deg");
//         },4000);
//       });
//     //   delhiwheather.then(alert);
//     //   banglorewheather.then(alert);
//     //   punjabwheather.then(alert);
//     //   punewheather.then(alert);  
//     let delhiw = await delhiwheather;
//     let banglorew = await banglorewheather;
//     let punjabw = await punjabwheather;
//     let punew = await punewheather;
//     return[ delhiw, banglorew,punjabw,punewheather ]
//   }
//    let a = wheather()
//   console.log(a);
async function weather(){
    let delhiWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 deg"); 
        },2000);
    });
    
    let bangaloreWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("37 deg"); 
        },4000);
    });  

    let punjabWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("10 deg"); 
        },6000);
    });  

    let puneWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("15 deg");
        },8000);
    });
    console.log("fetching delhi wheather please wait");
    let delhiW = await delhiWeather;
    console.log("fetching banglore wheather please wait");
    let bangaloreW = await bangaloreWeather;
    console.log("fetching punjab wheather please wait");
    let punjabW = await punjabWeather;
    console.log("fetching pune  wheather please wait");
    let puneW = await puneWeather;

    return [delhiW, bangaloreW, punjabW, puneW];
}

weather().then(result => {
    console.log(result);
});

