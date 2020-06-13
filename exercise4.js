//Solve these problems:

//#1 Create a one line function that adds adds two parameters

//I wrote this
const oneLineFunc = (x, y) => x + y;
//Done

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) //This will return 13

//Notes:
//by itself addTo(10) will return y => x + y
//But when you assigned it to a variable like addToTen
//and then did addToTen(3). The 3 is inserted in place of y. 
//Y returns x + y which is 10 + 3


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) //returns 31


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12) //returns 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

//What are the two elements of a pure function?
