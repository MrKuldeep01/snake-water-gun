let s = document.querySelector(".snakebox");
let w = document.querySelector(".waterbox");
let g = document.querySelector(".gunbox");
let result = document.querySelector(".result");
let user;
let cpu;
let chance = 1;

s.addEventListener("click", () => {
  user = "snake";
  playRound();
});

w.addEventListener("click", () => {
  user = "water";
  playRound();
});

g.addEventListener("click", () => {
  user = "gun";
  playRound();
});

function playRound() {
  let rn = Math.floor(Math.random() * 3) + 1;

  if (rn == 1) {
    cpu = "snake";
  } else if (rn == 2) {
    cpu = "water";
  } else {
    cpu = "gun";
  }

  score();
}

function score() {
  if (user == cpu) {
    result.innerText = `Tie, both are select same option :${cpu}`;
  } else if (
    (user == "snake" && cpu == "water") ||
    (user == "water" && cpu == "gun") ||
    (user == "gun" && cpu == "snake")
  ) {
    result.innerText = `You win! cpu : ${cpu}, your : ${user}`;
  } else {
    result.innerText = `CPU wins! cpu : ${cpu}, your : ${user}`;
  }

  if (chance < 5) {
    chance++;
  } else {
    // End of the game
    // result.innerText=``
    // You can display the final result or take further actions here.
  }
}
