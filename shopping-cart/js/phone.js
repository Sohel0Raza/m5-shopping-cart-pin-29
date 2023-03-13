
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updateNumber(true, 'phone-number-field')
    totalPrice(newPhoneNumber, 1219, 'phone-total')
    calculateSubtotal()
})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updateNumber(false, 'phone-number-field');
    totalPrice(newPhoneNumber, 1219, 'phone-total')
    calculateSubtotal()
})
