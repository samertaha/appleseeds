const data = [
  {
    name: 'John',
    birthday: '1-1-1995',
    favoriteFoods: {
      meats: ['hamburgers', 'sausages'],
      fish: ['salmon', 'pike'],
    },
  },
  {
    name: 'Mark',
    birthday: '10-5-1980',
    favoriteFoods: {
      meats: ['hamburgers', 'steak', 'lamb'],
      fish: ['tuna', 'salmon', 'barracuda'],
    },
  },
  {
    name: 'Mary',
    birthday: '1-10-1977',
    favoriteFoods: {
      meats: ['ham', 'chicken'],
      fish: ['pike'],
    },
  },
  {
    name: 'Thomas',
    birthday: '1-10-1990',
    favoriteFoods: {
      meats: ['bird', 'rooster'],
      fish: ['salmon'],
    },
  },
  {
    name: 'Mary',
    birthday: '1-10-1977',
    favoriteFoods: {
      meats: ['hamburgers', 'lamb'],
      fish: ['anchovies', 'tuna'],
    },
  },
];

const names = (data) => {
  const result = data.map(function (obj) {
    return obj.name;
  });
  return result;
};

const b41990 = (data) => {
  const result = data.filter(
    (obj) => parseInt(obj.birthday.split('-')[2]) < 1990
  );
  return result;
};

// console.log(names(data));
// console.log(b41990(data));

let foods = [];
data.forEach((person) => {
  const {
    favoriteFoods: { meats },
    favoriteFoods: { fish },
  } = person;
  foods = foods.concat(meats).concat(fish);
});
const uniquefoods = [...new Set(foods)];

const obj = {};

uniquefoods.forEach((element) => {
  obj[element] = 0;
});

foods.sort().forEach((fd) => {
  obj[fd]++;
});
// foods.forEach((food) => {});
// console.log(foods.sort());
// console.log(uniquefoods);
console.log(obj);
