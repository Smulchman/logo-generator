const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

inquirer
  .prompt([
    {
      type: 'maxlength-input',
      message: 'Enter text for the logo',
      name: 'text',
      maxLength: 3,
    },
    {
      type: 'input',
      message: 'Enter a color for for the text:',
      name: 'color',
    },
    {
      type: 'input',
      message: 'Enter a shape for the logo:',
      name: 'shape',
    },
    {
        type: 'input',
        message: 'Enter a color for the shape:',
        name: 'background-color',
    },
  ])
  .then((response) =>
    console.log(response)
  );