const Shape = require("./Shape");

class Circle extends Shape {
  constructor(text, color, background) {
    super(text, color, background);
  }
  render() {
    let tempstring = "";
    tempstring = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="${this.background}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>

</svg>`;
    return tempstring;
  }
}

module.exports = Circle;
