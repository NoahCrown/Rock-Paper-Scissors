var playerScore = 0;
var cpuScore = 0;

for (var i = 0; i < document.querySelectorAll(".choice").length; i++) {
    document.querySelectorAll(".choice")[i].addEventListener("click", function () {
        var playerChoice = this.value;
        battleChoices(playerChoice, "player");
        var cpuChoice = Math.floor((Math.random() * 3) + 1).toString();
        battleChoices(cpuChoice, "cpu");

        if ((playerChoice === "1" && cpuChoice === "2") || (playerChoice === "2" && cpuChoice === "3") || (playerChoice === "3" && cpuChoice === "1")) {
            cpuScore++;
            document.getElementById("cpuScore").innerHTML = cpuScore.toString();
        } else if ((playerChoice === "1" && cpuChoice === "3") || (playerChoice === "2" && cpuChoice === "1") || (playerChoice === "3" && cpuChoice === "2")) {
            playerScore++;
            document.getElementById("playerScore").innerHTML = playerScore.toString();
        }


    })
}

function battleChoices(choices, playerOrCpu) {
    switch (choices) {
        case "1":
            document.getElementById(playerOrCpu).src = "images/fist.png";
            break;
        case "2":
            document.getElementById(playerOrCpu).src = "images/palm.png";
            break;
        case "3":
            document.getElementById(playerOrCpu).src = "images/scissors.png";
            break;
        default:
            alert("Error! 404!")
    }
}