let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  const target = Math.floor(Math.random() * 9);
  return target;
};

const compareGuesses = (humanGuess, compGuess, target) => {
  const humanDifference = Math.abs(target - humanGuess);
  const compDifference = Math.abs(target - compGuess);
  let userWin;

  if (humanDifference > compDifference) {
    userWin = true;
  } else if (humanDifference < compDifference) {
    userWin = false;
  } else {
    userWin = true;
  }

  return userWin;
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
