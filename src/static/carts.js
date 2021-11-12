const blueTShirt = require('./products.js');

function getCarts() {
  const cartOneBlueTShirt = {};
  Object.assign(cartOneBlueTShirt, blueTShirt)
  cartOneBlueTShirt.quantity = 5;

  const cartTwoBlueTShirt = {};
  Object.assign(cartTwoBlueTShirt, blueTShirt)
  cartTwoBlueTShirt.quantity = 2;

  const cartOne = [
    {
      "type": "physical",
      "reference": "19-402-USA",
      "name": "Red T-Shirt",
      "quantity": 5,
      "quantity_unit": "pcs",
      "unit_price": 10000,
      "tax_rate": 1000,
      "total_discount_amount": 0,
    },
    cartOneBlueTShirt
  ];
  const cartTwo = [
    cartTwoBlueTShirt,
    {
      "type": "physical",
      "reference": "19-402-USA",
      "name": "Jeans",
      "quantity": 1,
      "quantity_unit": "pcs",
      "unit_price": 5000,
      "tax_rate": 2500,
      "total_discount_amount": 0,
    }
  ];
  
    return {
        "AAA-123" : cartOne,
        "BBB-123" : cartTwo
    }
}

module.exports = getCarts;