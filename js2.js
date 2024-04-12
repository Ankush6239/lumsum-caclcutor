
//  let id = div.getAttribute("id" );
//  console.log(id);

let div = document.querySelector("div");
 console.log(div);

 div.style.backgroundColor = "green";
 div.style.boxShadow = "10px solid black";
 div.style.color = "yellow";
 div.style.textAlign = "left";

  let newBtn = document.createElement("button");
  newBtn.innerText = "click me";
  console.log(newBtn);

  let ankush = document.querySelector("ankush");
  div.append(newBtn);
  
  
  