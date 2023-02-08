let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
guessField.focus();

function checkGuess() {
  const userGuess = Number(guessField.value);

  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }

  guesses.textContent += `${userGuess} `;
  guesses.style.backgroundColor = "yellow";
  guesses.style.boxShadow = "3px 3px 6px black";
  guesses.style.fontSize = "150%";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lastResult.style.boxShadow = "3px 3px 6px black";

    lowOrHigh.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!! GAME OVER";
    lowOrHigh.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong";
    lastResult.style.backgroundColor = "red";
    lastResult.style.fontSize = "160%";
    lastResult.style.boxShadow = "3px 3px 6px black";
    if (userGuess < randomNumber) {
      lowOrHigh.textContent = "Last guess was too low!";
      lowOrHigh.style.fontSize = "100%";
      lowOrHigh.style.backgroundColor = "aliceblue";
      lowOrHigh.style.boxShadow = "3px 3px 6px black";
    } else if (userGuess > randomNumber) {
      lowOrHigh.textContent = "Last guess was too high!";
      lowOrHigh.style.backgroundColor = "lightblue";
      lowOrHigh.style.fontSize = "120%";
      lowOrHigh.style.boxShadow = "3px 3px 6px black";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
