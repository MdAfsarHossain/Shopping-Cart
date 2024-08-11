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










