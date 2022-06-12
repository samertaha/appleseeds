const fs = require('fs');
var http = require('http');

fs.writeFileSync('readme.txt', 'this is the readme');
fs.copyFile('./readme.txt', 'copyreadme.txt', (err) => {
  if (err) {
    console.log(err);
  }
});

fs.rename('readme.txt', 'changed.txt', (err) => {
  if (err) {
    console.log(err);
  }
});

console.log(fs.readdirSync(__dirname));
const files = fs.readdirSync(__dirname);
files.forEach((file) => {
  console.log(file);
});
console.log(this);

fs.appendFile('changed.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
