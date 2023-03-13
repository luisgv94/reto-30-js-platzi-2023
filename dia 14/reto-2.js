// Métodos de arrays: sort
// La función de comparación toma dos argumentos y devuelve un número que indica cómo se deben ordenar los elementos.
// Si el número devuelto es menor que 0, el primer elemento debe ir antes que el segundo elemento;
// si el número devuelto es mayor que 0, el segundo elemento debe ir antes que el primero;
// y si el número devuelto es 0, los elementos son iguales y no se cambia su orden.

function sortByAvailabilityAndPrice(products) {
  const copyProducts = [...products];
  console.log(copyProducts);
  copyProducts.sort((a, b) => {
    if (a.inStock === b.inStock) {
      return a.price - b.price;
    } else {
      return b.inStock - a.inStock;
    }
  });

  return copyProducts;
}

const products = [
  { name: 'product1', price: 10, inStock: true },
  { name: 'product2', price: 20, inStock: false },
  { name: 'product3', price: 15, inStock: true },
  { name: 'product4', price: 5, inStock: false },
];

console.log(sortByAvailabilityAndPrice(products));
