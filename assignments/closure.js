// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
//try {
const alpha = "AlphaFlight";
console.log(alpha);

function scope() {
    console.log(alpha + " from inside the function!");
    let beta = "BetaMax";
}
scope();
//console.log("what is " + beta + "?");
//} catch (error)
//Warren-why doesn't this line end in a semicolon?

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
let num1 = 0;
const counter = (num1) => {
    // Return a function that when invoked increments and returns a counter variable.
    num1++;
    console.log(num1);
};
counter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
};