const doubleValues = (Values) => {
  return Values.map((V) => V + V);
};

const Vals = [4, 6, 7];
console.log(doubleValues(Vals));

const onlyEvenValues = (Nums) => {
  const result = [];
  Nums.forEach((element) => {
    element % 2 == 0 ? result.push(element) : '';
  });
  return result;
};
const Nums = [4, 7, 8, 9];
console.log(onlyEvenValues(Nums));

const showFirstAndLast = (arr) => {
  if (typeof arr[0] == 'string' && typeof arr[arr.length - 1] == 'string')
    return [arr[0], arr[arr.length - 1]];
  else return 'first or/and last element not strings';
};
arr1 = ['abc', 1, 2, 3, 4];
arr2 = ['abc', 1, 2, 3, 'defg'];
console.log(showFirstAndLast(arr1));
console.log(showFirstAndLast(arr2));

function vowelCount(str1) {
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;

  for (var x = 0; x < str1.length; x++) {
    if (vowel_list.indexOf(str1[x]) !== -1) {
      vcount += 1;
    }
  }
  return vcount;
}
console.log(vowelCount('The quick brown fox'));

const capitalize = (str) => {
  return str.toUpperCase();
};
console.log(capitalize('samer taha'));

function shiftLetters(str) {
  // you can comment this line
  str = str.toLowerCase();

  var result = '';
  var charcode = 0;

  for (var i = 0; i < str.length; i++) {
    charcode = str[i].charCodeAt() + 1;
    result += String.fromCharCode(charcode);
  }
  return result;
}
console.log(shiftLetters('abcdefgh'));

const swapCase = (str) => {
  return str
    .split(' ')
    .map((word, i) => (i % 2 == 0 ? capitalize(word) : word))
    .join(' ');
};
console.log(swapCase('samer taha fullstack developer'));
