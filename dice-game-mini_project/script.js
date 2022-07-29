'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// instantiate
let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {  // init - initialize specific state of application.
    scores = [0, 0];        // setting variables to default.
    currentScore = 0;
    activePlayer = 0;
    playing = true;
  
    score0El.textContent = 0;   // displaying default values.
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
  
    diceEl.classList.add('hidden');                     // hide element.
    player0El.classList.remove('player--winner');       // remove winner mark.
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');          // add active mark.
    player1El.classList.remove('player--active');       // remove active mark.
  };
  init();               // call inti.
  
  const switchPlayer = function () {        // 
    document.getElementById(`current--${activePlayer}`).textContent = 0;    // change active player to 0
                                                                            // select by ID.
    currentScore = 0;                                                       // set current score to 0.
    activePlayer = activePlayer === 0 ? 1 : 0;                              // ternary operator if(activePlayer === 0) than(set to 1) else(set to 0).
    player0El.classList.toggle('player--active');                           // toggles player--active class.
    player1El.classList.toggle('player--active');
  };

  // Rolling dice functionality
btnRoll.addEventListener('click', function () {          // click event.
    if (playing) {
      // 1. Generating a random dice roll
      const dice = Math.trunc(Math.random() * 6) + 1;    // constant variable as random number with '.trunc',
                                                         // to cut off the dezimal number.
  
      // 2. Display dice
      diceEl.classList.remove('hidden');                 // remove hidden class from dice element.
      diceEl.src = `dice-${dice}.png`;                   // adding src to new dice image. 
  
      // 3. Check for rolled 1
      if (dice !== 1) {                                  // if dice is unequal to 1, 
        // Add dice to current score
        currentScore += dice;                            // add dice to current score.
        document.getElementById(                         // select currently active player.
          `current--${activePlayer}`                      
        ).textContent = currentScore;                    // display current score.
      } else {
        // Switch to next player
        switchPlayer();                                  // otherwise switch active player
      }
    }
  });

  btnHold.addEventListener('click', function () {           // click event
    if (playing) {                                          // playing is true,
      // 1. Add current score to active player's score
      scores[activePlayer] += currentScore;                 // current score is added to score of active player
      // scores[1] = scores[1] + currentScore
  
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];                               // display score of active player
  
      // 2. Check if player's score is >= 100
      if (scores[activePlayer] >= 100) {                    // if the score of active player is higher than 100,
                                                            // Finish the game.
        playing = false;
        diceEl.classList.add('hidden');
  
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');
      } else {
        // Switch to the next player
        switchPlayer();
      }
    }
  });