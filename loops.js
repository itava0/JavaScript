const todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javaScript",
  "eat healthy"
]

//JavaScript Loops

for(let i= 0; i < todos.length; i++) {
  console.log(todos[i]);
}

let counter = 0;
 while( counter < 10) {
   console.log(counter);
   counter++
 }

 todos.forEach(function(todo, i) {
   console.log(todo, i);
 }) 