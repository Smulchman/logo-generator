class Shape {
  constructor(text, color, background) {
    this.text = text;
    this.color = color;
    this.background = background;
  }
  render() {
    console.log("rendering, beep boop");
  }
}

// I need to make it so that the user input determines the type of class object for the shape based on user input
// Need the svg code for each shape
// Need the

module.exports = Shape;
