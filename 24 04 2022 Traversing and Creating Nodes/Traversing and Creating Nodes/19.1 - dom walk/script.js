const startHere = document.querySelector('.start-here');
startHere.textContent = 'main title';

const subTitles = document.querySelector('ul li:nth-child(3) ul');
// subTitles.append('<li>sub title 4</li>');
let li = document.createElement('li');
li.textContent = 'sub title 4';
subTitles.append(li);

let toBeRemoved = document.querySelector('ul#mainUl > li:last-child');
toBeRemoved.remove();

document.title = 'Master Of The Dom';

document.querySelector('p').textContent = 'Another Text';
