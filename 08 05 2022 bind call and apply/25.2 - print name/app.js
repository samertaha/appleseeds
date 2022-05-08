const obj = {
  name: 'samer',
  print() {
    console.log('y ', this.name);
  },
  printAfterSecond() {
    setTimeout(
      function () {
        this.print();
      }.bind(this),
      1000
    );
  },
};

obj.printAfterSecond();
