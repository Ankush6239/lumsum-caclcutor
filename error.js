setTimeout(() => {
    console.log("Hacking WiFi... Please wait...");
}, 2000);

try {
    console.log(rahul); // Assuming you intend to catch a reference error
} catch (error) {
    console.log(error);
}

setTimeout(() => {
    console.log("Fetching username and password... Please wait...");
}, 4000);

setTimeout(() => {
    console.log("Hacking Rahul's Facebook ID... Please wait...");
}, 6000);
  
try {
    let age = prompt("Enter the age"); // This line works in the browser environment
    age = Number.parseInt(age);
    if (age > 150) {
        throw new ReferenceError("This is a problem");
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
console.log("The script is still running");
