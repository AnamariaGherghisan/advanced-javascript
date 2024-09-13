class Shape {
  constructor(sideA, sideB) {
    this.isSquare = sideA === sideB;
    this.isRectangle = sideA !== sideB;

    this.sideA = sideA;
    this.sideB = sideB;
  }

  displayShapeInfo() {
    console.log(`This shape is a ${this.isSquare ? "SQUARE" : "RECTANGLE"}`);
  }
}

export default Shape;
