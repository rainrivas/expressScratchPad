var faker = require('faker');
var min = Math.ceil(1),
    max = Math.floor(21),
    numProducts = Math.floor(Math.random() * (max - min) + min),
    products = new Array(numProducts);

for (i = 0; i < products.length; i++) {
    products[i] = { productName: faker.commerce.productName(), price: faker.commerce.price() };
};
console.log("======================\nWELCOME TO THUNDEROME!\n======================");
products.forEach(function(current) {
    console.log(current.productName + " - $" + current.price);
});
console.log("======================");