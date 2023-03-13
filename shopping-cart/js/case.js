document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateNumber(true,'case-number-Field')
    totalPrice(newCaseNumber, 59, 'case-total')
    calculateSubtotal()
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateNumber(false,'case-number-Field')
    totalPrice(newCaseNumber, 59, 'case-total')
    calculateSubtotal()
})