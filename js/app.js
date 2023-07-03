document.querySelectorAll('li')[2].remove();
document.querySelectorAll('li')[3].remove();

const classUl = document.querySelector('ul');
classUl.classList.add('list');
const classLi = document.querySelectorAll('li').forEach(el=>el.textContent == el.classList.add('listItem'));

const firstLi = document.querySelector('.list');
const newLi = document.createElement('li');
newLi.innerText = 'Bugatti';
firstLi.prepend(newLi);
firstLi.classList.add('listItem')

const lastLi = document.querySelector('.list');
const newLiLast = document.createElement('li');
newLiLast.innerText = 'Ford';
lastLi.appendChild(newLiLast);
lastLi.classList.add('listItem')


const inputs = document.querySelector('form');
inputs.innerHTML = '<input /> <input /> <input /> <input />';
inputs[0].placeholder = 'Name';
inputs[1].placeholder = 'Surname';
inputs[inputs.length - 2].placeholder = 'Password';
inputs[inputs.length - 1].placeholder = 'Confirm password';

const image = document.createElement('img');
image.src = 'https://s7d1.scene7.com/is/image/scom/24_OBK_feature_1?$1400w$';
document.querySelector('form').appendChild(image)

const p = document.querySelector('p');
p.classList.remove('red', 'italic')
const h1 = document.createElement('h1');
h1.innerText = 'this is h1 tag';
document.querySelector('#h1Wrapper').append(h1);
h1.style.color = 'blue';
h1.style.fontSize = '40px';
