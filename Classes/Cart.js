class Cart {
    constructor() {
        this.productsList = [];
    }

    addProduct(product, quantity) {
        this.productsList.push({ product, quantity });
    }

    increaseProductQuantity(productId) {
        const index = this.productsList.findIndex(product => product.id === productId);
        this.productsList[index].quantity++;
    }

    decreaseProductQuantity(productId) {
        const index = this.productsList.findIndex(product => product.id === productId);
        this.productsList[index].quantity--;
    }

    clearProductsList = () => {
        this.productsList = [];
    }
}

module.exports = Cart;