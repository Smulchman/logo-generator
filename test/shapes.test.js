// Importing all the dependencies
const Shape = require("../lib/Shape");
const Triangle = require("../lib/Triangle");
const Circle = require("../lib/Circle");
const Square = require("../lib/Square");

// I've defined these variables up here to keep the formatting within the actual tests simple and consistent.
// The variables are what the svg text should be in the examples that are built below in the tests.
var testCircle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="red" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">tst</text>

</svg>`;

var testTriangle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<polygon points="0,200 300,200 150,0" fill="green" />

<text x="150" y="150" font-size="60" text-anchor="middle" fill="white">tst</text>

</svg>`;

var testSquare = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<rect x="50" y="0" width="200" height="200" fill="blue" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">tst</text>

</svg>`;

describe("Shapes", () => {
  // This section is to test that objects are being created correctly according to their class.
  describe("instantiate", () => {
    // Tests to see if our newShape is a Shape object
    it("should be an instance of the Shape class", () => {
      const newShape = new Shape();
      expect(newShape).toBeInstanceOf(Shape);
    });
    // Tests to make sure the text value is assigned properly
    it('should have a text value of "shp"', () => {
      const newShape = new Shape("shp");
      expect(newShape.text).toBe("shp");
    });
    // Tests to make sure the color value is assigned properly
    it('should have a color value of "red"', () => {
      const newShape = new Shape("shp", "red");
      expect(newShape.color).toBe("red");
    });
    // Tests to make sure the color value is assigned properly
    it('should have a background value of "orange"', () => {
      const newShape = new Shape("shp", "red", "orange");
      expect(newShape.background).toBe("orange");
    });
    // Tests to make sure the render method throws an error by default
    it("should throw an error when render is called", () => {
      const newShape = new Shape();
      expect(newShape.render).toThrow();
    });
    // Tests to see if our newTriangle is a Shape object
    it("should be an instance of the Shape class", () => {
      const newTriangle = new Triangle();
      expect(newTriangle).toBeInstanceOf(Shape);
    });
    // Tests to see if our newTriangle is a Triangle object
    it("should be an instance of the Triangle class", () => {
      const newTriangle = new Triangle();
      expect(newTriangle).toBeInstanceOf(Triangle);
    });
    // Tests to make sure the text value is assigned properly
    it('should have a text value of "tri"', () => {
      const newTriangle = new Triangle("tri");
      expect(newTriangle.text).toBe("tri");
    });
    // Tests to make sure the color value is assigned properly
    it('should have a color value of "orange"', () => {
      const newTriangle = new Triangle("tri", "orange");
      expect(newTriangle.color).toBe("orange");
    });
    // Tests to make sure the background value is assigned properly
    it('should have a background value of "yellow"', () => {
      const newTriangle = new Triangle("tri", "orange", "yellow");
      expect(newTriangle.background).toBe("yellow");
    });
    // Tests to see if our newCircle is a Shape object
    it("should be an instance of the Shape class", () => {
      const newCircle = new Circle();
      expect(newCircle).toBeInstanceOf(Shape);
    });
    // Tests to see if our newCircle is a Circle object
    it("should be an instance of the Circle class", () => {
      const newCircle = new Circle();
      expect(newCircle).toBeInstanceOf(Circle);
    });
    // Tests to make sure the text value is assigned properly
    it('should have a text value of "crc"', () => {
      const newCircle = new Circle("crc");
      expect(newCircle.text).toBe("crc");
    });
    // Tests to make sure the color value is assigned properly
    it('should have a color value of "yellow"', () => {
      const newCircle = new Circle("crc", "yellow");
      expect(newCircle.color).toBe("yellow");
    });
    // Tests to make sure the color value is assigned properly
    it('should have a background value of "blue"', () => {
      const newCircle = new Circle("crc", "yellow", "blue");
      expect(newCircle.background).toBe("blue");
    });
    // Tests to see if our newSquare is a Shape object
    it("should be an instance of the Shape class", () => {
      const newSquare = new Square();
      expect(newSquare).toBeInstanceOf(Shape);
    });
    // Tests to see if our newSquare is a Square object
    it("should be an instance of the Square class", () => {
      const newSquare = new Square();
      expect(newSquare).toBeInstanceOf(Square);
    });
    // Tests to make sure the text value is assigned properly
    it('should have a text value of "sqr"', () => {
      const newSquare = new Square("sqr");
      expect(newSquare.text).toBe("sqr");
    });
    // Tests to make sure the color value is assigned properly
    it('should have a color value of "blue"', () => {
      const newSquare = new Square("sqr", "blue");
      expect(newSquare.color).toBe("blue");
    });
    // Tests to make sure the background value is assigned properly
    it('should have a background value of "green"', () => {
      const newSquare = new Square("sqr", "blue", "green");
      expect(newSquare.background).toBe("green");
    });
  });
  describe("render", () => {
    // Tests to see if our render methods are returning the expected value
    // The expected svg text is defined before any of the tests are defined
    it("should have the proper SVG value", () => {
      const newCircle = new Circle("tst", "white", "red");
      expect(newCircle.render()).toEqual(testCircle);
    });
    it("should have the proper SVG value", () => {
      const newTriangle = new Triangle("tst", "white", "green");
      expect(newTriangle.render()).toEqual(testTriangle);
    });
    it("should have the proper SVG value", () => {
      const newSquare = new Square("tst", "white", "blue");
      expect(newSquare.render()).toEqual(testSquare);
    });
  });
});
