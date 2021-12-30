"use strict";

let secretNumber = 0;
let score = 20;
let highScore = 0;

const setTextContent = (className, text) => {
  document.querySelector(`.${className}`).textContent = text;
};

const setBodyBackgroundColor = (color) => {
  document.querySelector("body").style.backgroundColor = `${color}`;
};

const setSecretNumberWidth = (width) => {
  document.querySelector(".number").style.width = width;
};

const generateRandomNumber = () => {
  return Math.trunc(Math.random() * 20) + 1;
};

secretNumber = generateRandomNumber();

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    setTextContent("message", "No Number!");
  }

  // When player wins
  else if (guess === secretNumber) {
    setTextContent("message", "Correct Number!");
    setTextContent("number", secretNumber);
    setBodyBackgroundColor("#60b347");
    setSecretNumberWidth("30rem");
    if (score > highScore) {
      highScore = score;
      setTextContent("highscore", highScore);
    }
  }

  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      setTextContent(
        "message",
        guess > secretNumber ? "Too high!" : "Too low!"
      );
      score--;
      setTextContent("score", score);
    } else {
      setTextContent("message", "You lost the game!");
      setTextContent("score", 0);
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  setTextContent("score", 20);
  secretNumber = generateRandomNumber();
  setTextContent("number", "?");
  setSecretNumberWidth("15rem");
  document.querySelector(".guess").value = "";
  setTextContent("message", "Start guessing...");
  setBodyBackgroundColor("#222");
});
