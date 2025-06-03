const cart = [];
const cartItemsEl = document.getElementById("cart-items");
const cartCountEl = document.getElementById("cart-count");
const cartTotalEl = document.getElementById("cart-total");
const cartModal = document.getElementById("cart-modal");

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.parentElement;
    const id = product.getAttribute("data-id");
    const name = product.getAttribute("data-name");
    const price = parseFloat(product.getAttribute("data-price"));

    addToCart({ id, name, price });
  });
});

document.getElementById("open-cart").addEventListener("click", () => {
  cartModal.classList.remove("hidden");
  updateCartUI();
});

function closeCart() {
  cartModal.classList.add("hidden");
}

function addToCart(product) {
  const found = cart.find(p => p.id === product.id);
  if (found) {
    found.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCartUI();
}

function updateCartUI() {
  cartItemsEl.innerHTML = "";
  let total = 0;
  let itemCount = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} x${item.quantity} - R$ ${(item.price * item.quantity).toFixed(2)}`;
    cartItemsEl.appendChild(li);

    total += item.price * item.quantity;
    itemCount += item.quantity;
  });

  cartTotalEl.textContent = total.toFixed(2);
  cartCountEl.textContent = itemCount;
}
