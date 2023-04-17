// Update the 'Apples' item to say 'Granny Smith Apples'
const apples = document.getElementById('list').getElementsByTagName('li')[1].innerHTML = 'Granny Smith Apples';
//console.log(apples);

// Remove 'Oat Milk' from the list
const oatMilk = document.getElementById('list').getElementsByTagName('li')[3].remove('Oat Milk');

// Add an item 'Kombucha'
const Kombucha = document.createElement('li');
Kombucha.innerHTML = 'Kombucha';
//console.log(Kombucha);
const list = document.querySelector('ul');
list.appendChild(Kombucha);

//Clear the list and programmatically add items from the array [protein bars,almonds,peanut butter]
const newList = document.getElementById('list');
newList.innerHTML = '';
console.log(newList);

const proteinBars = document.createElement('li');
proteinBars.innerHTML = 'Protein Bars';
newList.appendChild(proteinBars);
console.log(proteinBars);

const almonds = document.createElement('li');
almonds.innerHTML = 'Almonds';
newList.appendChild(almonds);
console.log(almonds);

const peanutButter = document.createElement('li');
peanutButter.innerHTML = 'Peanut Butter';
newList.appendChild(peanutButter);
console.log(peanutButter);


