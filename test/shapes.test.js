const Shape = require("../lib/Shape");
const Triangle = require("../lib/Triangle");
const Circle = require("../lib/Circle");
const Square = require("../lib/Square");

describe("Shapes", () => {
  // this tests to see if the object is a a shape
  describe("instantiate", () => {
    it("should be an instance of the Shape class", () => {
      const newShape = new Shape();
      expect(newShape).toBeInstanceOf(Shape);
    });
    it('should have a text value of "shape"', () => {
      const newShape = new Shape("shape");
      expect(newShape.text).toBe("shape");
    });
    it('should have a color value of "red"', () => {
      const newShape = new Shape("shape", "red");
      expect(newShape.color).toBe("red");
    });
    it('should throw an error when render is called', () => {
      const newShape = new Shape();
      expect(newShape.render).toThrow();
    });
    it("should be an instance of the Shape class", () => {
      const newTriangle = new Triangle();
      expect(newTriangle).toBeInstanceOf(Triangle);
    });
    it('should have a text value of "triangle"', () => {
      const newTriangle = new Triangle("triangle");
      expect(newTriangle.text).toBe("triangle");
    });
    it('should have a color value of "orange"', () => {
      const newTriangle = new Triangle("triangle", "orange");
      expect(newTriangle.color).toBe("orange");
    });
    it("should be an instance of the Circle class", () => {
      const newCircle = new Circle();
      expect(newCircle).toBeInstanceOf(Circle);
    });
    it("should be an instance of the Square class", () => {
      const newSquare = new Square();
      expect(newSquare).toBeInstanceOf(Square);
    });
  });
});
