const cartItems = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cartItems.push(product);
    updateCart();
}

function updateCart() {
    const cartList = document.querySelector('.cart-list');
    cartList.innerHTML = '';
    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h3>\${item.name}</h3>
            <p>Preço: R$ \${item.price.toFixed(2)}</p>
        `;
        cartList.appendChild(cartItem);
    });
}
