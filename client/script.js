const products = [
  {
    name: "Laptop",
    price: 50000
  },
  {
    name: "Phone",
    price: 20000
  }
];

const productDiv = document.getElementById("products");

products.forEach(product => {
  const item = document.createElement("div");

  item.className = "product";

  item.innerHTML = `
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button onclick="addToCart('${product.name}')">
      Add to Cart
    </button>
  `;

  productDiv.appendChild(item);
});

function addToCart(productName) {
  const li = document.createElement("li");
  li.textContent = productName;

  document.getElementById("cart").appendChild(li);
}
