function groupProducts(products, category) {
  const productsByCategory = products.filter(
    (product) => product.category === category
  );

  const productsName = productsByCategory
    .map((product) => product.name)
    .join(', ');

  const totalPrice = productsByCategory.reduce(
    (acum, product) => acum + product.price,
    0
  );

  return {
    products: productsName,
    totalPrice,
  };
}

const products = [
  { name: 'Smartphone', category: 'Electronics', price: 800 },
  { name: 'Laptop', category: 'Electronics', price: 1200 },
  { name: 'Shirt', category: 'Clothing', price: 50 },
  { name: 'Pants', category: 'Clothing', price: 100 },
];

console.log(groupProducts(products, 'Electronics'));
