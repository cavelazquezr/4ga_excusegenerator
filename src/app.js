/* eslint-disable */
import "bootstrap";
import "./style.css";

let who = ["The dog", "My grandma", "His turtle", "My bird", "That rat"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
let emoji = ["😩", "😭", "😖", "😓", "🥵", "😰", "🤯"];

let pExcuse = document.querySelector("#excuse");
let excuseButton = document.querySelector("#BtnGenerateExcuse");

const excuseGenerator = () => {
  let excuse = "";

  //for who
  excuse += who[Math.floor(Math.random() * who.length)];

  //for action
  excuse += " " + action[Math.floor(Math.random() * action.length)];

  //for what
  excuse += " " + what[Math.floor(Math.random() * what.length)];

  //for when
  excuse += " " + when[Math.floor(Math.random() * when.length)];

  //for emoji
  excuse += " " + emoji[Math.floor(Math.random() * emoji.length)] + ".";

  return excuse;
};

window.onload = function() {
  //write your code here
  pExcuse.innerHTML = excuseGenerator();
};

excuseButton.addEventListener("click", function() {
  pExcuse.innerHTML = excuseGenerator();
});
