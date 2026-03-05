// Je fais personnellement toute la logique du site en JavaScript comme entrainement

const listMots = ["Bonjour", "Salut", "Saucisse"];
const listPhrases = ["Salut, ça va ?", "Je suis désolé.", "Comment vas-tu ?"]

runGame();

// Déclaration des fonctions

function runGame() {
    let index = 0;
    let score = 0;

    let listUsed = listMots;
    afficherProposition(listUsed[index]);

    let zoneSaisie = document.getElementById("inputEcriture");
    let boutonValiderMot = document.getElementById("btnValiderMot");

    boutonValiderMot.addEventListener("click", () => {
        if (zoneSaisie.value === listUsed[index]) {
            score++;
            afficherResultat(score);
        }
        index++;
        afficherProposition(listUsed[index]);
        zoneSaisie.value = "";

        if (index >= listUsed.length) {
            afficherResultat(score, listUsed.length);
            afficherProposition("");
            boutonValiderMot.disabled = true;
        }
    });
    
    let radiosGameMode = document.querySelectorAll(".optionSource input");
    for (let i = 0; i < radiosGameMode.length; i++) {
        radiosGameMode[i].addEventListener("change", (event) => {
            switch (event.target.value) {
                case "1":
                    listUsed = listMots;
                    break;
                case "2":
                    listUsed = listPhrases;
                    break;
            }
            index = 0;
            score = 0;
            afficherProposition(listUsed[index]);
            afficherResultat(score, listUsed.length);
        })
    }
}

function afficherProposition(text) {
    let zoneProposition = document.querySelector(".zoneProposition");
    zoneProposition.innerText = text;
}

function afficherResultat(score, total) {
    let zoneScore = document.querySelector(".zoneScore");

    if (total !== undefined) {
        zoneScore.innerText = `Votre score : ${score}/${total}`;
    } else {
        zoneScore.innerText = `Votre score : ${score}`;
    }
}