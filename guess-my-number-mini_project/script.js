'use strict';

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%% DOM Manipulation %%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// # change text content of any element with query-selector

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct number!';

// document.querySelector('.number').textContent = 21;
// document.querySelector('.score').textContent = 21; 

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%% DOM Manipulation %%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// %%%% variable decleration %%%%
let secretNumber = Math.trunc(Math.random() * 20) + 1;  // the random number.
let score = 20;                                         // score.
let highscore = 0;                                      // highest score.

// %%%% when there is no input %%%%
document.querySelector('.check').addEventListener('click', function () {            // add 'Event' onto class '.check'.
    const guess = Number(document.querySelector('.guess').value);                   // creating guess variable.
    console.log(guess, typeof guess);                                               // logging user input guess.

        if (!guess) {                                                               // if guess is empty, 
            document.querySelector('.message').textContent = '⛔️ No number!';       // change '.message' class to 'no number' in text content. 
            //displayMessage('⛔️ No number!');
        }   // %%%% when player wins %%%%
        else if (guess === secretNumber) {                                          // if guess is correct,
            document.querySelector('.message').textContent = 'corrct number';       // display 'correct number!'
            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            if (score < highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }   // %%%% when player is wrong %%%%
        else if (guess !== secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent =
                guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
                //displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = 'you lost!';
                //displayMessage('you lost the game!');
            }
        } 
    }
);

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
  

