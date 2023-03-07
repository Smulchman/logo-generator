const Shape = require('./Shape');

class Circle extends Shape {
    constructor(text, color, background) {
        super(text, color, background);
        this.svg = "";
    }
};

module.exports = Circle;