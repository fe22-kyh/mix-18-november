// Object literals

// let car = {
//   wheels: 4,
//   doors: 4,
//   window: 6,
//   color: "maroon",
//   name: "postnord"
// }

// console.log(car.color)
// console.log(car.wheels)
// console.log(car.window)
// console.log(car.name)

// console.log(`${car.name} has the color ${car.color}`);

let playerOne = {
  name: "Bertil",
  score: 0
}

let playerTwo = {
  name: "Yves",
  score: 0
}

let players = [playerOne, playerTwo];
let gameTurn = 0;
let hiddenNumber = 0;

const playerTurnLbl = document.querySelector(".player-turn-lbl");
const playerGuessField = document.querySelector(".player-guess-field");
const playerGuessBtn = document.querySelector(".player-guess-btn");
const playerGuessMsg = document.querySelector(".player-guess-msg");
const playerOneScorePara = document.querySelector(".player-one-score");
const playerTwoScorePara = document.querySelector(".player-two-score");

function updateDisplays() {
  let currentPlayer = players[gameTurn];
  playerTurnLbl.innerText = currentPlayer.name;
  playerOneScorePara.innerText = `${players[0].name}: ${players[0].score}`
  playerTwoScorePara.innerText = `${players[1].name}: ${players[1].score}`
}

function handleGuess() {
  let guessValue = playerGuessField.value; // input använder value istället för text

  if (guessValue == hiddenNumber) {
    let currentPlayer = players[gameTurn];
    currentPlayer.score = currentPlayer.score + 1;

    playerGuessMsg.innerText = "Guess was correct!";
    startGame(); // restarts game

  } else if (guessValue > hiddenNumber) {
    playerGuessMsg.innerText = "Guess was too high!";
  } else {
    playerGuessMsg.innerText = "Guess was too low!";
  }

  gameTurn = (gameTurn + 1) % 2; // alternera mellan spelare

  updateDisplays();
}

playerGuessBtn.addEventListener("click", handleGuess);

function startGame() {
  gameTurn = 0;
  hiddenNumber = Math.floor(Math.random() * 10) + 1;

  let currentPlayer = players[gameTurn];
  // console.log(players)
  // console.log(currentPlayer);
  playerTurnLbl.innerText = currentPlayer.name;
}

startGame();

