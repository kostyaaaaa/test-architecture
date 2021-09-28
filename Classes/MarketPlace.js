const Product = require('./Product');

class MarketPlace {
    constructor() {
        this.products = [];
    }

    addProductToMarketplace(productData, ownerId, quantity) {
        console.log('[MarketPlace] addProductToMarketplace called');
        const { price, description, title, specifications } = productData;
        const product = new Product({ price, description, title, specifications }); // composition
        this.products.push({ ...product, ownerId, quantity });
    }

    removeProductFromMarketplace(productId, ownerId) {
        // TODO: check if ownerId is owner of product
        console.log('[MarketPlace] removeProductFromMarketplace called');
        const index = this.productsList.findIndex(product => product.id === productId);
        this.products.splice(index, 1);
    }

    makeOrder(productsList) {
        // TODO: check if products exists in sufficient quantity
        console.log('[MarketPlace] makeOrder called');
        productsList.forEach(product => {
            console.log(`[MarketPlace] makeOrder for ${product.quantity} quantity of ${product.product.title}`);
        })
    }

    getProductByTitle(productTitle) {
        // TODO: check if product exists
        console.log('[MarketPlace] getProductByTitle called');
        return this.products.find(product => product.title === productTitle)
    }

    getOwnProducts(ownerId) {
        console.log('[MarketPlace] getOwnProducts called');
        return this.products.filter(product => product.ownerId === ownerId)
    }
}

module.exports = new MarketPlace(); // singleton