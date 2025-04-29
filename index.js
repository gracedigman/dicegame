// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
  // Game elements
  const landing = document.getElementById('landing');
  const gameArea = document.getElementById('gameArea');
  const startBtn = document.getElementById('startBtn');
  const rollBtn = document.getElementById('rollBtn');
  const resetBtn = document.getElementById('resetBtn');
  const backBtn = document.getElementById('backBtn');
  const refreshBtn = document.getElementById('refreshBtn');
  const dice1 = document.getElementById('dice1');
  const dice2 = document.getElementById('dice2');
  const result = document.getElementById('result');
  const score1Element = document.getElementById('score1');
  const score2Element = document.getElementById('score2');

  // Game state
  let player1Score = 0;
  let player2Score = 0;
  let gameActive = false;

  // Dice images paths
  const diceFaces = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
  ];

  // Function to start the game
  function startGame() {
    landing.style.display = 'none'; // Hide the landing page
    gameArea.style.display = 'block'; // Show the game area
    gameArea.classList.add('fade-in'); // Optional: Add fade-in effect
    gameActive = true;
    player1Score = 0;
    player2Score = 0;
    updateScores();
    result.textContent = 'Roll the dice!';
  }

  // Function to roll the dice
  function rollDice() {
    if (!gameActive) return;

    // Add rolling animation class
    dice1.classList.add('rolling');
    dice2.classList.add('rolling');

    // Set time delay for dice roll to complete
    setTimeout(() => {
      // Generate random dice results
      const player1Roll = Math.floor(Math.random() * 6);
      const player2Roll = Math.floor(Math.random() * 6);

      // Update dice images
      dice1.src = diceFaces[player1Roll];
      dice2.src = diceFaces[player2Roll];

      // Remove rolling animation class
      dice1.classList.remove('rolling');
      dice2.classList.remove('rolling');

      // Determine the winner
      if (player1Roll > player2Roll) {
        player1Score++;
        result.textContent = 'Player 1 wins this round!';
      } else if (player2Roll > player1Roll) {
        player2Score++;
        result.textContent = 'Player 2 wins this round!';
      } else {
        result.textContent = 'It\'s a tie!';
      }

      // Update scores
      updateScores();
    }, 1000); // Dice roll animation time
  }

  // Function to update the scores on the screen
  function updateScores() {
    score1Element.textContent = `Score: ${player1Score}`;
    score2Element.textContent = `Score: ${player2Score}`;
  }

  // Function to reset the game
  function resetGame() {
    player1Score = 0;
    player2Score = 0;
    updateScores();
    result.textContent = 'Roll the dice!';
  }

  // Function to go back to the landing page
  function goBack() {
    gameArea.style.display = 'none'; // Hide the game area
    landing.style.display = 'block'; // Show the landing page
  }

  // Event listeners for buttons
  startBtn.addEventListener('click', startGame);
  rollBtn.addEventListener('click', rollDice);
  resetBtn.addEventListener('click', resetGame);
  backBtn.addEventListener('click', goBack);
  
});
