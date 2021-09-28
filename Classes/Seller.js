const Client = require('./Client');

// inheritance
class Seller extends Client {
    addProductToMarketplace = (product, quantity = 1) => {
        this.marketPlace.addProductToMarketplace(product, this.id, quantity);
    };

    removeProductFromMarketplace = (productId) => {
        this.marketPlace.removeProductFromMarketplace(productId, this.id);
    };
}

module.exports = Seller;