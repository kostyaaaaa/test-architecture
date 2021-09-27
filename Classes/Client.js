const User = require('./User');

// inheritance
class Client extends User {
    constructor(userInfo, Cart) {
        super(userInfo);
        this.cart = new Cart();
        // aggregation
    }

    addProductToCart = (product, quantity = 1) => {
        this.cart.addProduct(product, quantity);
    }

    clearCart = () => {
        this.cart.clearProductsList();
    }
};

module.exports = Client;