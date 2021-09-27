const Product = require('./Product');

class ProductService {
    constructor() {
        this.productsList = [];
    };

    createNewProduct({ price, description, title, specifications }) {
        const product = new Product({ price, description, title, specifications }); // composition
        this.productsList.push(product);
    }

    removeProduct(productId) {
        const index = this.productsList.findIndex(product => product.id === productId);
        this.productsList.splice(index, 1);
    }
}

module.exports = ProductService;