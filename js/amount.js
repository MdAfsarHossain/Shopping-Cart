// Phone Amount Calculations
function updateQuantity(inputField, isIncrease) {
    const quantity = document.getElementById(inputField);

    let currentQuantity = parseInt(quantity.value);
    
    if(isIncrease) {
        currentQuantity = currentQuantity + 1;  
    } else {
        currentQuantity = currentQuantity - 1;
    }
    
    if(currentQuantity < 0) {
        return ;
    }

    quantity.value = currentQuantity;
}


// Update Price
function updatePrice(inputField, textField, price) {
    const priceString = document.getElementById(textField);
    const quantityString = document.getElementById(inputField).value;
    let quantity = parseInt(quantityString);
    quantity = quantity * price;

    priceString.innerText = quantity;
}


// Update Total Price 
function updateTotalPrice() {
    const phonePriceString = document.getElementById('phone-price').innerText;
    const casePriceString = document.getElementById('case-price').innerText;

    const phonePrice = parseInt(phonePriceString);
    console.log(phonePrice);
    
    const casePrice = parseInt(casePriceString);
    
    let total = phonePrice + casePrice;
    let tax = total * 0.1;
    const finalPrice = total + tax;

    tax = tax.toFixed(2);

    document.getElementById('sub-total').innerText = total;
    document.getElementById('tax').innerText = tax;
    document.getElementById('final-price').innerText = finalPrice;
}


// Phone Amount Calculations
document.getElementById('phone-plus-btn').addEventListener('click', function () {
    updateQuantity('phone-input-field', true);
    updatePrice('phone-input-field', 'phone-price', 1219);
    updateTotalPrice();
})

document.getElementById('phone-minus-btn').addEventListener('click', function () {
    updateQuantity('phone-input-field', false);
    updatePrice('phone-input-field', 'phone-price', 1219);
    updateTotalPrice();
})


// Case Amount Calculations
document.getElementById('case-plus-btn').addEventListener('click', function () {
    updateQuantity('case-input-field', true);
    updatePrice('case-input-field', 'case-price', 59);
    updateTotalPrice();
})

document.getElementById('case-minus-btn').addEventListener('click', function () {
    updateQuantity('case-input-field', false);
    updatePrice('case-input-field', 'case-price', 59);
    updateTotalPrice();
})










