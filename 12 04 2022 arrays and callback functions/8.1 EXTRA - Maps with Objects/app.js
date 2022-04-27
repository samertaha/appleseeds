const obj1 = { name1: '' };
const obj2 = { name1: '' };
const obj3 = { name1: '' };

let map = new Map();
map.set(obj1, '3');
map.set(obj2, '3');
map.set(obj3, '3');
for (let key of map.values()) console.log(key);
// console.log(map);
for (let obj of map.keys()) {
  let a = map[obj];
  console.log(obj, a);
}
