function updateNumber(isIncrease, elementId){
    const numberField = document.getElementById(elementId);
    const numberString = numberField.value;
    const number = parseInt(numberString);

    let newNumber;
    if(isIncrease === true){
        newNumber = number + 1;
    }
    else{
        newNumber = number - 1;
    }
    numberField.value = newNumber;

    return newNumber;
}

function totalPrice (newNumber ,price, elementId){
    const totalPrice = newNumber * price;
    const totalElement = document.getElementById(elementId)
    totalElement.innerText = totalPrice;
}
function getTextElementValue (elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseInt(elementValueString)
    return elementValue;
}
function setElementValueById (elementId, value){
    const elementIdValue = document.getElementById(elementId);
    elementIdValue.innerText = value;
}
//calculate sub total 
function calculateSubtotal(){
const phoneTotal = getTextElementValue('phone-total');
const caseTotal = getTextElementValue('case-total');

const currentSubTotal = phoneTotal + caseTotal;
setElementValueById('sub-total', currentSubTotal)

// calculate tax amount 
const taxAmountString =(currentSubTotal * 0.1).toFixed(2);
const taxAmount = parseFloat(taxAmountString)
setElementValueById('tax-amount', taxAmount) 

// calculate final total
const finalTotal = currentSubTotal + taxAmount;
setElementValueById('final-total', finalTotal)
}