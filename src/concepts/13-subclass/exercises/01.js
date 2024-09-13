/**
 * Add a base class called Product
 * Add 2 properties of products and conversionLookup in the constructor of Product
 * Add the following method in the Product class:
 *  - getProductById: which will return the product for a given id
 * Add a sub-class called Basket
 * The constructor should accept 2 params:
 *  - currency with a default value of "USD"
 *  - locale with a default value of "en-US"
 * Add the following properties in the Basket constructor:
 *  - items: []
 *  - grandTotal: 0
 *  - currency: the one passed in or default
 *  - locale: the one passed in or default
 *  - intl: this is the formatjs intl object created using the "@formatjs/intl" library
 * Example of how to create an instance of the intl object
 * createIntl(
      {
        locale: "en-US",
        messages: {},
      },
      createIntlCache()
    );
 * Add the following methods in the Basket class:
    - addItem: which accepts an item id and adds the item to the basket if it is not present with quantity of 1, else if one already exists then increment the quantity by 1
    - removeItem: which accepts an item id and removes the item from the basket if the quantity is 1 else decrement the quantity by 1
    - displayBasket: display the contents of the items in your basket using console.table and present the following fields - label | price | quantity
    - displayTotal: display the total price with the correct currency formatting as follows - "Total Price: $34.99". Use the formatNumber method on the intl object to format your number as a currency style
 * If the Basket instance is not for the default currency of USD then you will have to use the conversionLookup in the parent class of Product to convert the base price (price of the item in USD) to a display price (price of the item in your given currency) in the displayTotal method
 */

const conversionLookup = {
  EUR: 0.92,
  GBP: 0.79,
};

const products = [
  {
    id: "2d9fe95a-11b9-4d9f-8d59-9ab285feec59",
    label: "Wireless Mouse",
    price: 34.99,
    currency: "USD",
  },
  {
    id: "e8ed6104-c7c3-4e23-ae57-5f553dd74778",
    label: "Wireless Keyboard",
    price: 14.99,
    currency: "USD",
  },
  {
    id: "37e89c30-15e5-4e17-938a-9a984830338a",
    label: "Wireless Earphones",
    price: 39.99,
    currency: "USD",
  },
  {
    id: "ef789a53-5c75-4d5d-8600-d34f5062c397",
    label: "Wireless Headphones",
    price: 24.99,
    currency: "USD",
  },
  {
    id: "fd73190a-b65c-4622-a674-c50fb198ea12",
    label: "Wireless Mobile Charger",
    price: 84.99,
    currency: "USD",
  },
];
