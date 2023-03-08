// importing the parent class
const Shape = require("./Shape");

// Have gotten mixed info on using super, but this did not work until it was included.
class Triangle extends Shape {
  constructor(text, color, background) {
    super(text, color, background);
  }
  // We must define render with this class because if left undefined it will throw an error because it is set to throw by default in the Shape class.
  render() {
    // declaring the string before defining it because it's more comfortable.
    let tempstring = "";
    // The formatting here is ugly but it has to be to ensure proper spacing in the actually generated file.
    // The most important bit of code below is the second section. This is where the shape of the logo is defined and is the section that is different between the different shape classes.
    tempstring = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<polygon points="0,200 300,200 150,0" fill="${this.background}" />

<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>

</svg>`;
    return tempstring;
  }
}

module.exports = Triangle;
