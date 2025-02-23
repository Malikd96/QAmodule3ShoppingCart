/// <reference types="cypress" />

// --- Original Shopping Cart Functions ---
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

// --- Cypress Test Cases ---
describe("Shopping Cart Original Code Test Cases", () => {
  
  // Clear the cart before each test
  beforeEach(() => {
    cart = [];
  });
  
  it("should add an item with valid quantity", () => {
    addItem("Apple", 3);
    expect(getCartTotal()).to.equal(3);
  });
  
  it("should not add an item if quantity is less than 1", () => {
    addItem("Banana", 0);
    expect(getCartTotal()).to.equal(0);
  });
  
  it("should fail to remove an item due to case sensitivity", () => {
    addItem("Apple", 3);
    removeItem("apple"); // Removing with different case
    expect(getCartTotal()).to.equal(3); // Fails to remove because of case sensitivity
  });
  
  it("should add duplicate items separately (not merge them)", () => {
    addItem("Orange", 2);
    addItem("Orange", 3);
    expect(getCartTotal()).to.equal(5); // 2 + 3, since they are added separately
  });
  
  it("should do nothing when removing an item not in the cart", () => {
    addItem("Orange", 5);
    removeItem("Pear"); // "Pear" is not in the cart
    expect(getCartTotal()).to.equal(5);
  });
  
  it("should return 0 for an empty cart", () => {
    expect(getCartTotal()).to.equal(0);
  });
});
