function quiz(questions) {
  questions.forEach((element) => {
    console.log(element.question);

    switch (element.type) {
      case "boolean":
        console.log("True");
        console.log("False");
        break;

      case "multipleChoices":
        element.options.forEach((ans) => {
          console.log(ans);
        });
        break;

      case "input":
        console.log("______________________________");

      default:
        break;
    }
  });
}

const arr = [
  {
    question: "This example is useful?",
    type: "boolean",
  },
  {
    question: "What is your fav programming language?",
    type: "multipleChoices",
    options: ["JS", "Java", "Python"],
  },
  {
    question: "Your fav JS feature?",
    type: "input",
  },
  ,
];

quiz(arr);

// If I need to add another question with diff answer type I need to change the existing code as well.
// Thats violate the open close principle
