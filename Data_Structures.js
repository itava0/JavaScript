//Data Structures
Array
Object

const animalList = ["tiger", "cat", "bear", "bird"];
console.log(animalList[3]); // bird

//Array Methods

animalList.pop(); //removes the last element from an array

animalList.push("dog"); // adds a new element to an array (at the end)

animalList.shift();// removes the first array element

animalList.unshift("elephant"); // adds a new element to an array (at the beginning)

//Object

const user = {
  name: "John",
  age: 34,
  hobby: "soccer",
  isMarried: false,
  spells: ["abrakadra", "shazam", "boo"],
  shout: function() {
    console.log("AHHHHHH!");
  }
}

user.spells[0] // to access the array inside an object

user.shout() // to invoke a method inside an object