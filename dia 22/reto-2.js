import { Product } from './product.js';
import { ShippingInsuranceDecorator } from './ShippingInsurance.js';
import { WarrantyDecorator } from './WarrantyDecorator.js';

export class BasicProduct extends Product {
  constructor(price, description) {
    super();
    this.price = price;
    this.description = description;
  }

  getDescription() {
    return this.description;
  }
}

// Test1
// const basicProduct = new BasicProduct(100, 'Camisa de algodón');
// const withWarranty = new WarrantyDecorator(basicProduct);
// const withShippingInsurance = new ShippingInsuranceDecorator(withWarranty);
// console.log(withShippingInsurance.getPrice());
// console.log(withShippingInsurance.getDescription());

// Test2
// const basicProduct = new BasicProduct(5000, 'Refrigerador');
// const withWarranty = new WarrantyDecorator(basicProduct);
// console.log(withWarranty.getPrice());
// console.log(withWarranty.getDescription());

// Test3
const basicProduct = new BasicProduct(5000, 'Refrigerador');
const withShippingInsurance = new ShippingInsuranceDecorator(basicProduct);
console.log(withShippingInsurance.getPrice());
console.log(withShippingInsurance.getDescription());
