let btn = document.querySelector(".btn");

btn.onclick = () =>{
    let a = 25;
    a++;
    console.log(a);
};
 let btn1 = document.querySelector(".btn1");
  btn1.onclick = () =>{
    let b = prompt("enter the value");
    let c = 35;
    console.log(b+c);

}

 let btn2 = document.querySelector(".btn2");
 btn2.onclick = () => {
    console.log ("hello world");
 };
// let modBtn =document.querySelector(".btn3");
// let currMode = "light";
// modBtn.addEventListener("click", () =>{
//     if(currMode ==="light"){
//         curMode = " dark";
//         document.querySelector("body").style.backgroundColor = "dark";
//     } else{
//         currMode ="light";
//         document.querySelector("body").style.backgroundColor = "light";
//     }
//     console.log(currMode);
// } );
let modBtn = document.querySelector(".btn3");
let currMode = "light";

modBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
});

// let colorBtn = document.querySelector(".btn4");
// let curMode = "black";

// colorBtn.addEventListener("click", () => {
//     if (curMode === "balck") {
//         curMode = "red";
//         document.querySelector("body").style.backgroundColor = "red";
//     } else {
//         curMode = "green";
//         document.querySelector("body").style.backgroundColor = "green";
//     }
//     console.log(curMode);
// });
