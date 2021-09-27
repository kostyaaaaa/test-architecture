const Client = require('./Client');

// inheritance
class Seller extends Client {
    constructor(userInfo, Cart, ProductService) {
        super(userInfo, Cart);
        this.productService = new ProductService();
        // aggregation
    }

    addProductToMarketplace = (product) => {
        this.productService.createNewProduct(product);
    };

    removeProductFromMarketplace = (productId) => {
        this.productService.removeProduct(productId);
    };
}

module.exports = Seller;