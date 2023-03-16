import { Product } from './product.js';

export class Article extends Product {
  addToCart() {
    return `Agregando ${this.quantity} unidades del artículo ${this.name} al carrito`;
  }
}

export class Service extends Product {
  addToCart() {
    return `Agregando el servicio ${this.name} al carrito`;
  }
}

export class Cart {
  constructor(products = []) {
    this.products = products;
  }

  addProduct(product) {
    product.addToCart();
    this.products.push(product);
  }

  deleteProduct(product) {
    const index = this.products.findIndex((item) => item.name === product.name);
    if (index != -1) {
      this.products.splice(index, 1);
    }
  }

  calculateTotal() {
    return this.products.reduce(
      (acum, element) => acum + element.price * element.quantity,
      0
    );
  }
}

const book = new Article('Libro', 100, 2);
const course = new Service('Curso', 120, 1);

const cart = new Cart();
console.log(cart.addProduct(book));
console.log(cart.addProduct(course));
console.log(cart.calculateTotal());
