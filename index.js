// this file used to create and run different classes
const Cart = require('./Classes/Cart');
const Seller = require('./Classes/Seller');
const ProductService = require('./Classes/ProductService');
const Client = require('./Classes/Client');

const Oleg = new Seller({firstName: 'Oleg', lastName: 'lastName', email: 'oleg@gmail.com', password: '123456'}, Cart, ProductService); // aggregation

const Max = new Client({firstName: 'Max', lastName: 'Stepanenkov', email: 'max@example.com', password: '123456'}, Cart); // aggregation
const Vanya = new Client({firstName: 'Vanya', lastName: 'Kulinich', email: 'vanya@gmail.com', password: '123456'}, Cart); // aggregation

const testProduct = {
    price: 15, description: 'Product description', title: 'Product title', specifications: {}
};

Oleg.addProductToMarketplace(testProduct);

Max.login();
Max.addProductToCart(testProduct, 1); // association
Vanya.login();
Vanya.addProductToCart(testProduct, 1); // association
Vanya.logout();
