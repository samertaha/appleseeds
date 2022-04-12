const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];
// console.log('im here');
for (let i = 0; i < listOfNeighbours.length; i++) {
  //   console.log('im here');
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    // console.log('im here');
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}
