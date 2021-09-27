class Product {
    constructor({ price, description, title, specifications }) {
        this.price = price;
        this.title = title;
        this.description = description;
        this.specifications = specifications;
        this.id = Math.random(); // unique value
    }
}

module.exports = Product;