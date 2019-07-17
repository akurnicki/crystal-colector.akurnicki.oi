function initial() {
    var cc = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#magicNumber").text(cc);
    crystalGenerator()
}

function crystalGenerator(){
    for (var i= 0; i < 4; i++){
        var crystalNum = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        
        var crystalName = "#crystal" + i;
    
        $(crystalName).attr("data-value", crystalNum); 
    }
}

function checkGameStatus() {
    var yourScore = $("#yourScore").text()
    yourScore = parseInt(yourScore);
    var magicNumber = $("#magicNumber").text()
    magicNumber = parseInt(magicNumber);


    if (yourScore == magicNumber) {
        var wins = $("#wins").text()
        wins = parseInt(wins);
        wins++;
        $("#wins").text(wins);
        reset();
    }else if (yourScore > magicNumber) {
        var losses = $("#losses").text()
        losses = parseInt(losses);
        losses++;
        $("#losses").text(losses);
        reset();
    }
}

function reset(){
    $("#yourScore").text(0);
    initial();
}

$("p").on("click", function() {
    var count = $("#yourScore").text()
    count = parseInt(count);
    count += parseInt($(this).attr("data-value"));
    $("#yourScore").text(count);
    checkGameStatus()
})

initial()

