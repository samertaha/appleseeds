const leepYear = function (year) {
  let leap = false;
  if (year % 4 == 0) leap = true;
  if (year % 100 == 0) leap = false;
  if (year % 400 == 0) leap = true;
  return leap;
};

if (leepYear(2012)) console.log('2012 It is indeed a leap year.');
else console.log('2012 This is not a leap year.');

if (leepYear(2100)) console.log('2100 It is indeed a leap year.');
else console.log('2100 This is not a leap year.');

if (leepYear(2400)) console.log('2400 It is indeed a leap year.');
else console.log('2400 This is not a leap year.');
