import { Product } from './product.js';

export class ShippingInsuranceDecorator extends Product {
  constructor(product) {
    super();
    this.product = product;
  }

  getPrice() {
    return this.product.getPrice() + 20;
  }

  getDescription() {
    return this.product.getDescription() + ' con seguro de envío';
  }
}
