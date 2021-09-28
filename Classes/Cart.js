class Cart {
    constructor() {
        this.productsList = [];
    }

    addProduct(product, quantity) {
        console.log('[Cart] addProduct called')
        this.productsList.push({ product, quantity });
    }

    increaseProductQuantity(productId) {
        console.log('[Cart] increaseProductQuantity called')
        const index = this.productsList.findIndex(product => product.id === productId);
        this.productsList[index].quantity++;
    }

    decreaseProductQuantity(productId) {
        console.log('[Cart] decreaseProductQuantity called')
        const index = this.productsList.findIndex(product => product.id === productId);
        this.productsList[index].quantity--;
    }

    clearProductsList = () => {
        console.log('[Cart] clearProductsList called')
        this.productsList = [];
    }
}

module.exports = Cart;