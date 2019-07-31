const TAX_RATE = .08; 
const PHONE_PRICE = 99.99; 
const ACCESSORY_PRICE = 9.99; 
const SPENDING_THRESHOLD = 200; 

let bankAccountBalance = 303.91; 

function purchasePhones(){
    let purchaseAmount = 0; 

    while(purchaseAmount + PHONE_PRICE < bankAccountBalance){
        purchaseAmount += PHONE_PRICE; 

        // Add an accessory if the the current amount is less than the spending threshold 
        if(purchaseAmount < SPENDING_THRESHOLD){
            purchaseAmount += ACCESSORY_PRICE; 
        }
    }

    let grandTotal = calculateTotalWithTax(purchaseAmount); 
    console.log(formatCurrency(grandTotal));
    
    
}

// Given a subtotal, return the total with tax 
function calculateTotalWithTax(subtotal){
    return subtotal + (subtotal * TAX_RATE); 
}

function formatCurrency(currency){
    return `$${currency.toFixed(2)}`;
}

purchasePhones(); 