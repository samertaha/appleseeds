const candyStore = {
  candies: [
    { name: 'mint gum', id: 'as12f', price: 2, amount: 2 },
    { name: 'twix', id: '5hd7y', price: 5, amount: 4 },
  ],
  cashRegister: 200,
};

function getCandy(candyStore, id) {
  return candyStore.candies.filter((candy) => candy.id == id);
}
console.log(getCandy(candyStore, 'as12f'));

function getPrice(candyStore, id) {
  let price = 0;
  candyStore.candies.forEach((candy) => {
    if (candy.id == id) price = candy.price;
  });
  return price;
}
console.log(getPrice(candyStore, 'as12f'));

function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({ name: name, id: id, price: price, amount: 1 });
}
addCandy(candyStore, 'abcdef', 'knafeh', 22);
console.log(candyStore);

function buy(candyStore, id) {
  candyStore.cashRegister += getPrice(candyStore, id);
  getCandy(candyStore, 'as12f')[0].amount -= 1;
}
buy(candyStore, 'as12f');
console.log(candyStore);
