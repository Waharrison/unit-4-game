$(document).ready(function () {
    var targetNumber = Math.floor(Math.random() * 102 + 18)
    var counter = 0;
    var increment1 = Math.floor(Math.random() * 12 + 1)
    var increment2 = Math.floor(Math.random() * 12 + 1)
    var increment3 = Math.floor(Math.random() * 12 + 1)
    var increment4 = Math.floor(Math.random() * 12 + 1)
    var wins = 0;
    var winSpan = document.getElementById("wins");
    var losses = 0;
    var lossesSpan = document.getElementById("losses");


    $("#number-to-guess").text(targetNumber);



    $("#crystal-1").on("click", function () {
        counter += increment1;
        console.log(increment1);
        if (counter === targetNumber) {
            alert("You win!");
            counter = 0;
            wins++;
            winSpan.textContent = wins;
            increment1 = Math.floor(Math.random() * 12 + 1);
            increment2 = Math.floor(Math.random() * 12 + 1);
            increment3 = Math.floor(Math.random() * 12 + 1);
            increment4 = Math.floor(Math.random() * 12 + 1);
            targetNumber= Math.floor(Math.random() * 102 + 18);
            console.log(targetNumber);
          


        }
        else if (counter > targetNumber) {
            alert("You lose!");
            counter = 0;
            losses++;
            lossesSpan.textContent = losses;
            increment1 = Math.floor(Math.random() * 12 + 1);
            increment2 = Math.floor(Math.random() * 12 + 1);
            increment3 = Math.floor(Math.random() * 12 + 1);
            increment4 = Math.floor(Math.random() * 12 + 1);
            targetNumber= Math.floor(Math.random() * 102 + 18);
            console.log(targetNumber);
            
        }
        $("#score-total").text(counter);
        $("#number-to-guess").text(targetNumber);
    })

    $("#crystal-2").on("click", function () {
        counter += increment2;
        console.log(increment2);
        if (counter === targetNumber) {
            alert("You win!");
            counter = 0;
            wins++;
            winSpan.textContent = wins;
            increment1 = Math.floor(Math.random() * 12 + 1);
            increment2 = Math.floor(Math.random() * 12 + 1);
            increment3 = Math.floor(Math.random() * 12 + 1);
            increment4 = Math.floor(Math.random() * 12 + 1);
            targetNumber = Math.floor(Math.random() * 102 + 18);
        }
        else if (counter > targetNumber) {
            alert("You lose!");
            counter = 0;
            losses++;
            lossesSpan.textContent = losses;
            increment1 = Math.floor(Math.random() * 12 + 1);
            increment2 = Math.floor(Math.random() * 12 + 1);
            increment3 = Math.floor(Math.random() * 12 + 1);
            increment4 = Math.floor(Math.random() * 12 + 1);
            targetNumber = Math.floor(Math.random() * 102 + 18);
        }
        $("#score-total").text(counter);
        $("#number-to-guess").text(targetNumber);
    })

    $("#crystal-3").on("click", function () {
        counter += increment3;
        console.log(increment3);
        if (counter === targetNumber) {
            alert("You Win!");
            counter = 0;
            iwins++;
            winSpan.textContent = wins;
            increment1 = Math.floor(Math.random() * 12 + 1);
            increment2 = Math.floor(Math.random() * 12 + 1);
            increment3 = Math.floor(Math.random() * 12 + 1);
            increment4 = Math.floor(Math.random() * 12 + 1);
            targetNumber = Math.floor(Math.random() * 102 + 18);
        }
        else if (counter > targetNumber) {
            alert("You Lose!");
            counter = 0;
            losses++;
            lossesSpan.textContent = losses;
            increment1 = Math.floor(Math.random() * 12 + 1);
            increment2 = Math.floor(Math.random() * 12 + 1);
            increment3 = Math.floor(Math.random() * 12 + 1);
            increment4 = Math.floor(Math.random() * 12 + 1);
            targetNumber = Math.floor(Math.random() * 102 + 18);
        }
        $("#score-total").text(counter);
        $("#number-to-guess").text(targetNumber);
    })

    $("#crystal-4").on("click", function () {
        counter += increment4;
        console.log(increment4);
        if (counter === targetNumber) {
            alert("You Win!");
            counter = 0;
            wins++;
            winSpan.textContent = wins;
            increment1 = Math.floor(Math.random() * 12 + 1);
            increment2 = Math.floor(Math.random() * 12 + 1);
            increment3 = Math.floor(Math.random() * 12 + 1);
            increment4 = Math.floor(Math.random() * 12 + 1);
            targetNumber = Math.floor(Math.random() * 102 + 18);
        }
        else if (counter > targetNumber) {
            alert("You Lose!");
            counter = 0;
            losses++;
            lossesSpan.textContent = losses;
            increment1 = Math.floor(Math.random() * 12 + 1);
            increment2 = Math.floor(Math.random() * 12 + 1);
            increment3 = Math.floor(Math.random() * 12 + 1);
            increment4 = Math.floor(Math.random() * 12 + 1);
            targetNumber = Math.floor(Math.random() * 102 + 18);
        }
        $("#score-total").text(counter);
        $("#number-to-guess").text(targetNumber);
    })



})