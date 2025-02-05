const products = [
  { name: 'Laptop', category: 'electronics', price: 999, rating: 4.5 },
  { name: 'T-shirt', category: 'clothing', price: 20, rating: 4.7 },
  { name: 'Smartphone', category: 'electronics', price: 699, rating: 4.2 },
];

function displayProducts(filteredProducts) {
  const productList = document.getElementById('productList');
  productList.innerHTML = ''; 

  filteredProducts.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `<h2>${product.name}</h2><p>Price: $${product.price}</p><p>Rating: ${product.rating}</p>`;
    productList.appendChild(productCard);
  });
}

function filterProducts() {
  const category = document.getElementById('category').value;
  const filteredProducts = products.filter(
    (product) => category === 'all' || product.category === category,
  );
  sortProducts(filteredProducts);
}

function sortProducts(filteredProducts = products) {
  const sortBy = document.getElementById('sort').value;
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    } else {
      return b.rating - a.rating;
    }
  });
  displayProducts(sortedProducts);
}

document.addEventListener('DOMContentLoaded', function () {
  displayProducts(products);
});
