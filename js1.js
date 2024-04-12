console.log("hello word");
let h1 = document.querySelector("h1");
console.log(h1.innerText);
h1.innerText = h1.innerText +" welcome to website ";
   
let div = document.querySelectorAll("div");
console.log(div);
div[0].innerText="ankush";
div[1].innerText="arya";
div[2].innerText = "manu";
let idx = 1;
for(div of div){
    div.innerText='hello mr. ';
}