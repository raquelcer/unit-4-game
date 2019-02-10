$(document).ready(function() {

    var guessNumber;
    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var crystal1Val;
    var crystal2Val;
    var crystal3Val;
    var crystal4Val;


    function starGame(){
        guessNumber = Math.floor(Math.random() *110) + 20;
        crystal1Val = Math.round(Math.random() *12);
        crystal2Val = Math.round(Math.random() *12);
        crystal3Val = Math.round(Math.random() *12);
        crystal4Val = Math.round(Math.random() *12);

    }

    function newGame(){
        starGame();
        totalScore = 0;
        $("#guess-number").text(guessNumber);
        $("#totalScore").text(totalScore);
        $("#crystal1").attr("data-value", crystal1Val);
        $("#crystal2").attr("data-value", crystal2Val);
        $("#crystal3").attr("data-value", crystal3Val);
        $("#crystal4").attr("data-value", crystal4Val);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#winOrLose").text("");
        
    }

    function win(){
        $("#winOrLose").text("YOU WIN!");
        wins++;
        $("#wins").text(wins);
    }

    function loses(){
        $("#winOrLose").text("YOU LOSE :(!");
        losses++;
        $("#losses").text(losses);
    }

    newGame();

    $(".crystalimg").on("click",function(){
        if (totalScore >= guessNumber){
            return;
        }

        var crystalValue = $(this).attr("data-value");
        crystalValue = parseInt(crystalValue);
        totalScore += crystalValue;
        $("#totalScore").text(totalScore);
        console.log(totalScore);

        if(totalScore === guessNumber){
            win();
        }else if (totalScore > guessNumber){
            loses();
        }

    });
$(".btn").on("click",function(){
    newGame();
});


});