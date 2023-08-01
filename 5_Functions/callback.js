// A callback is a function passed as an argument to another function 



// method 1
const calculate = (a, b, operation) => {
    return operation(a, b);
}

const addition = calculate(3,4, (a, b) => {  
    // anonymous function: it is a function that does not have name associated with it
    let ans = a + b;
    return ans;
})

console.log(addition);



// method 2
const subtraction = (a, b) => a - b; 
console.log(calculate(8, 3, subtraction));




// method 3
function multiply(a, b) {
    return a * b;
}

const mulRes = calculate(1, 2, multiply)
console.log(mulRes)



// where to use callback function 

const a = [4, 1, 6, -2, -5, 3, 2, -8, 6, 7];

const firstNeg = (num) => {
    return num < 0;
}

const result = a.findIndex(firstNeg);
console.log(result);




// pizza example
function getCheese(callback) {
    setTimeout(() => {
        const cheese = "🧀";
        console.log("here is cheese", cheese);
        callback(cheese);
    }, 2000);
}

function makeDough(cheese, callback) {
    setTimeout(() => {
        const dough = cheese + "🫓";
        console.log("here is the dough", dough);
        callback(dough);
    }, 2000);
}

function bakePizza(dough, callback) {
    setTimeout(() => {
        const pizza = dough + "🍕";
        console.log("here is the pizza", pizza);
        callback(pizza);
    }, 2000);
}

getCheese((cheese) => {
    makeDough(cheese, (dough) => {
        bakePizza(dough, (pizza) => {
            console.log("got my pizza", pizza);
        });
    });
});
