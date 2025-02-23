// Original Shopping Cart Functions
let cart = [];

function addItem(item, quantity) {
  if (quantity < 1) {
    console.log("Error: Quantity must be at least 1");
    return;
  }
  cart.push({ item, quantity });
}

function removeItem(item) {
  // Note: This doesn't handle case sensitivity.
  cart = cart.filter(cartItem => cartItem.item !== item);
}

function getCartTotal() {
  return cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
}

// ----- Test Cases for Original Code -----

console.log("=== Original Code Test Cases ===");

// Clear the cart before testing
cart = [];

// Test 1: Add an item with valid quantity.
// Expected: Cart total should be 3.
addItem("Apple", 3);
console.log("Test 1 - Add Apple (3):", getCartTotal() === 3 ? "Pass" : "Fail");

// Test 2: Try to add an item with quantity 0.
// Expected: Should log an error and NOT add the item; total remains 3.
addItem("Banana", 0);
console.log("Test 2 - Add Banana (0):", getCartTotal() === 3 ? "Pass" : "Fail");

// Test 3: Remove an item using a different case.
// Expected: "apple" (lowercase) won't remove "Apple" (case-sensitive issue), so total remains 3.
removeItem("apple");
console.log("Test 3 - Remove 'apple' (case-sensitive issue):", getCartTotal() === 3 ? "Pass" : "Fail");

// Test 4: Adding duplicate items.
// Expected: Each call to addItem adds a new entry. With 2 calls adding "Orange",
// total should be 3 + 2 + 3 = 8 (3 from Apple still in cart and 2 + 3 for Oranges).
// Note: Duplicate items are not merged.
addItem("Orange", 2);
addItem("Orange", 3);
console.log("Test 4 - Add duplicate Oranges:", getCartTotal() === 8 ? "Pass" : "Fail");

// Test 5: Removing an item not in the cart.
// Expected: Removing "Pear" does nothing; total remains 8.
removeItem("Pear");
console.log("Test 5 - Remove non-existent item (Pear):", getCartTotal() === 8 ? "Pass" : "Fail");

// Test 6: Check the total for an empty cart.
// Expected: Total should be 0 after clearing the cart.
cart = [];
console.log("Test 6 - Empty cart:", getCartTotal() === 0 ? "Pass" : "Fail");
