class FlyingBird {
  fly() {
    console.log("fly");
  }
}

class SwimBird {
  swim() {
    console.log("swim");
  }
}

class Duck extends FlyingBird {
  quack() {
    console.log("quack");
  }
}

class Penguin extends SwimBird {}

function makeBirdFly(instance) {
  instance.fly();
}

function makeBirdSwim(instance) {
  instance.swim();
}

const duck1 = new Duck();
const penguins1 = new Penguin();

makeBirdFly(duck1);
makeBirdSwim(penguins1);

// This behavior violate the liskov substitution principle. Each inherited methods should work fine.
