const book = {
  bookname: 'web frontend',
  author: 'Samer',
  published: '26/08/1971',
};
const sayit = ({ bookname, author, published }) => {
  console.log(
    `The book ${bookname} was written by ${author} in the year ${published}.`
  );
};
sayit(book);
