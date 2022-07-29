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
            document.querySelector('.number').textContent = secretNumber;           // display hidden secretNumber.

            document.querySelector('body').style.backgroundColor = '#60b347';       // change background color to green,
            document.querySelector('.number').style.width = '30rem';                // when game is won.

            if (score < highscore) {                                                // when score is higher than previous highscrore,
                highscore = score;                                                  // overwrite highscore with score.
                document.querySelector('.highscore').textContent = highscore;       // display new highscore.
            }
        }   // %%%% when player is wrong %%%%
        else if (guess !== secretNumber) {                                          // when guess is not correct,
            if (score > 1) {                                                        // requirement to be above at least 1 score.
                document.querySelector('.message').textContent =                    // ternary operator if guess is too low or too high.
                guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
                //displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
                score--;                                                            // decrement by 1 per every guess.
                document.querySelector('.score').textContent = score;               // display new score.
            }
            else {                                                                  // if you lost the game,
                document.querySelector('.message').textContent = 'you lost!';       // display you lost.
                //displayMessage('you lost the game!');
            }
        } 
    }
);

document.querySelector('.again').addEventListener('click', function () {            // click event for omplementing the again button.
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');                                            // resetting all values back to default.
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
  

