//Document Object Model

//DOM Selector

document.getElementsByName("Tag");
document.getElementsByClassName("className");
document.getElementById("ID");

document.querySelector("li");
document.querySelectorAll("p");

//Changing Styles 
style.property // ok

//className
h1.className = "bold";

//ClassList
document.querySelector("li").classList.add("linethrough");
document.querySelector("li").classList.remove("linethrough");
document.querySelector("li").classList.toggle("linethrough");


//DOM Events

const button = document.querySelector("button");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");

button.addEventListener("click", function() {
   let li = document.createElement("li");
  li.appendChild(document.createTextNode("testing..."));
  ul.appendChild(li);
})


