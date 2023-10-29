document.addEventListener("click", function () {
    const redBut = document.getElementById("redButton");
    const greenBut = document.getElementById("greenButton");
    const BlueBut = document.getElementById("blueButton");
    const reBut = document.getElementById("resetButton");



    redBut.addEventListener("click", function () {
        document.body.style.backgroundColor = "Red";
    }) ;
    greenBut.addEventListener("click", function () {
        document.body.style.backgroundColor = "Green";
    }) ;
    BlueBut.addEventListener("click", function () {
        document.body.style.backgroundColor = "Blue";
    }) ;
    reBut.addEventListener("click", function () {
        document.body.style.backgroundColor = "White";
    }) ;



});
