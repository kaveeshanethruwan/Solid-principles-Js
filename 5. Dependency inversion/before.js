class Store {
  constructor(user) {
    this.stripe = new Stripe(user);
  }

  purchaseBike(quantity) {
    this.stripe.makePayment(quantity * 100);
  }

  purchaseHelmet(quantity) {
    this.stripe.makePayment(quantity * 25);
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

class Paypal {
  makePayment(user, amount) {
    console.log(`${user} has made payment of ${amount} with stripe!`);
  }
}

const store = new Store("john");
store.purchaseBike(2);
store.purchaseHelmet(2);
