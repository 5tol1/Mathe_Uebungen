const ergebnis = document.getElementById('eingabe');
const ergebnisbtn = document.getElementById('ergebnisbtn');

let addieren20 = {
    "10+1": 11,
    "10+2": 12,
    "10+3": 13,
    "10+4": 14,
    "10+5": 15,
    "10+6": 16,
    "10+7": 17,
    "10+8": 18,
    "10+9": 19,
    "10+10": 20,
    "9+2": 11,
    "9+3": 12,
    "9+4": 13,
    "9+5": 14,
    "9+6": 15,
    "9+7": 16,
    "9+8": 17,
    "9+9": 18,
    "9+10": 19,
    "9+11": 20,
    "8+3": 11,
    "8+4": 12,
    "8+5": 13,
    "8+6": 14,
    "8+7": 15,
    "8+8": 16,
    "8+9": 17,
    "8+10": 18,
    "8+11": 19,
    "8+12": 20,
    "7+4": 11,
    "7+5": 12,
    "7+6": 13,
    "7+7": 14,
    "7+8": 15,
    "7+9": 16,
    "7+10": 17,
    "7+11": 18,
    "7+12": 19,
    "7+13": 20,
    "6+5": 11,
    "6+6": 12,
    "6+7": 13,
    "6+8": 14,
    "6+9": 15,
    "6+10": 16,
    "6+11": 17,
    "6+12": 18,
    "6+13": 19,
    "6+14": 20,
    "5+6": 11,
    "5+7": 12,
    "5+8": 13,
    "5+9": 14,
    "5+10": 15,
    "5+11": 16,
    "5+12": 17,
    "5+13": 18,
    "5+14": 19,
    "5+15": 20,
    "4+7": 11,
    "4+8": 12,
    "4+9": 13,
    "4+10": 14,
    "4+11": 15,
    "4+12": 16,
    "4+13": 17,
    "4+14": 18,
    "4+15": 19,
    "4+16": 20,
    "3+8": 11,
    "3+9": 12,
    "3+10": 13,
    "3+11": 14,
    "3+12": 15,
    "3+13": 16,
    "3+14": 17,
    "3+15": 18,
    "3+16": 19,
    "3+17": 20,
    "2+9": 11,
    "2+10": 12,
    "2+11": 13,
    "2+12": 14,
    "2+13": 15,
    "2+14": 16,
    "2+15": 17,
    "2+16": 18,
    "2+17": 19,
    "2+18": 20,
    "1+10": 11,
    "1+11": 12,
    "1+12": 13,
    "1+13": 14,
    "1+14": 15,
    "1+15": 16,
    "1+16": 17,
    "1+17": 18,
    "1+18": 19,
    "1+19": 20,
    "": 0,
    "1+10": 11,
    "2+10": 12,
    "3+10": 13,
    "4+10": 14,
    "5+10": 15,
    "6+10": 16,
    "7+10": 17,
    "8+10": 18,
    "9+10": 19,
    "1+10": 20,
    "2+9": 11,
    "3+9": 12,
    "4+9": 13,
    "5+9": 14,
    "6+9": 15,
    "7+9": 16,
    "8+9": 17,
    "9+9": 18,
    "10+9": 19,
    "11+9": 20,
    "3+8": 11,
    "4+8": 12,
    "5+8": 13,
    "6+8": 14,
    "7+8": 15,
    "8+8": 16,
    "9+8": 17,
    "10+8": 18,
    "11+8": 19,
    "12+8": 20,
    "4+7": 11,
    "5+7": 12,
    "6+7": 13,
    "7+7": 14,
    "8+7": 15,
    "9+7": 16,
    "10+7": 17,
    "11+7": 18,
    "12+7": 19,
    "13+7": 20,
    "5+6": 11,
    "6+6": 12,
    "7+6": 13,
    "8+6": 14,
    "9+6": 15,
    "10+6": 16,
    "11+6": 17,
    "12+6": 18,
    "13+6": 19,
    "14+6": 20,
    "6+5": 11,
    "7+5": 12,
    "8+5": 13,
    "9+5": 14,
    "10+5": 15,
    "11+5": 16,
    "12+5": 17,
    "13+5": 18,
    "14+5": 19,
    "15+5": 20,
    "7+4": 11,
    "8+4": 12,
    "9+4": 13,
    "10+4": 14,
    "11+4": 15,
    "12+4": 16,
    "13+4": 17,
    "14+4": 18,
    "15+4": 19,
    "16+4": 20,
    "8+3": 11,
    "9+3": 12,
    "10+3": 13,
    "11+3": 14,
    "12+3": 15,
    "13+3": 16,
    "14+3": 17,
    "15+3": 18,
    "16+3": 19,
    "17+3": 20,
    "9+2": 11,
    "10+2": 12,
    "11+2": 13,
    "12+2": 14,
    "13+2": 15,
    "14+2": 16,
    "15+2": 17,
    "16+2": 18,
    "17+2": 19,
    "18+2": 20,
    "10+1": 11,
    "11+1": 12,
    "12+1": 13,
    "13+1": 14,
    "14+1": 15,
    "15+1": 16,
    "16+1": 17,
    "17+1": 18,
    "18+1": 19,
    "19+1": 20,
};

const gesamt20 = document.getElementById('gesamtaufgaben20');
const richtige20 = document.getElementById('richtige20');
const falsche20 = document.getElementById('falsche20');
const abfrage = document.querySelector('.abfrage');
let countg20 = 1;
let countr20 = 1;
let countf20 = 1;


function nextTask20() {
    let obj_keys = Object.keys(addieren20);
    randomTask = obj_keys[Math.floor(Math.random() * obj_keys.length)];
    aufgabe.innerHTML = `${randomTask} = ?`;
    eingabe.value = '';
}


function compare20() {

    if (eval(ergebnis.value) == eval(randomTask)) {
        eingabe.value = '';
        gesamt20.innerHTML = countg20++;
        richtige20.innerHTML = countr20++;
        abfrage.style.color = 'green';
        text.innerHTML = 'Richtig!';
    } else {
        eingabe.value = '';
        gesamt20.innerHTML = countg20++;
        falsche20.innerHTML = countf20++;
        abfrage.style.color = 'red';
        text.innerHTML = 'Falsch!';
    }
    nextTask20();


}

const resetbtn = document.getElementById('reset');

function resetValue() {
    gesamt20.innerHTML = 0;
    richtige20.innerHTML = 0;
    falsche20.innerHTML = 0;
    countg20 = 1;
    countr20 = 1;
    countf20 = 1;
    text.innerHTML = '';
}
resetbtn.addEventListener('click', resetValue);