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









