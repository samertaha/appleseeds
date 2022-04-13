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
    favoriteFoods: { meats: ['ham', 'chicken'], fish: ['pike'] },
  },
  {
    name: 'Thomas',
    birthday: '1-10-1990',
    favoriteFoods: { meats: ['bird', 'rooster'], fish: ['salmon'] },
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

const onlyNames = (arr) => {
  return arr.map((person) => person.name);
};
console.log(onlyNames(data));
// _______________________________________________________________

const b41990 = (data) => {
  return data.filter(
    (person) => Date.parse(person.birthday) < Date.parse('01.01.1990')
  );
};
console.log(b41990(data));
// _______________________________________________________________
const foodsObj = (data) => {
  res = {};
  data.forEach((person) => {
    person.favoriteFoods.meats.forEach(
      (meat) => (res[meat] = res[meat] + 1 || 1)
    );
    person.favoriteFoods.fish.forEach(
      (fish) => (res[fish] = res[fish] + 1 || 1)
    );
  });
  return res;
};
console.log(foodsObj(data));
