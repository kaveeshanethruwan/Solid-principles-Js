class Bird {
  fly() {
    console.log("fly");
  }
}

class Duck extends Bird {
  quack() {
    console.log("quack");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("I cant fly");
  }

  swim() {
    console.log("I can swim");
  }
}

function makeBirdFly(instance) {
  instance.fly();
}

const duck1 = new Duck();
const penguins1 = new Penguin();

makeBirdFly(duck1);
makeBirdFly(penguins1);

// This behavior violate the liskov substitution principle. Each inherited methods should work fine.
