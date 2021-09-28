const User = require('./User');

// inheritance
class Client extends User {
    constructor(userInfo, Cart) {
        super(userInfo);
        this.cart = new Cart();
        // aggregation
    }

    makeOrder() {
        this.marketPlace.makeOrder(this.cart.productsList);
    }

    addProductToCart = (productTitle, quantity = 1) => {
        const product = this.marketPlace.getProductByTitle(productTitle)
        this.cart.addProduct(product, quantity);
    }

    clearCart = () => {
        this.cart.clearProductsList();
    }
};

module.exports = Client;