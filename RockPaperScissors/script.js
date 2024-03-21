let npc = "";
let result_msg = "";
let win_counter = 0;
let game_counter = 0;

const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");

const result_screen = document.createElement("h1");
const comment_screen = document.createElement("p");
const result_container = document.querySelector(".result-container");
const resetBtn = document.querySelector(".reset");

result_screen.textContent = "...";
result_container.append(result_screen);

comment_screen.textContent = "Please choose";
result_container.append(comment_screen);

rock_btn.addEventListener("click", () => {
  playRound("rock");
});
paper_btn.addEventListener("click", () => {
  playRound("paper");
});
scissors_btn.addEventListener("click", () => {
  playRound("scissors");
});

resetBtn.addEventListener("click", () => {
  resetGame();
});

function playRound(playerPick) {
  game_counter += 1; // round count init

  //npc choice
  let num = Math.floor(Math.random() * 3) + 1;
  if (num === 1) {
    npc = "rock";
  } else if (num === 2) {
    npc = "paper";
  } else if (num === 3) {
    npc = "scissors";
  }
  // give the result
  if (playerPick === npc) {
    result_msg = `it's a tie, you both picked ${(playerPick, npc)}`;
  } else if ((playerPick === "rock") & (npc === "scissors")) {
    result_msg = "you win! your choice: rock, computer's choice : scissors";
    win_counter += 1;
  } else if ((playerPick === "rock") & (npc === "paper")) {
    result_msg = "you lose! your choice: rock, computer's choice : paper";
  } else if ((playerPick === "paper") & (npc === "scissors")) {
    result_msg = "you lose! your choice: paper, computer's choice : scissors";
  } else if ((playerPick === "paper") & (npc === "rock")) {
    result_msg = "you win! your choice: paper, computer's choice : rock";
    win_counter += 1;
  } else if ((playerPick === "scissors") & (npc === "rock")) {
    result_msg = "you lose! your choice: scissors, computer's choice : rock";
  } else if ((playerPick === "scissors") & (npc === "paper")) {
    result_msg = "you win! your choice: scissors, computer's choice : paper";
    win_counter += 1;
  }

  /* result_screen.textContent = win_counter;
  comment_screen.textContent = result_msg;
  result_container.append(result_screen);
  result_container.append(comment_screen);
 */
  if (win_counter === 3) {
    result_screen.textContent = `Congratz you won 3 games in ${game_counter} trys`;
    win_counter = 0;
    game_counter = 0;
    comment_screen.textContent = "";
  } else if (game_counter === 5) {
    result_screen.textContent = `too bad, you lost after ${game_counter} try again`;
    win_counter = 0;
    game_counter = 0;
    comment_screen.textContent = "";
  } else {
    result_screen.textContent = ` you have: ${win_counter}/3 wins `;
    comment_screen.textContent = result_msg;
    result_container.append(result_screen);
    result_container.append(comment_screen);
  }
}

//reset game
function resetGame() {
  npc = "";
  result_msg = "";
  win_counter = 0;
  game_counter = 0;
  result_screen.textContent = "...";
  comment_screen.textContent = "Please pick one, good luck";
  result_container.append(result_screen);
  result_container.append(comment_screen);
}

// if player win at least 3 times, game exit and win
