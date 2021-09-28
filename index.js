// this file used to create and run different classes
const Cart = require('./Classes/Cart');
const Seller = require('./Classes/Seller');
const Client = require('./Classes/Client');

// sellers
const Oleg = new Seller({firstName: 'Oleg', lastName: 'lastName', email: 'oleg@gmail.com', password: '123456'}, Cart); // aggregation
const Eugene = new Seller({firstName: 'Eugene', lastName: 'lastName', email: 'eugene@gmail.com', password: '123456'}, Cart); // aggregation

// clients
const Max = new Client({firstName: 'Max', lastName: 'Stepanenkov', email: 'max@example.com', password: '123456'}, Cart); // aggregation
const Vanya = new Client({firstName: 'Vanya', lastName: 'Kulinich', email: 'vanya@gmail.com', password: '123456'}, Cart); // aggregation

// mocked data
const testProduct = {
    price: 15, description: 'Product description', title: 'Product title', specifications: {}
};

const testProduct2 = {
    price: 15, description: 'Product description', title: 'Product title 2', specifications: {}
};

Oleg.login();
Oleg.addProductToMarketplace(testProduct, 10);
Oleg.logout();

Eugene.login();
Eugene.addProductToMarketplace(testProduct2, 5);
Eugene.logout();

Max.login();
Max.addProductToCart('Product title', 1);
Max.addProductToCart('Product title 2', 1);
Max.makeOrder();
Max.logout();

Vanya.login();
Vanya.addProductToCart('Product title', 1);
Vanya.makeOrder();
Vanya.logout();
