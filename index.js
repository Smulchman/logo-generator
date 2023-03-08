// Required modules
const inquirer = require("inquirer");
// Jake told be about this module, it allows me to limit the amount of characters that can be input and accepted. The input will just not be accepted until the user reduces the length.
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
inquirer.registerPrompt("maxlength-input", MaxLengthInputPrompt);
const fs = require('fs');

// Immporting all the shape classes
// Not certain that importing the parent class is required, but I'm keeping it in
const Shape = require("./lib/Shape");
const Triangle = require("./lib/Triangle");
const Circle = require("./lib/Circle");
const Square = require("./lib/Square");

// I'm declaring userShape here to give it global scope. It's representing shape object that the user is creating, later on in the code I create a shape based on the inputs and then store it in this variable.
var userShape;

// This array contains 3 objects that inquirer can read and use as choices during the prompts
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

// Prompting the user for what they want their logo to look like.
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
      message: "Enter a color for the text (hexcode or appropriate keyword will work):",
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
      message: "Enter a color for the shape (hexcode or appropriate keyword will work):",
      name: "backgroundColor",
    },
  ])
//   Using a switch statement here to check for the shape the user chose and then building the right shape based on that. Basically a cleaner series of if statements.
  .then((response) => {
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
  })
//   this is where the actual file is created. The first argument is just the name for the file and the second argument is the actual text that is going into the file as code.
  .then(() => {writeToFile("logo.svg", userShape.render())});

//   This is where the function defining what writing the file actually looks like is defined. Uses fs.writeFile
// Console logs an error if it doesnt work and console logs 'generated logo.svg' if it does work.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.log(err): console.log("Generated logo.svg"));
};