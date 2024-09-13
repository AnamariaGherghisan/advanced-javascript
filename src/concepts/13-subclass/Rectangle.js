import Shape from "./Shape.js";

class Rectangle extends Shape {
  constructor(sideA, sideB, name) {
    super(sideA, sideB);

    this.name = name;
  }

  area() {
    return this.sideA * this.sideB;
  }

  perimeter() {
    return 2 * (this.sideA + this.sideB);
  }
}

const rectangle = new Rectangle(5, 10, "Rect1");

console.log(`Rectangle area: ${rectangle.area()}`);

console.log(`Rectangle perimeter: ${rectangle.perimeter()}`);

rectangle.displayShapeInfo();
