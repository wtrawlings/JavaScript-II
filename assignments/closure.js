// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
//try {
const alpha = "AlphaFlight";
console.log(alpha);

function scope() {
    let beta = "BetaMax";
    console.log(alpha + " from inside the function!");
}
scope();
//console.log("what is " + beta + "?");
// the error on line 12 is intentional to show the difference in scope.
//} catch (error)
//Warren-why doesn't this line end in a semicolon?

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
let num1 = 0;
const counter = () => {
    // Return a function that when invoked increments and returns a counter variable.
    num1++;

    function counter2() {
        num2 = num1;
        console.log(num2);
    }
    counter2();
};
counter();
counter();
counter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
    var number1 = 0;
    // Return an object that has two methods called `increment` and `decrement`.
    function increment() {
        return number1++;
        console.log(number1);
    }

    function decrement() {
        number1--;
        console.log(number1);
    }
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
    increment();
    increment();
    increment();
    decrement();
    decrement();
};
counterFactory();