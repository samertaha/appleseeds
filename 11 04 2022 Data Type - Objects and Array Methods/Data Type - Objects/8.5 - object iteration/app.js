// Create a function that receives 1 argument, an object and returns a new object with the properties and values swapped
const swap = (obj) => {
  let res = {};
  for (let key in obj) {
    res[obj[key]] = key;
  }
  return res;
};

console.log(swap({ name: 'samer', job: 'fullstack' }));
