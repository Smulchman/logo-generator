const Shape = require('./Shape');

class Square extends Shape {
    constructor(text, color, background) {
        super(text, color, background);
        this.svg = "";
    }
};

module.exports = Square;