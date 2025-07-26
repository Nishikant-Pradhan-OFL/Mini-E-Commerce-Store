let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) 
{
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

function searchProducts() 
{
  const input = document.getElementById('searchBar').value.toLowerCase();
  const products = document.querySelectorAll('.product-card');

  products.forEach(card => {
    const name = card.getAttribute('data-name').toLowerCase();
    if (name.includes(input)) 
    {
      card.style.display = 'block';
    } 
    else 
    {
      card.style.display = 'none';
    }
  });
}

function filterCategory(category) 
{
  const products = document.querySelectorAll('.product-card');

  products.forEach(card => {
    const cardCategory = card.getAttribute('data-category');

    if (category === 'all' || cardCategory === category) 
    {
      card.style.display = 'block';
    } 
    else 
    {
      card.style.display = 'none';
    }
  });
}

function updateCartCount() 
{
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const badge = document.getElementById('cart-count');
  if (badge) 
  {
    badge.textContent = cart.length;
  }
}

updateCartCount();
