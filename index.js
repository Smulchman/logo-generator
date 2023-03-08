const inquirer = require("inquirer");
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
inquirer.registerPrompt("maxlength-input", MaxLengthInputPrompt);
const fs = require('fs');

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
      message: "Enter a color for for the text (hexcode or appropriate keyword acceptable):",
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
      message: "Enter a color for the shape (hexcode or appropriate keyword acceptable):",
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
    console.log(userShape.render())
  })
  .then(() => {writeToFile("logo.svg", userShape.render())});

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.log(err): console.log("Generated logo.svg"));
}