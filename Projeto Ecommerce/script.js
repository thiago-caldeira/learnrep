const products = [
    { id: 1, name: "Produto 1", price: 10.0, image: "images/produto1.jpg" },
    { id: 2, name: "Produto 2", price: 20.0, image: "images/produto2.jpg" },
    { id: 3, name: "Produto 3", price: 30.0, image: "images/produto3.jpg" },
    { id: 4, name: "Produto 4", price: 40.0, image: "images/produto4.jpg" },
    { id: 5, name: "Produto 5", price: 50.0, image: "images/produto5.jpg" },
    { id: 6, name: "Produto 6", price: 60.0, image: "images/produto6.jpg" },
    { id: 7, name: "Produto 7", price: 70.0, image: "images/produto7.jpg" },
    { id: 8, name: "Produto 8", price: 80.0, image: "images/produto8.jpg" },
    { id: 9, name: "Produto 9", price: 90.0, image: "images/produto9.jpg" },
    { id: 10, name: "Produto 10", price: 100.0, image: "images/produto10.jpg" }
];

const productList = document.querySelector('.product-list');

products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
        <img src="\${product.image}" alt="\${product.name}">
        <h3>\${product.name}</h3>
        <p>Preço: R$ \${product.price.toFixed(2)}</p>
        <button onclick="addToCart(\${product.id})">Adicionar ao Carrinho</button>
    `;
    productList.appendChild(productItem);
});

function addToCart(productId) {
    // Lógica para adicionar o produto ao carrinho
    alert('Produto ' + productId + ' adicionado ao carrinho!');
}
