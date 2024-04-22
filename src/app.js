/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  //write your code here
  newExcuse();
};

const who = [
  "My dog",
  "My sister",
  "My grandma",
  "His bird",
  "My neighbor",
  "The delivery guy"
];
const action = ["ate", "crushed", "broke", "peed", "stole", "lost"];
const what = [
  "my homework",
  "the keys",
  "the umbrella",
  "the car",
  "my phone",
  "my lunch",
  "the computer"
];
const when = [
  "before the class",
  "right now",
  "during my lunch",
  "while I was sleeping",
  "in the morning",
  "at midnight",
  "while I was at the store",
  "during the meeting"
];

function GenereExcuse(arr1, arr2, arr3, arr4) {
  let excuse = "";
  let rand1 = Math.floor(Math.random() * arr1.length);
  let rand2 = Math.floor(Math.random() * arr1.length);
  let rand3 = Math.floor(Math.random() * arr1.length);
  let rand4 = Math.floor(Math.random() * arr1.length);

  excuse =
    arr1[rand1] +
    " " +
    arr2[rand2] +
    " " +
    arr3[rand3] +
    " " +
    arr4[rand4] +
    ".";
  return excuse;
}

function newExcuse() {
  document.querySelector("#btnExcuse").addEventListener("click", function() {
    let excusaa = GenereExcuse(who, action, what, when);
    document.querySelector("#excusa").textContent = excusaa;
  });
}
