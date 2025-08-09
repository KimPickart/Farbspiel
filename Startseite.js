window.onload = function(){
    let Anleitung = document.getElementsByClassName("Anleitung")[0];
    let AnnleitungAn = false
    let buttonGameOn = document.getElementsByClassName("SpielStarten")[0];
    let circle = document.getElementsByClassName("anzeigeFeld");
    let body = document.getElementsByTagName("body")[0];

    Anleitung.addEventListener("click", function (){
        if (AnnleitungAn === false){

        AnnleitungAn = true;
        Anleitung.style.minHeight = " 0vh";

        let p2 = document.createElement('p');
        p2.innerHTML = "Wenn du auf den Button (Spiel starten) drückst, startest du das Spiel und wirst große und kleine Quadrate sehen, die zwei 5 × 5-Quadrate bilden. (große: oben rechts, kleine: unten links)";
        p2.className = "text";


        let p3 = document.createElement('p');
        p3.innerHTML = "Die kleinen Quadrate in dem 5 * 5-Quadrat haben alle eine Farbe, die zusammen ein Bild abgeben. Das große 5 * 5-Quadrat hat alle grauen Quadrate, die der Spieler mit Farbe füllen soll, um das Bild unten links nochmal darzustellen. Dafür musst du auf das gewünschte Feld klicken und unten auf den jeweiligen Button, der die Farbe zeigt, in welcher du das Quadrat ändern willst.";
        p3.className = "text";


        let p4 = document.createElement('p');
        p4.innerHTML = "Wenn du fertig bist, drückst du auf den Button 'Kontrolle', der unterhalb des großen 5 * 5-Quadrats ist. Wenn du alles richtig gemacht hast, wird der Punktestand um 1 erhöht und es wird ein neues Bild angezeigt. Es könnte sein, dass du das gleiche Bild nochmal bekommst.";
        p4.className = "text";


        let p1 = document.createElement('p');
        p1.innerHTML = "Du hast 3 Minuten Zeit, um so viele Bilder wie möglich nachzumachen. Wenn die Zeit abgelaufen ist, wird dir deine Endpunktzahl angezeigt.";
        p1.className = "text";


        let buttonOK = document.createElement('button');
        buttonOK.innerHTML = "Alles klar!";
        buttonOK.className = "buttonOK";


        Anleitung.appendChild(p2);
        Anleitung.appendChild(p3);
        Anleitung.appendChild(p4);
        Anleitung.appendChild(p1);
        Anleitung.appendChild(buttonOK);

        buttonOK.addEventListener("click", function (event){
            event.stopPropagation(); // verhindert erneuten trigger des Eltern-div
            Anleitung.removeChild(p1);
            Anleitung.removeChild(p3);
            Anleitung.removeChild(p2);
            Anleitung.removeChild(p4);
            Anleitung.removeChild(buttonOK);
            AnnleitungAn = false;
    })
    }});

let start = true;

    buttonGameOn.addEventListener("click", function (){
        
        if (start === true) {
            let circleNumber = 0;
            let p5 = document.createElement('p');
            p5.innerHTML = "Loading...";
            p5.className = "Loading";

            function load (){
                body.appendChild(p5);
                circle[circleNumber].style.backgroundColor = "black";
                circleNumber = circleNumber + 1;
                start = false
                if (circleNumber === 9) {
                    window.location.href = "Spiel.html";
                }
            }
            setInterval(load, 100);
        }
        
        })

}
