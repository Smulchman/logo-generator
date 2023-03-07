const Shape = require('./Shape');

class Triangle extends Shape {
    constructor(text, color, background) {
        super(text, color, background);
        this.svg = "";
    }
};

module.exports = Triangle;