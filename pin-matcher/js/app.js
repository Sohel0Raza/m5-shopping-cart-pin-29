function getPin(){
    const pin = generatePin();
    if(pin > 999 && pin < 10000){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin (){
    const random = Math.round(Math.random()*10000)
    return random;
}
document.getElementById('generate-pin-btn').addEventListener('click', function(){
    const pin = getPin()
    const pinField = document.getElementById('pin-field')
    pinField.value = pin;
})

document.getElementById('calculate').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typeNumbersField = document.getElementById('type-numbers')
    const previousTypedNumber =typeNumbersField.value;
    if(isNaN(number)){
        if(number == 'C'){
            typeNumbersField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumbersField.value = remainingDigits;
        }
    }
    else{
        const newTypeNumber = previousTypedNumber + number;
        typeNumbersField.value = newTypeNumber;
    }
    
})
document.getElementById('verify-pin-btn').addEventListener('click', function(){
   const pinField = document.getElementById('pin-field');
   const currentPin = pinField.value;

   const typeNumbersField = document.getElementById('type-numbers')
   const typeNumber =typeNumbersField.value;

   const pinSuccessMessage =document.getElementById('pin-success')
   const pinFailureMessage =document.getElementById('pin-failure')
   if(currentPin === typeNumber){
    pinSuccessMessage.style.display = 'block';
    pinFailureMessage.style.display = 'none';
   }
   else{
       pinFailureMessage.style.display = 'block';
       pinSuccessMessage.style.display = 'none';
   }

})