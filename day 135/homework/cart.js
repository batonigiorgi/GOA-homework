class Cart {
    static addItem(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    static getCart() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

    static getTotal() {
        return Cart.getCart().reduce((total, item) => total + item.price, 0);
    }
}