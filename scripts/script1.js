// L'objectif est de créer d'abord dans la console une logique de jeu dans laquelle on propose un mot, et on demande à l'utilisateur
// de rentrer le mot, on augmente le score si il est le bon et on affiche une erreur sinon

console.log("Bienvenue sur Azertype, recopiez chacun des mots, à vos claviers !");

let listWord = ["Bonjour", "Hublot", "Fessier"];
let wordGiven;

for (mot in listWord){
    while (wordGiven != listWord[mot]){
        console.log("Mot à taper :", listWord[mot]);
        wordGiven = prompt(`Tapez le mot : ${listWord[mot]}`, "");

        if (wordGiven == listWord[mot]) {
            console.log("Oui !");
        } else {
            console.log("Non");
        }
    }
}

alert("VOUS AVEZ GAGNÉ !");