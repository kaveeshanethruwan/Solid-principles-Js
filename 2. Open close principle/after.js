class BooleanQuestions {
  constructor(description) {
    this.description = description;
  }
  answers() {
    console.log("True");
    console.log("False");
  }
}

class MultipleChoices {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }
  answers() {
    this.options.forEach((element) => {
      console.log(element);
    });
  }
}

// If I want to add new question type call range just need to add new class
class Range {
  constructor(description) {
    this.description = description;
  }

  answers() {
    console.log("Min range: __________");
    console.log("Max range: __________");
  }
}

function printQuestions(instances) {
  instances.forEach((instance) => {
    console.log(instance.description);
    instance.answers();
    console.log("");
  });
}

const instances = [
  new BooleanQuestions("This example is useful?"),
  new MultipleChoices("What is your fav programming language?", [
    "JS",
    "Java",
    "Python",
  ]),
  new Range("Distance to Burger kings outlet?"),
];

printQuestions(instances);
