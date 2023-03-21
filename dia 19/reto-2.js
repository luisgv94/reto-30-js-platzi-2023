export class Pay {
  makePay(quantity) {
    return {
      realized: true,
      quantity,
    };
  }
}

export class PayPal extends Pay {
  constructor(email) {
    super();
    this.email = email;
  }

  makePay(quantity) {
    return {
      ...super.makePay(quantity),
      platform: 'PayPal',
      email: this.email,
    };
  }
}

export class Card extends Pay {
  constructor(cardNumber) {
    super();
    this.cardNumber = cardNumber;
  }

  makePay(quantity) {
    if (this.cardNumber.length < 16) {
      throw new Error('La tarjeta debe tener minimo 16 digitos');
    }
    return {
      ...super.makePay(quantity),
      lastCardNumbers: this.cardNumber.slice(-4),
    };
  }
}

export class Cash extends Pay {}

export function processPay(method, quantity) {
  return method.makePay(quantity);
}

const card = new Card('4913478952471122');

console.log(processPay(card, 100));

const paypal = new PayPal('test@mail.com');

console.log(processPay(paypal, 240));

const cash = new Cash();

console.log(processPay(cash, 400));
