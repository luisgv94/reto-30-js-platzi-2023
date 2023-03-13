function processShoppingList(list) {
  const modifiedList = list.map((item) => {
    const itemPrice = item.name.includes('oferta')
      ? item.price * 0.8
      : item.price;
    return {
      name: item.name,
      price: itemPrice * item.quantity,
    };
  });

  console.log(modifiedList);

  Object.assign(list, modifiedList);

  return modifiedList.reduce((acum, item) => acum + item.price, 0);
}

const shoppingList = [
  { name: 'pan', price: 20, quantity: 2 },
  { name: 'leche', price: 25, quantity: 1 },
  { name: 'oferta manzanas', price: 10, quantity: 3 },
];

console.log(processShoppingList(shoppingList));

console.log(shoppingList);
