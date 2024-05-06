window.onload = function () {
  //write your code here
  newExcuse();
};

const who = [
  "My dog",
  "My sister",
  "My grandma",
  "His bird",
  "My neighbor",
  "The delivery guy",
];
const action = ["ate", "crushed", "broke", "peed", "stole", "lost"];
const what = [
  "my homework",
  "the keys",
  "the umbrella",
  "the car",
  "my phone",
  "my lunch",
  "the computer",
];
const when = [
  "before the class",
  "right now",
  "during my lunch",
  "while I was sleeping",
  "in the morning",
  "at midnight",
  "while I was at the store",
  "during the meeting",
];

function GenereExcuse(who, action, what, when) {
  let excuse = "";
  let whoRandom = Math.floor(Math.random() * who.length);
  let actionRandom = Math.floor(Math.random() * action.length);
  let whatRandom = Math.floor(Math.random() * what.length);
  let whenRandom = Math.floor(Math.random() * when.length);

  excuse =
    who[whoRandom] +
    " " +
    action[actionRandom] +
    " " +
    what[whatRandom] +
    " " +
    when[whenRandom] +
    ".";
  return excuse;
}

function newExcuse() {
  document.querySelector("#btnExcuse").addEventListener("click", function () {
    var excusaa = GenereExcuse(who, action, what, when);
    document.querySelector("#excusa").textContent = excusaa;
  });
}
