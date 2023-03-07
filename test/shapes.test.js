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
    it('should have a text value of "yes"', () => {
      const newShape = new Shape("yes");
      expect(newShape.text).toBe("yes");
    });
    it('should have a color value of "yes"', () => {
      const newShape = new Shape("yes", "yes");
      expect(newShape.color).toBe("yes");
    });
    it("should be an instance of the Shape class", () => {
      const newTriangle = new Triangle();
      expect(newTriangle).toBeInstanceOf(Triangle);
    });
    it('should have a color value of "yes"', () => {
      const newTriangle = new Triangle("triangle");
      expect(newTriangle.text).toBe("triangle");
    });
    it('should have a color value of "yes"', () => {
      const newTriangle = new Triangle("triangle", "triangle");
      expect(newTriangle.color).toBe("triangle");
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
