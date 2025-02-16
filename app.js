// Game variables
let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let score = 10;

// DOM elements
const guessInput = document.getElementById("guess-input");
const checkBtn = document.getElementById("check-btn");
const restartBtn = document.getElementById("restart-btn");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("score");

// Check button functionality
checkBtn.addEventListener("click", () => {
  const userGuess = Number(guessInput.value);

  // Input validation
  if (!userGuess || userGuess < 1 || userGuess > 100) {
   alert( "Please enter a number between 1 and 100.");
    return;
  }

  // Game logic
  if (userGuess === randomNumber) {
    message.textContent = "🎉 Correct! You guessed the number!";
    message.style.color = "green";
    checkBtn.style.display = "none";
    restartBtn.style.display = "block";
  } else if (userGuess > randomNumber) {
    message.textContent = "📉 Too high! Try again.";
    score--;
  } else {
    message.textContent = "📈 Too low! Try again.";
    score--;
  }

  // Update score and check for game over
  scoreDisplay.textContent = `Score: ${score}`;
  if (score === 0) {
    message.textContent = "💀 Game Over! The number was " + randomNumber + ".";
    message.style.color = "red";
    checkBtn.style.display = "none";
    restartBtn.style.display = "block";
  }
});

// Restart button functionality
restartBtn.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  score = 10;
  message.textContent = "Good luck!";
  message.style.color = "#333";
  scoreDisplay.textContent = `Score: ${score}`;
  guessInput.value = "";
  checkBtn.style.display = "block";
  restartBtn.style.display = "none";
});
