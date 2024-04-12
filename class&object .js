const student = {
    fullName : "ankush arya",
    marks : 68.4,
    printmarks: function (){
        console.log("marks =", this.marks);
    },

};

const employes ={
    calcTax () {
        console.log("tax rate in 10%");
    },
};

const arun = {
    salary: 50000,
};
arun.__proto__= employes;

class ToyotoCar{
    start(){
        console.log("let start the race");
    }
    end(){
        console.log("let end the race");
    }
}

let fortuner= new ToyotoCar();

 class paraent{
    hello(){
        console.log("hello");
    }
 }
 class child extends paraent{
    work(){
        console.log( "work is done");
    }
 }
 let obj = new child();

  class person  {
    eat(){
        console.log("eating timeing ");
    }
    rest(){
        console.log("rest in the piece");

    }
  }

  class engineer extends person {
    busy() {
        console.log("solve the problem");
    }
  }
   
  let ankuobj = new engineer();

  
 class per {
     constructor(){
        this.species = " homo species";
     }
     eat(){
        console.log("eat this pizza");
     }
 }

 class eng extends per{
    constructor(){
        super();
        this.branch = branch;
    }
    wor(){
        console.log("do this work");
    }
 }
 
 let engobj = new per();
// q.1
let DATA = "secret information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data =", DATA);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    
    editData() {
        DATA = "some new value";
    }
}

let student1 = new User("anku", "abc@gmail.com");
let student2 = new User("manu", "manu@gmail.com");
let adminUser = new Admin("babita", "babita@gmail.com");



