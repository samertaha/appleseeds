function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}
Square.prototype.isSquare = function () {
  console.log(this.a, this.b, this.c, this.d);
  return this.a === this.b && this.b === this.c && this.c === this.d
    ? true
    : false;
};

console.log(new Square(5, 5, 5, 4).isSquare());
