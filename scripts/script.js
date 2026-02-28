// Le fichier script.js est dédié à la déclaration des fonctions.

function runGame() {
    alert("Bienvenue sur Azertype, recopiez avec vos claviers !");

    let listUsed = chooseList();

    score = runLoopGame(listUsed);

    showResult(score, listUsed);
}

function chooseList() {
    gameModeChoice = prompt("Choisissez entre mots(m)/phrases(p) :", "m");

    switch (gameModeChoice) {
        case "m":
        default :
            return listWord;
        case "p":
            return listePhrases;
    }
}

function runLoopGame(list) {
    let wordGiven;
    let score = 0;

    for (mot in list){
        console.log("Mot à taper :", list[mot]);
        wordGiven = prompt(`Tapez le mot : ${list[mot]}`, "");

        if (wordGiven == list[mot]) {
            console.log("Oui !");
            score++;
        } else {
            console.log("Non");
        }
    }
    return score;
}

function showResult(score, list) {
    console.log(`Votre score est de ${score}/${list.length}`);
    (score == list.length) ?
        alert("VOUS AVEZ GAGNÉ !") :
        alert("VOUS N'AVEZ PAS BIEN TAPÉ TOUT LES MOTS...");
}