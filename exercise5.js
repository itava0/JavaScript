// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const newArray = [];
array.forEach( user => {
       newArray.push(user.username + "!")
});

console.log(newArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
const usernames = array.map(user => {
  return `${user.username}?`
});

console.log(usernames);

//Filter the array to only include users who are on team: red
const redTeam = array.filter( user => {
  if (user.team === "red") {
      return user;
  }
});

 console.log(redTeam);
//Find out the total score of all users using reduce

const totalScore = array.reduce((total, score) => {
        return total = total + score.score;
}, 0);

console.log("the total score is ",totalScore);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArrays = arrayNum.map((num, i) => {
 	return num * 2;
 });

 console.log(newArrays);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const userInfo = array.map(user => {
    return user;
});

for (let i = 0; i < userInfo.length; i++) {
  const element = array[i];
  for (const key of Object.keys(element)) {
    console.log(element[key] + "!");
}
}

