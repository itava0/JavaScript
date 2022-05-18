//JAVASCRIPT FUNCTIONS
//-----------------

//Function Declaration
function sayHello() {
  console.log("Hello");
}

//Function expression
const sayBye = function() {
  console.log("Bye");
}

//Arrow function
const multiply = (x, y) => {
  return x * y;
}

//Advanced Functions

//Closure - is a function that remembers its outer variables and can access them
const first = () => {
  const greet = 'hi';
  //The function second is the child of Fisrt,
  // it has access to parent's variable.
  const second = () => {
    alert(greet);
  }
  return second;
}

const newFunc = first();
newFunc();


//Currying 
// It is a technique in functional programming, transformation of the function of multiple arguments into several functions of a single argument in sequence. It is also called nested function is ecmascript
const multiply2 = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

//Compose
//Function composition is an approach where the result of one function is passed on to the next function, which is passed to another until the final function is executed for the final result.

const compose =(f,g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum,sum)(5)

//Avoid Side Effects, functional purity
//Purity means that functions have no side effects. The output of a function is predictably the same as long as the input is the same
let a = 1;
function b() {
  a = 2;
}
