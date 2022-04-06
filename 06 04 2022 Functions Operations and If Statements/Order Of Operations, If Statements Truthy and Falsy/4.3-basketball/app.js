const johnGames = [89, 120, 103];
const mikeGames = [116, 94, 123];
const marryGames = [97, 134, 105];

let johnAvg = johnGames.reduce(function (a, b) {
  return a + b;
});
johnAvg = johnAvg / johnGames.length;

console.log(`john team average is ${johnAvg}`);

let mikeAvg = mikeGames.reduce(function (a, b) {
  return a + b;
});
mikeAvg = mikeAvg / mikeGames.length;

console.log(`mike team average is ${mikeAvg}`);

let marryAvg = marryGames.reduce(function (a, b) {
  return a + b;
});
marryAvg = marryAvg / marryGames.length;

console.log(`marry team average is ${marryAvg}`);

let winner = '';

const winneravg = Math.max(marryAvg, johnAvg, mikeAvg);

if (marryAvg === winneravg) winner = winner.concat('marry');

if (johnAvg === winneravg)
  winner = winner.concat(`${winner.length ? ' and ' : ''}john`);

if (mikeAvg === winneravg)
  winner = winner.concat(`${winner.length ? ' and ' : ''}mike`);

if (mikeAvg === winneravg && (johnAvg === winneravg) & (marryAvg === winneravg))
  winner = 'no winner';

if (winner)
  console.log(`winner team is ${winner} team with average of ${winneravg}`);
else console.log('no winner !!');
