// Create a function that receives 1 argument, an object and returns a new object with the properties and values swapped
const swap = (obj) => {
  let ret = {};
  for (var key in obj) {
    ret[obj[key]] = key;
  }
  return ret;
};

console.log(swap({ name: 'samer', job: 'fullstack' }));
