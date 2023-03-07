const Shape = require("./Shape");

class Triangle extends Shape {
  constructor(text, color, background) {
    super(text, color, background);
    this.svg = "";
  }
  render() {
    let tempstring = "";
    tempstring = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<polygon points="0,0 300,0 150,200" fill="${this.background}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>

</svg>`;
    return tempstring;
  }
}

module.exports = Triangle;
