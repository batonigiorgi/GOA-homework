let cart = [];  

function addToCart(id) {
    const product = getProductById(id);  
    if (product) {
        cart.push(product);  
        showCart();          
    }
}

function removeFromCart(id) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart.splice(i, 1);  
            showCart();         
            return;
        }
    }
}

function showCart() {
    const cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = "";  
    for (let i = 0; i < cart.length; i++) {
        const item = document.createElement("div");
        item.textContent = `${cart[i].name} - $${cart[i].price}`;  
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";  
        removeButton.onclick = function () {
            removeFromCart(cart[i].id);  
        };
        item.appendChild(removeButton);  
        cartContainer.appendChild(item);  
    }
    document.getElementById("total").textContent = `Total: $${getTotalPrice()}`;  
}

function getTotalPrice() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;  
    }
    return total;
}
