       

function countItems(cart) {
     let count=0;
    // Step 1: Check if 'cart' is an array. If not, return "Invalid cart"
    if (Array.isArray(cart)) {

        console.log(`Cart length is ${cart.length}`);
        for(const item of cart){
            count++;

        }
         return count;
    }

    else {
        return "Invalid cart";  
    }
   

    // Step 2: Loop through 'cart' and console.log each item

    // Step 3: Return the total number of items
}

// Test cases:
console.log(countItems(["milk", "bread", "eggs"]));
// Should print each item, then return: 3

console.log(countItems({ item: "milk" }));
// Should return: "Invalid cart"
