document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const dateInput = document.getElementById('date').value;
    const [day, month, year] = dateInput.split('-');
    const date = new Date(`${year}-${month}-${day}`);
    
    document.getElementById('day').textContent = `Day: ${date.getDate()}`;
    document.getElementById('month').textContent = `Month: ${date.getMonth() + 1}`;
    document.getElementById('year').textContent = `Year: ${date.getFullYear()}`;
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputDate = document.getElementById('date').value;
    const [day, month, year] = inputDate.split('-').map(Number);
    const enteredDate = new Date(year, month - 1, day);
    const currentDate = new Date();
    
    const timeDifference = currentDate - enteredDate;
    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
    document.getElementById('difference').textContent = `Days difference: ${dayDifference}`;
});
