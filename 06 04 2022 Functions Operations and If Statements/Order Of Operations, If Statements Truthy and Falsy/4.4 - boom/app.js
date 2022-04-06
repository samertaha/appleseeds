const boom = (number) => {
  let str = '';
  for (let i = 1; i <= number; i++) {
    if (i % 7 == 0 && (i + '').indexOf('7') > -1)
      str = str.concat('BOOM-BOOM,');
    else if (i % 7 == 0) str = str.concat('BOOM,');
    else str = str.concat(i + ',');
  }
  return str;
};

console.log(boom(18));
