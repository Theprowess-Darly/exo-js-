// ajouter un nombre a la fin du tableau
function addNumber() {
   
    var table = document.querySelector("table");
    var newNumber = document.getElementById("newNumber").value;
    if (newNumber) {
        var newRow = table.insertRow();
        var newCell = newRow.insertCell(0);
        newCell.textContent = newNumber;
        document.getElementById("newNumber").value = "";
    }
    
}
   
// suprimer un nombre au choix
function deleteNumber() {
    const deleteNumber = document.getElementById('deleteNumber').value;
    if (deleteNumber === '') {
        alert('Veuillez entrer un nombre à supprimer SVP.');
        return;
    }
    
    var table = document.querySelector("table");
    for (var i = 1, row; row = table.rows[i]; i++) {
        if (row.cells[0].textContent == deleteNumber) {
            table.deleteRow(i);
            break;
        }
    }
}

// trier les nombres par ordre croissant
function sortNumbers() {
    const rows = Array.from(document.querySelectorAll('table tr')).slice(1);
    const numbers = rows.map(row => parseInt(row.cells[0].textContent));
    numbers.sort((a, b) => a - b);

    const table = document.querySelector('table');
    rows.forEach(row => row.remove());

    numbers.forEach(number => {
        const row = table.insertRow();
        const cell = row.insertCell(0);
        cell.textContent = number;
    });
}