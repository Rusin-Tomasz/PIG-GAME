
var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector(".btn-roll").addEventListener("click", function() {
  if(gamePlaying) {
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    // 2. Display the result
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "img/dice-" + dice + ".png";
    
    // 3. Uptade the round score IF the rolled number was NOT 1
    if (dice !== 1) {
        //Add score
        roundScore += dice;
        //roundScore = roundScore + dice  /to to samo
        document.querySelector(".temporary-score").textContent = roundScore;
    } else {
        //Next player
        nextPlayer();
     }
   }
});


document.querySelector(".btn-hold-score").addEventListener("click", function(){
   if(gamePlaying){
    // Add Current Score to Global Score
    scores[activePlayer - 1] += roundScore;
    
   //Update the UI - User Interface
    document.querySelector(".player-" + activePlayer + "-score").textContent = scores[activePlayer - 1];

if (scores[activePlayer - 1] >= 30) {
        //Won the game
        document.querySelector(".player-" + activePlayer + "-name").textContent = "Wygrałeś!";
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".player-" + activePlayer + "-cn").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-cn").classList.remove("active");
        gamePlaying = false;
    } else {
        //Next player 
        nextPlayer();
    }
   }
});


function nextPlayer () {
        //Next player
        activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
        roundScore = 0;
           
        document.querySelector(".player-1-cn").classList.toggle("active");
        document.querySelector(".player-2-cn").classList.toggle("active");
        document.querySelector(".temporary-score").textContent = "0";
               
        document.querySelector(".dice").style.display = "none";
    }

document.querySelector(".btn-newgame").addEventListener("click", init);

function init() {
    scores = [0, 0];
    activePlayer = 1;
    roundScore = 0;
    gamePlaying = true;
    document.querySelector(".dice").style.display = "none";

    document.querySelector(".player-1-score").textContent = "0";
    document.querySelector(".player-2-score").textContent = "0";
    document.querySelector(".temporary-score").textContent = "0";
    document.querySelector(".player-1-name").textContent = "Gracz1";
    document.querySelector(".player-2-name").textContent = "Gracz2";
    document.querySelector(".player-1-cn").classList.remove("winner");
    document.querySelector(".player-2-cn").classList.remove("winner");
    document.querySelector(".player-1-cn").classList.remove("active");
    document.querySelector(".player-2-cn").classList.remove("active");
    document.querySelector(".player-1-cn").classList.add("active");

}



































































