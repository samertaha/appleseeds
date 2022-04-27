const lettercounts = (wordsArray) => {
  const str = wordsArray.join('').replace(/\s/g, '').toLowerCase();
  const unique = new Set(str);
  const arr = Array.from(unique);
  const result = {};

  arr.forEach((v, i) => {
    const re = new RegExp(v, 'g');
    let count = (str.match(re) || []).length;
    result[v] = count;
  });
  return result;
};

const array = ['Hello', 'Good Day', 'Your Welcome', 'hotdog', 'hamburgers'];
console.log(lettercounts(array));
