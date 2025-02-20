function submitNumber1() {
    const number = document.getElementById('numberInput').value;
    const result = Math.sqrt(number);
    document.getElementById('result').innerText = `La racine carrée de ${number} est ${result}`;
}
function submitNumber2() {
    var number = parseFloat(document.getElementById('numberInput').value);
    var roundedNumber = Math.round(number * 10) / 10;
    document.getElementById('result2').innerText = 'Nombre arrondi : ' + roundedNumber;
}
function Aleatoire() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('randomNumber').innerText = `Nombre aléatoire : ${randomNumber}`;
}
