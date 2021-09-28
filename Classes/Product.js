class Product {
    constructor({ price, description, title, specifications }) {
        this.price = price;
        this.title = title;
        this.description = description;
        this.specifications = specifications;
        this.id = Math.random().toString(); // unique value
        console.log('[Product] creating new product');
    }
}

module.exports = Product;