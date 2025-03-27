document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("products");

    for (let i = 0; i < products.length; i++) {
        const item = document.createElement("div");
        item.innerHTML = `<strong>${products[i].name}</strong> - $${products[i].price}`;  
        const addButton = document.createElement("button");
        addButton.textContent = "Add to Cart"; 
        addButton.onclick = function () {
            addToCart(products[i].id);  
        };
        item.appendChild(addButton);  
        productList.appendChild(item);  
    }

    showCart(); 
});
