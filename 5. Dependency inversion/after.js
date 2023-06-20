class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseBike(quantity) {
    this.paymentProcessor.pay(quantity * 100);
  }

  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(quantity * 25);
  }
}

class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }

  pay(quantity) {
    this.stripe.makePayment(quantity * 100);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amount) {
    console.log(`${this.user} has made payment of ${amount} with stripe!`);
  }
}

class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new Paypal();
  }

  pay(quantity) {
    this.paypal.makePayment(this.user, quantity * 100);
  }
}

class Paypal {
  makePayment(user, amount) {
    console.log(`${user} has made payment of ${amount} with paypal!`);
  }
}

const store = new Store(new StripePaymentProcessor("John"));
store.purchaseBike(2);
store.purchaseHelmet(2);
