const inquirer = require("inquirer");
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
inquirer.registerPrompt("maxlength-input", MaxLengthInputPrompt);

const Shape = require("./lib/Shape");
const Triangle = require("./lib/Triangle");
const Circle = require("./lib/Circle");
const Square = require("./lib/Square");

var userShape;

var shapesChoices = [
  {
    name: "Circle",
    value: "Circle",
    short: "Circle",
  },
  {
    name: "Triangle",
    value: "Triangle",
    short: "Triangle",
  },
  {
    name: "Square",
    value: "Square",
    short: "Square",
  },
];

inquirer
  .prompt([
    {
      type: "maxlength-input",
      message: "Enter text for the logo",
      name: "text",
      maxLength: 3,
    },
    {
      type: "input",
      message: "Enter a color for for the text:",
      name: "color",
    },
    {
      type: "list",
      message: "Choose a shape for the logo:",
      choices: shapesChoices,
      name: "shape",
    },
    {
      type: "input",
      message: "Enter a color for the shape:",
      name: "backgroundColor",
    },
  ])
  .then((response) => {
    console.log(response);
    switch (response.shape) {
      case "Circle":
        userShape = new Circle(
          response.text,
          response.color,
          response.backgroundColor
        );
        break;
      case "Triangle":
        userShape = new Triangle(
          response.text,
          response.color,
          response.backgroundColor
        );
        break;
      case "Square":
        userShape = new Square(
          response.text,
          response.color,
          response.backgroundColor
        );
        break;
    }
    console.log(userShape);
  });
