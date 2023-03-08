class Shape {
  constructor(text, color, background) {
    this.text = text;
    this.color = color;
    this.background = background;
  }
  // This method throws an error by default to make sure that it is properly defined in the child classes.
  render() {
    throw new Error("Child class must implement render() method.")
  }
}

// Exports the class to let us define the child classes in our other files.
module.exports = Shape;
