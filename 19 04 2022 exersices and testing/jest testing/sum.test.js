const sum = require('./sum');

test('properly adds two numbers', () => {
  expect(sum(0, 3)).toBe(3);
});

test('properly adds two numbers', () => {
  expect(sum(6, 1)).toBe(7);
});
