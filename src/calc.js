function calculateLoan() {
    const loanAmount = document.getElementById('loanAmount').value;
    const annualInterestRate = document.getElementById('annualInterestRate').value;
    const loanTerm = document.getElementById('loanTerm').value;

    if (isNaN(loanAmount) || loanAmount <= 0) {
        alert('Le montant du prêt doit être un nombre positif.');
    } else {
        if (loanAmount && annualInterestRate && loanTerm) {
            const monthlyInterestRate = (annualInterestRate / 100) / 12;
            const numberOfPayments = loanTerm * 12;
            const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    
            alert(`Le paiement mensuel est de : ${monthlyPayment.toFixed(2)} FCFA`);
        } else {
            alert('Veuillez remplir tous les champs.');
        }
        
    }
}
    

