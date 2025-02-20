document.getElementById('userInput').addEventListener('input', function() {
    var inputText = this.value;
    var length = inputText.length;
    document.getElementById('output').textContent = 'Longueur: ' + length;
});
document.getElementById('userInput').addEventListener('input', function() {
    var input = document.getElementById('userInput').value;
    var length = input.length;
    var substring = input.substring(0, 3);
    document.getElementById('output').innerText = 'Longueur: ' + length;
    document.getElementById('substringOutput').innerText = 'Sous-chaîne: ' + substring;
});
document.getElementById('userInput').addEventListener('input', function() {
    var input = this.value;
    var length = input.length;
    var substring = input.substring(0, 3);
    
    document.getElementById('output').textContent = 'Longueur: ' + length;
    document.getElementById('substringOutput').textContent = 'Sous-chaîne: ' + substring;
});
