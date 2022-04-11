const book1 = { name: 'samer', author: 'somone', year: '1999' };
const book2 = { name: 'taha', author: 'david', year: '2000' };
const bookUtil = {};
bookUtil.getFirstPublished = (book1, book2) => {
  return book1.year < book2.year ? book1 : book2;
};
bookUtil.setNewEdition = (book, edition) => {
  book.latestEdition = edition;
};
console.log(bookUtil.getFirstPublished(book1, book2));

bookUtil.setNewEdition(book1, '1979');
console.log(book1);
bookUtil.setNewEdition(book1, '1980');
console.log(book1);

bookUtil.setLanguage = (book, language) => {
  book.language = language;
};
bookUtil.setLanguage(book1, 'arabic');
console.log(book1);

bookUtil.setTranslation = (book, language, translator) => {
  book.translation = {
    translator: translator,
    language: language,
  };
};
bookUtil.setTranslation(book1, 'arabic', 'avi');
console.log(book1);

bookUtil.setPublisher = (book, name, location) => {
  book.publisher = {
    name: name,
    location: location,
  };
};
bookUtil.setPublisher(book1, 'muhamed', 'israel');
console.log(book1);

bookUtil.isSamePublisher = (book1, book2) => {
  return JSON.stringify(book1.publisher) == JSON.stringify(book2.publisher)
    ? true
    : false;
};
bookUtil.setPublisher(book2, 'muhamed', 'israel');
console.log('-------------------------------------------');
console.log(book1);
console.log('-------------------------------------------');
console.log(book2);
console.log('-------------------------------------------');
console.log(bookUtil.isSamePublisher(book1, book2));
