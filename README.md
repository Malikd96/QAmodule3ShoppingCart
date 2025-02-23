# Shopping Cart Testing Project

This project demonstrates a simple shopping cart implementation in JavaScript along with a suite of Cypress tests. The original code exhibits some known issues that are documented through the test cases.

## Project Overview

The shopping cart code includes three main functions:
- **`addItem(item, quantity)`**: Adds an item to the cart if the quantity is 1 or greater.
- **`removeItem(item)`**: Removes an item from the cart. (Note: This function is case-sensitive and may not remove items if the case doesn't match.)
- **`getCartTotal()`**: Returns the total quantity of items currently in the cart.

### Known Issues
- **Case Sensitivity**: The `removeItem` function does not handle different cases. For example, trying to remove `"apple"` will not remove `"Apple"`.
- **Duplicate Handling**: Adding the same item multiple times creates duplicate entries instead of merging them.
- **Edge Cases**: The original code does not fully handle situations like removing an item that doesn’t exist.
