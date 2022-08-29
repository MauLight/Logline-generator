/* eslint-disable */
import "bootstrap";
import "./style.css";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

const Boring = arr => {
  let num = Math.floor(Math.random() * arr.length);
  return arr[num];
};

addEventListener("load", () => {
  document.querySelector("#excuse").innerHTML = `${Boring(who)} ${Boring(
    action
  )} ${Boring(what)} ${Boring(when)}`;
});

document.querySelector("#printIt").addEventListener("click", () => {
  document.querySelector("#excuse").innerHTML = `${Boring(who)} ${Boring(
    action
  )} ${Boring(what)} ${Boring(when)}`;
});
