let tall1 = parseInt(localStorage.getItem("tall1Saved")) || 0;
let tall2 = parseInt(localStorage.getItem("tall2Saved")) || 0;
let tall3 = parseInt(localStorage.getItem("tall3saved")) || 0;
let tall4 = parseInt(localStorage.getItem("tall4saved")) || 0;

/*"let" er et variable*/
/* "||"" står for "eller"*/
/*"parseInt" brukes til å gjøre en string til et tall*/
/*"getItem" henter verdier som er lagret*/

showvotes(); /*viser antall stemmer*/


/*eksempel på bruk av "if" og "else"*/

/*if (parseInt(localStorage.getItem("tall1Saved"))) {
    tall1 = localStorage.getItem("tall1Saved")
}
else {
    console.log("tall 1 er ikke et tall"); 
    tall1 = 0
}*/ 


function votebutton1() { /*"function" tar imot kode som utfører en spesifikk oppgave*/
    tall1++; /*++ øker verdien til en variabel*/
    savevotes();
    updateChart();
}

function votebutton2() {
    tall2++;
    savevotes();
    updateChart();
}

function votebutton3() {
    tall3++;
    savevotes();
    updateChart();
}

function votebutton4() {
    tall4++;
    savevotes();
    updateChart();
}

function savevotes() { /*lagrer resulatene*/
    localStorage.setItem("tall1Saved", tall1);
    localStorage.setItem("tall2Saved", tall2);
    localStorage.setItem("tall3Saved", tall3);
    localStorage.setItem("tall4Saved", tall4);
    showvotes();
}

function showvotes() {
    document.getElementById("clicks").innerHTML = tall1;
    document.getElementById("clicks2").innerHTML = tall2;
    document.getElementById("clicks3").innerHTML = tall3;
    document.getElementById("clicks4").innerHTML = tall4;
}

function resetVotes() { /*"resetvotes" nullstiller resultatene fra localstorage og oppdaterer visnigen av showvotes*/
    tall1 = 0;
    tall2 = 0;
    tall3 = 0;
    tall4 = 0;
    localStorage.removeItem("tall1Saved");/*"removeitem" fjerner data fra localstorage*/
    localStorage.removeItem("tall2Saved");
    localStorage.removeItem("tall3Saved");
    localStorage.removeItem("tall4Saved");
    showvotes();
    updateChart(); /*Diagrammet oppdateres med de nye tellingene etter å ha tilbakestilt dem.*/
}

/*localStorage.clear() for å tømme localstorage hvis det er noe feil.*/
/*console.log brukes under feilsøking og testing av koden.*/

const ctx = document.getElementById('diagram');

let chart1 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Arbeiderpartiet', 'Høyre', "Senterpartiet", "Cats Lover"],
        datasets: [{
            data: [tall1, tall2, tall3,tall4],
            backgroundColor: ["red", "blue", "green", "#ff5bc2"],
            borderWidth: 1
            
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function updateChart() {
    chart1.data.datasets[0].data = [Math.round(tall1), Math.round(tall2), Math.round(tall3), Math.round(tall4)]; /* oppdaterer datasettet og avrunder verdier av tall1 og tall2 ved hjelp av "math.round"*/
    chart1.options.scales.y.ticks.stepSize = 1; /*sikrer heltall i stedet for å få desimaler i diagrammet*/
    chart1.update(); /*Dette oppdaterer det eksisterende diagrammet datasett uten å ødelegge og gjenskape diagrammet igjen.*/
}


