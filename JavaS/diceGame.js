
var scores, roundscore, activeplayer, dice,gamePlay;
scores = [0,0];
roundscore = 0;
activeplayer = 0;
gamePlay = true

// console.log(dice);

document.querySelector("#current-" + activeplayer).innerHTML = "<en>" +dice+ "</en>";
var score = document.querySelector("#score-0");
console.log(score.textContent);

document.querySelector("#dice-img").style.display="none";

document.querySelector("#score-0").textContent=0;
document.querySelector("#score-1").textContent=0;
document.querySelector("#current-0").textContent=0;
document.querySelector("#current-1").textContent=0;


        document.querySelector(".btn-roll").addEventListener('click',function(){
        if(gamePlay){
        var diceDom = document.querySelector("#dice-img");
        diceDom.style.display="block";
        dice = Math.floor(Math.random() * 6) +1;
        diceDom.src ="./Image/dice-" + dice + ".png";
        

        if(dice !== 1 ){
        roundscore += dice;
        document.querySelector("#current-"+activeplayer).textContent= roundscore;
        } else{
        activeplayer == 0 ? (activeplayer = 1) : (activeplayer = 0);
        roundscore = 0;
        document.querySelector("#current-0").textContent=0;
        document.querySelector("#current-1").textContent = 0;
        // document.querySelector(".player-0-panel").classList.remove("active");
        // document.querySelector(".player-1-panel").classList.add("active");
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
     
        document.querySelector("#dice-img").style.display="none";
}
        }
        });


         document.querySelector(".btn-hold").addEventListener('click',function(){
                 if(gamePlay){
                scores[activeplayer] += roundscore;
                console.log("final score =====>"+scores[activeplayer]);
        document.querySelector("#score-" + activeplayer).textContent = scores[activeplayer];
       // next();
        if(scores[activeplayer] >= 10){
                console.log(roundscore);
                document.querySelector("#name-" + activeplayer).textContent = "Winner!!!";
                document.querySelector("#dice-img").style.display="none";
                document.querySelector(".player-" + activeplayer + "-panel").classList.add("winner");
                document.querySelector(".player-" + activeplayer + "-panel").classList.remove("active");
                gamePlay = false;
        }
        else{
                next();
         }
        }

});



                function next(){
                        activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
                        roundscore = 0;
                        document.querySelector("#current-0").textContent = 0;
                        document.querySelector("#current-1").textContent = 0;
                        document.querySelector(".player-0-panel").classList.toggle("active");
                        document.querySelector(".player-1-panel").classList.toggle("active");
                        document.querySelector("#dice-img").style.display="none";
                        
                }

                // function disableBtn(buttons){
                //         var btn1 = document.querySelector(".btn-roll");
                //         var btn2 = document.querySelector(".btn-hold");
                //         if ()
                // }
        
         document.querySelector(".btn-new").addEventListener('click',function(){
                
                newGame();
         
        });
                // document.location.href = "";
                       //  next();
                       function newGame(){
                               
                        scores = [0,0];
                        roundscore = 0;
                        activeplayer = 0;
                        gamePlay = true
                        document.querySelector("#dice-img").style.display="none";
                        document.querySelector("#name-0").textContent ="Player 1";
                        document.querySelector("#name-1").textContent ="Player 2";
        
                        document.querySelector("#score-0").textContent=0;
                        document.querySelector("#score-1").textContent=0;
                        document.querySelector("#current-0").textContent=0;
                        document.querySelector("#current-1").textContent=0;
                         
                        document.querySelector(".player-" + activeplayer + "-panel").classList.remove("active");
                        document.querySelector(".player-" + activeplayer + "-panel").classList.remove("winner");
                        document.querySelector(".player-0-panel").classList.add("active");
                        document.querySelector(".player-1-panel").classList.remove("active");
                            
                       }

