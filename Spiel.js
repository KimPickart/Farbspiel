window.onload = function () {
    let redButton = document.getElementsByClassName("rot")[0];
    let greenButton = document.getElementsByClassName("grün")[0];
    let yellowButton = document.getElementsByClassName("gelb")[0];
    let whiteButton = document.getElementsByClassName("weiß")[0];
    let blueButton = document.getElementsByClassName("blau")[0];
    let blackButton = document.getElementsByClassName("schwarz")[0];

    let control = document.getElementsByClassName("fertig")[0];
    let colorScreen = document.getElementById("Farbanzeige");
    let fields = document.getElementsByClassName("feld");
    let screenField = document.getElementsByClassName("anzeigeFeld");
    let selectField = null;
    let points = 0;
    let textPoints = document.getElementsByClassName("Punkte")[0];


    let drawFields = [25];
    let screenFields = [25];

    textPoints.innerHTML = points;
    textPoints.style.marginLeft = "13px";
    textPoints.style.marginTop = "6px";
    textPoints.style.fontSize = "25px"
    textPoints.style.fontFamily = "Arial, Helvetica, sans-serif"

    for (let index = 0; index < fields.length; index++) {
        fields[index].addEventListener("click", function () {
            selectField = fields[index];
            selectField.style.backgroundColor = "#848484";
        });
    }

    function changeColor(color, number) {
        if (selectField !== null) {
            colorScreen.style.backgroundColor = color;
            console.log(colorScreen.style.backgroundColor);
            console.log(colorScreen.style.backgroundColor == "red");
            selectField.style.backgroundColor = color;

            for (let u = 0; u < fields.length; u++) {
                if (selectField === fields[u]) {
                    drawFields[u] = number;
                }
            }
        }
    }

    redButton.addEventListener("click", function () {
        changeColor("red", 1);
    });

    greenButton.addEventListener("click", function () {
        changeColor("green", 2);
    });

    yellowButton.addEventListener("click", function () {
        changeColor("yellow", 3);
    });

    whiteButton.addEventListener("click", function () {
        changeColor("white", 4);
    });

    blueButton.addEventListener("click", function () {
        changeColor("blue", 5);
    });

    blackButton.addEventListener("click", function () {
        changeColor("black", 6);
    });

    let zuordnungFarbeZuZahl = {
        "red": 1,
        "green": 2,
        "yellow": 3,
        "white": 4,
        "blue": 5,
        "black": 6
    }

    /*let grafics = [];
    let fields1 = [["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red"]];
    for (let index = 0; index < fields1.length; index++) {
        grafics.push(Figur(fields1[index]));
    }
    function Figur(liste) {
        for (let index = 0; index < screenField.length; index++) {
            console.log(liste[index]);
            screenField[index].style.backgroundColor = liste[index];
            screenFields[index] = zuordnungFarbeZuZahl[liste[index]];
        }
    }
    console.log(grafics.length);
    grafics[0];*/


    let grafics = [
        function () { //heart
            screenField[1].style.backgroundColor = "red";
            screenFields[1] = 1;
            screenField[3].style.backgroundColor = "red";
            screenFields[3] = 1;
            screenField[5].style.backgroundColor = "red";
            screenFields[5] = 1;
            screenField[7].style.backgroundColor = "red";
            screenFields[7] = 1;
            screenField[9].style.backgroundColor = "red";
            screenFields[9] = 1;
            screenField[10].style.backgroundColor = "red";
            screenFields[10] = 1;
            screenField[14].style.backgroundColor = "red";
            screenFields[14] = 1;
            screenField[16].style.backgroundColor = "red";
            screenFields[16] = 1;
            screenField[18].style.backgroundColor = "red";
            screenFields[18] = 1;
            screenField[22].style.backgroundColor = "red";
            screenFields[22] = 1;
            screenField[6].style.backgroundColor = "red";
            screenFields[6] = 1;
            screenField[8].style.backgroundColor = "red";
            screenFields[8] = 1;
            screenField[11].style.backgroundColor = "red";
            screenFields[11] = 1;
            screenField[12].style.backgroundColor = "red";
            screenFields[12] = 1;
            screenField[13].style.backgroundColor = "red";
            screenFields[13] = 1;
            screenField[17].style.backgroundColor = "red";
            screenFields[17] = 1;
            screenField[2].style.backgroundColor = "white";
            screenFields[2] = 4;
            screenField[0].style.backgroundColor = "white";
            screenFields[0] = 4;
            screenField[4].style.backgroundColor = "white";
            screenFields[4] = 4;
            screenField[15].style.backgroundColor = "white";
            screenFields[15] = 4;
            screenField[19].style.backgroundColor = "white";
            screenFields[19] = 4;
            screenField[20].style.backgroundColor = "white";
            screenFields[20] = 4;
            screenField[21].style.backgroundColor = "white";
            screenFields[21] = 4;
            screenField[23].style.backgroundColor = "white";
            screenFields[23] = 4;
            screenField[24].style.backgroundColor = "white";
            screenFields[24] = 4;
        },

        function () { //diamond
            screenField[0].style.backgroundColor = "black";
            screenFields[0] = 6;
            screenField[1].style.backgroundColor = "black";
            screenFields[1] = 6;
            screenField[2].style.backgroundColor = "black";
            screenFields[2] = 6;
            screenField[3].style.backgroundColor = "black";
            screenFields[3] = 6;
            screenField[4].style.backgroundColor = "black";
            screenFields[4] = 6;
            screenField[5].style.backgroundColor = "black";
            screenFields[5] = 6;
            screenField[9].style.backgroundColor = "black";
            screenFields[9] = 6;
            screenField[15].style.backgroundColor = "black";
            screenFields[15] = 6;
            screenField[19].style.backgroundColor = "black";
            screenFields[19] = 6;
            screenField[20].style.backgroundColor = "black";
            screenFields[20] = 6;
            screenField[21].style.backgroundColor = "black";
            screenFields[21] = 6;
            screenField[23].style.backgroundColor = "black";
            screenFields[23] = 6;
            screenField[24].style.backgroundColor = "black";
            screenFields[24] = 6;
            screenField[6].style.backgroundColor = "white";
            screenFields[6] = 4;
            screenField[7].style.backgroundColor = "white";
            screenFields[7] = 4;
            screenField[8].style.backgroundColor = "white";
            screenFields[8] = 4;
            screenField[10].style.backgroundColor = "white";
            screenFields[10] = 4;
            screenField[14].style.backgroundColor = "white";
            screenFields[14] = 4;
            screenField[11].style.backgroundColor = "white";
            screenFields[11] = 4;
            screenField[12].style.backgroundColor = "white";
            screenFields[12] = 4;
            screenField[13].style.backgroundColor = "white";
            screenFields[13] = 4;
            screenField[16].style.backgroundColor = "white";
            screenFields[16] = 4;
            screenField[17].style.backgroundColor = "white";
            screenFields[17] = 4;
            screenField[18].style.backgroundColor = "white";
            screenFields[18] = 4;
            screenField[22].style.backgroundColor = "white";
            screenFields[22] = 4;
        },

        function () { //happy
            screenField[0].style.backgroundColor = "white";
            screenFields[0] = 4;
            screenField[1].style.backgroundColor = "white";
            screenFields[1] = 4;
            screenField[2].style.backgroundColor = "white";
            screenFields[2] = 4;
            screenField[3].style.backgroundColor = "white";
            screenFields[3] = 4;
            screenField[4].style.backgroundColor = "white";
            screenFields[4] = 4;
            screenField[5].style.backgroundColor = "white";
            screenFields[5] = 4;
            screenField[6].style.backgroundColor = "blue";
            screenFields[6] = 5;
            screenField[8].style.backgroundColor = "blue";
            screenFields[8] = 5;
            screenField[15].style.backgroundColor = "black";
            screenFields[15] = 6;
            screenField[19].style.backgroundColor = "black";
            screenFields[19] = 6;
            screenField[21].style.backgroundColor = "black";
            screenFields[21] = 6;
            screenField[23].style.backgroundColor = "black";
            screenFields[23] = 6;
            screenField[22].style.backgroundColor = "black";
            screenFields[22] = 6;
            screenField[7].style.backgroundColor = "white";
            screenFields[7] = 4;
            screenField[9].style.backgroundColor = "white";
            screenFields[9] = 4;
            screenField[10].style.backgroundColor = "white";
            screenFields[10] = 4;
            screenField[11].style.backgroundColor = "white";
            screenFields[11] = 4;
            screenField[12].style.backgroundColor = "white";
            screenFields[12] = 4;
            screenField[13].style.backgroundColor = "white";
            screenFields[13] = 4;
            screenField[14].style.backgroundColor = "white";
            screenFields[14] = 4;
            screenField[16].style.backgroundColor = "white";
            screenFields[16] = 4;
            screenField[17].style.backgroundColor = "white";
            screenFields[17] = 4;
            screenField[18].style.backgroundColor = "white";
            screenFields[18] = 4;
            screenField[20].style.backgroundColor = "white";
            screenFields[20] = 4;
            screenField[24].style.backgroundColor = "white";
            screenFields[24] = 4;
        },

        function () { //sad
            screenField[0].style.backgroundColor = "white";
            screenFields[0] = 4;
            screenField[1].style.backgroundColor = "white";
            screenFields[1] = 4;
            screenField[2].style.backgroundColor = "white";
            screenFields[2] = 4;
            screenField[3].style.backgroundColor = "white";
            screenFields[3] = 4;
            screenField[4].style.backgroundColor = "white";
            screenFields[4] = 4;
            screenField[5].style.backgroundColor = "white";
            screenFields[5] = 4;
            screenField[6].style.backgroundColor = "blue";
            screenFields[6] = 5;
            screenField[7].style.backgroundColor = "white";
            screenFields[7] = 4;
            screenField[8].style.backgroundColor = "blue";
            screenFields[8] = 5;
            screenField[9].style.backgroundColor = "white";
            screenFields[9] = 4;
            screenField[10].style.backgroundColor = "white";
            screenFields[10] = 4;
            screenField[11].style.backgroundColor = "white";
            screenFields[11] = 4;
            screenField[12].style.backgroundColor = "white";
            screenFields[12] = 4;
            screenField[13].style.backgroundColor = "white";
            screenFields[13] = 4;
            screenField[14].style.backgroundColor = "white";
            screenFields[14] = 4;
            screenField[15].style.backgroundColor = "white";
            screenFields[15] = 4;
            screenField[17].style.backgroundColor = "black";
            screenFields[17] = 6;
            screenField[19].style.backgroundColor = "white";
            screenFields[19] = 4;
            screenField[20].style.backgroundColor = "black";
            screenFields[20] = 6;
            screenField[21].style.backgroundColor = "white";
            screenFields[21] = 4;
            screenField[22].style.backgroundColor = "white";
            screenFields[22] = 4;
            screenField[23].style.backgroundColor = "white";
            screenFields[23] = 4;
            screenField[16].style.backgroundColor = "black";
            screenFields[16] = 6;
            screenField[18].style.backgroundColor = "black";
            screenFields[18] = 6;
            screenField[24].style.backgroundColor = "black";
            screenFields[24] = 6;

        },

        function () { //sun
            screenField[0].style.backgroundColor = "yellow";
            screenFields[0] = 3;
            screenField[2].style.backgroundColor = "yellow";
            screenFields[2] = 3;
            screenField[4].style.backgroundColor = "yellow";
            screenFields[4] = 3;
            screenField[6].style.backgroundColor = "yellow";
            screenFields[6] = 3;
            screenField[7].style.backgroundColor = "yellow";
            screenFields[7] = 3;
            screenField[8].style.backgroundColor = "yellow";
            screenFields[8] = 3;
            screenField[10].style.backgroundColor = "yellow";
            screenFields[10] = 3;
            screenField[11].style.backgroundColor = "yellow";
            screenFields[11] = 3;
            screenField[12].style.backgroundColor = "yellow";
            screenFields[12] = 3;
            screenField[13].style.backgroundColor = "yellow";
            screenFields[13] = 3;
            screenField[14].style.backgroundColor = "yellow";
            screenFields[14] = 3;
            screenField[16].style.backgroundColor = "yellow";
            screenFields[16] = 3;
            screenField[17].style.backgroundColor = "yellow";
            screenFields[17] = 3;
            screenField[18].style.backgroundColor = "yellow";
            screenFields[18] = 3;
            screenField[20].style.backgroundColor = "yellow";
            screenFields[20] = 3;
            screenField[24].style.backgroundColor = "yellow";
            screenFields[24] = 3;
            screenField[22].style.backgroundColor = "yellow";
            screenFields[22] = 3;
            screenField[1].style.backgroundColor = "white";
            screenFields[1] = 4;
            screenField[5].style.backgroundColor = "white";
            screenFields[5] = 4;
            screenField[3].style.backgroundColor = "white";
            screenFields[3] = 4;
            screenField[9].style.backgroundColor = "white";
            screenFields[9] = 4;
            screenField[15].style.backgroundColor = "white";
            screenFields[15] = 4;
            screenField[19].style.backgroundColor = "white";
            screenFields[19] = 4;
            screenField[21].style.backgroundColor = "white";
            screenFields[21] = 4;
            screenField[23].style.backgroundColor = "white";
            screenFields[23] = 4;
        },


        function () { //inLove
            screenField[1].style.backgroundColor = "red";
            screenFields[1] = 1;
            screenField[3].style.backgroundColor = "red";
            screenFields[3] = 1;
            screenField[0].style.backgroundColor = "red";
            screenFields[0] = 1;
            screenField[4].style.backgroundColor = "red";
            screenFields[4] = 1;
            screenField[5].style.backgroundColor = "red";
            screenFields[5] = 1;
            screenField[6].style.backgroundColor = "red";
            screenFields[6] = 1;
            screenField[8].style.backgroundColor = "red";
            screenFields[8] = 1;
            screenField[9].style.backgroundColor = "red";
            screenFields[9] = 1;
            screenField[15].style.backgroundColor = "black";
            screenFields[15] = 6;
            screenField[19].style.backgroundColor = "black";
            screenFields[19] = 6;
            screenField[21].style.backgroundColor = "black";
            screenFields[21] = 6;
            screenField[23].style.backgroundColor = "black";
            screenFields[23] = 6;
            screenField[22].style.backgroundColor = "black";
            screenFields[22] = 6;
            screenField[7].style.backgroundColor = "white";
            screenFields[7] = 4;
            screenField[2].style.backgroundColor = "white";
            screenFields[2] = 4;
            screenField[10].style.backgroundColor = "white";
            screenFields[10] = 4;
            screenField[11].style.backgroundColor = "white";
            screenFields[11] = 4;
            screenField[12].style.backgroundColor = "white";
            screenFields[12] = 4;
            screenField[13].style.backgroundColor = "white";
            screenFields[13] = 4;
            screenField[14].style.backgroundColor = "white";
            screenFields[14] = 4;
            screenField[16].style.backgroundColor = "white";
            screenFields[16] = 4;
            screenField[17].style.backgroundColor = "white";
            screenFields[17] = 4;
            screenField[18].style.backgroundColor = "white";
            screenFields[18] = 4;
            screenField[20].style.backgroundColor = "white";
            screenFields[20] = 4;
            screenField[24].style.backgroundColor = "white";
            screenFields[24] = 4;
        },

        function () { //dame
            for (let i = 0; i < 25; i = i + 2) {
                screenField[i].style.backgroundColor = "black";
                screenFields[i] = 6;
            }

            for (let i = 1; i < 25; i = i + 2) {
                screenField[i].style.backgroundColor = "white";
                screenFields[i] = 4;
            }
        },

        function () { //threeSquare
            screenField[0].style.backgroundColor = "yellow";
            screenFields[0] = 3;
            screenField[2].style.backgroundColor = "yellow";
            screenFields[2] = 3;
            screenField[1].style.backgroundColor = "yellow";
            screenFields[1] = 3;
            screenField[3].style.backgroundColor = "yellow";
            screenFields[3] = 3;
            screenField[4].style.backgroundColor = "yellow";
            screenFields[4] = 3;
            screenField[5].style.backgroundColor = "yellow";
            screenFields[5] = 3;
            screenField[9].style.backgroundColor = "yellow";
            screenFields[9] = 3;
            screenField[10].style.backgroundColor = "yellow";
            screenFields[10] = 3;
            screenField[14].style.backgroundColor = "yellow";
            screenFields[14] = 3;
            screenField[15].style.backgroundColor = "yellow";
            screenFields[15] = 3;
            screenField[19].style.backgroundColor = "yellow";
            screenFields[19] = 3;
            screenField[20].style.backgroundColor = "yellow";
            screenFields[20] = 3;
            screenField[21].style.backgroundColor = "yellow";
            screenFields[21] = 3;
            screenField[22].style.backgroundColor = "yellow";
            screenFields[22] = 3;
            screenField[23].style.backgroundColor = "yellow";
            screenFields[23] = 3;
            screenField[24].style.backgroundColor = "yellow";
            screenFields[24] = 3;
            screenField[6].style.backgroundColor = "green";
            screenFields[6] = 2;
            screenField[7].style.backgroundColor = "green";
            screenFields[7] = 2;
            screenField[8].style.backgroundColor = "green";
            screenFields[8] = 2;
            screenField[11].style.backgroundColor = "green";
            screenFields[11] = 2;
            screenField[13].style.backgroundColor = "green";
            screenFields[13] = 2;
            screenField[16].style.backgroundColor = "green";
            screenFields[16] = 2;
            screenField[17].style.backgroundColor = "green";
            screenFields[17] = 2;
            screenField[18].style.backgroundColor = "green";
            screenFields[18] = 2;
            screenField[12].style.backgroundColor = "red";
            screenFields[12] = 1;
        },

        function () { //redYellow
            for (let o = 0; o < 5; o++) {
                screenField[o].style.backgroundColor = "red";
                screenFields[o] = 1;
            }
            for (let o = 5; o < 10; o++) {
                screenField[o].style.backgroundColor = "yellow";
                screenFields[o] = 3;
            }
            for (let o = 10; o < 15; o++) {
                screenField[o].style.backgroundColor = "red";
                screenFields[o] = 1;
            }
            for (let o = 15; o < 20; o++) {
                screenField[o].style.backgroundColor = "yellow";
                screenFields[o] = 3;
            }
            for (let o = 20; o < 25; o++) {
                screenField[o].style.backgroundColor = "red";
                screenFields[o] = 1;
            }
        },

        function () { //colorful
            for (let o = 0; o < 5; o++) {
                screenField[o].style.backgroundColor = "green";
                screenFields[o] = 2;
            }
            for (let o = 5; o < 10; o++) {
                screenField[o].style.backgroundColor = "yellow";
                screenFields[o] = 3;
            }
            for (let o = 10; o < 15; o++) {
                screenField[o].style.backgroundColor = "red";
                screenFields[o] = 1;
            }
            for (let o = 15; o < 20; o++) {
                screenField[o].style.backgroundColor = "black";
                screenFields[o] = 6;
            }
            for (let o = 20; o < 25; o++) {
                screenField[o].style.backgroundColor = "white";
                screenFields[o] = 4;
            }
        },

        function () { //greenBlack
            for (let o = 0; o < 5; o++) {
                screenField[o].style.backgroundColor = "green";
                screenFields[o] = 2;
            }
            for (let o = 5; o < 10; o++) {
                screenField[o].style.backgroundColor = "black";
                screenFields[o] = 6;
            }
            for (let o = 10; o < 15; o++) {
                screenField[o].style.backgroundColor = "green";
                screenFields[o] = 2;
            }
            for (let o = 15; o < 20; o++) {
                screenField[o].style.backgroundColor = "black";
                screenFields[o] = 6;
            }
            for (let o = 20; o < 25; o++) {
                screenField[o].style.backgroundColor = "green";
                screenFields[o] = 2;
            }
        },

        function () { //yellowWhite
            for (let o = 0; o < 5; o++) {
                screenField[o].style.backgroundColor = "yellow";
                screenFields[o] = 3;
            }
            for (let o = 5; o < 10; o++) {
                screenField[o].style.backgroundColor = "white";
                screenFields[o] = 4;
            }
            for (let o = 10; o < 15; o++) {
                screenField[o].style.backgroundColor = "yellow";
                screenFields[o] = 3;
            }
            for (let o = 15; o < 20; o++) {
                screenField[o].style.backgroundColor = "white";
                screenFields[o] = 4;
            }
            for (let o = 20; o < 25; o++) {
                screenField[o].style.backgroundColor = "yellow";
                screenFields[o] = 3;
            }
        }
    ];

    function randomGrafic() {
        let randomZahl = Math.round(Math.random() * 11)
        grafics[randomZahl]();
    }
    randomGrafic();

    control.addEventListener("click", function () {
        if (screenFields[0] == drawFields[0] && screenFields[1] == drawFields[1] && screenFields[2] == drawFields[2] && screenFields[3] == drawFields[3] && screenFields[4] == drawFields[4] && screenFields[5] == drawFields[5] && screenFields[6] == drawFields[6] && screenFields[7] == drawFields[7] && screenFields[8] == drawFields[8] && screenFields[9] == drawFields[9] && screenFields[10] == drawFields[10] && screenFields[11] == drawFields[11] && screenFields[12] == drawFields[12] && screenFields[13] == drawFields[13] && screenFields[14] == drawFields[14] && screenFields[15] == drawFields[15] && screenFields[16] == drawFields[16] && screenFields[17] == drawFields[17] && screenFields[18] == drawFields[18] && screenFields[19] == drawFields[19] && screenFields[20] == drawFields[20] && screenFields[21] == drawFields[21] && screenFields[22] == drawFields[22] && screenFields[23] == drawFields[23] && screenFields[24] == drawFields[24]) {
            randomGrafic();
            grafics[0];
            points = points + 1;
            for (let index = 0; index < fields.length; index++) {
                fields[index].style.backgroundColor = "#c0c0c0";
                textPoints.innerHTML = points;
            }
        } else {
            alert("Noch nicht richtig!")
        }
    })

    function timeEnd() {
        alert(`Du hast ${points} Punkte erreicht!`);
        window.location.href = 'index.html';
    }
    setTimeout(timeEnd, 182000);


    let time = 180;
    let timeText = document.getElementsByClassName("zeit")[0];

    timeText.innerHTML = time + "s";

    function timer() {
        time = time - 1;
        timeText.innerHTML = time + "s";
        if (time == 0) {
            return // Abruch der Funktion
        }
    }
    setInterval(timer, 1000);

    let turnStartseite = document.getElementsByClassName("Startseite")[0];

    turnStartseite.addEventListener("click", function () {
        window.location.href = "index.html";
    })
};