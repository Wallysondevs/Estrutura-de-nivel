const nomeDoHeroi = "Wallyson"
const xp = 5001
const nivel1 = "Ferro"
const nivel2 = "Bronze"
const nivel3 = "Prata"
const nivel4 = "Ouro"
const nivel5 = "Platina"
const nivel6 = "Ascendente"
const nivel7 = "Imortal"
const nivel8 = "Radiante"


if (xp < 1000) {
    console.log("O Herói de nome " + nomeDoHeroi + " " + "está no nível de " + nivel1);
}
else if(xp >= 1001 && xp <= 2000){
    console.log("O Herói de nome " + nomeDoHeroi + " " + "está no nível de " + nivel2);
}
else if(xp >= 2001 && xp <= 5000){
    console.log("O Herói de nome " + nomeDoHeroi + " " + "está no nível de " + nivel3);
}
else if(xp >= 5001 && xp <= 7000){
    console.log("O Herói de nome " + nomeDoHeroi + " " + "está no nível de " + nivel4);
}
else if(xp >= 7001 && xp <= 8000){
    console.log("O Herói de nome " + nomeDoHeroi + " " + "está no nível de " + nivel5);
}
else if(xp >= 8001 && xp <= 9000){
    console.log("O Herói de nome " + nomeDoHeroi + " " + "está no nível de " + nivel6);
}
else if(xp >= 9001 && xp <= 10000){
    console.log("O Herói de nome " + nomeDoHeroi + " " + "está no nível de " + nivel7);
}
else if(xp >= 10001){
    console.log("O Herói de nome " + nomeDoHeroi + " " + "está no nível de " + nivel8);
}