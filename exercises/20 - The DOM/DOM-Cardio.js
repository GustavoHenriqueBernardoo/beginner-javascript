// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);
console.log(div);
// make an unordered list
const unorderList = document.createElement('ul');
// add three list items with the words "one, two, three" in them
const list1 = document.createElement('li');
const list2 = document.createElement('li');
const list3 = document.createElement('li');

list1.textContent = ('one');
list2.textContent = ('two');
list3.textContent = ('three');
// put that list into the above wrapper
div.appendChild(unorderList);

unorderList.appendChild(list1)
unorderList.appendChild(list2)
unorderList.appendChild(list3)
console.log(div);

// create an image
const img = document.createElement('img');
// set the source to an image
img.src = 'https://randomwordgenerator.com/img/picture-generator/57e0d2474d56b10ff3d8992cc12c30771037dbf85254784a702879d4954e_640.jpg';
// set the width to 250
img.width = 250 ; 
// add a class of cute
img.classList = 'cute';
// add an alt of Cute Puppy
img.alt = 'Cute Puppy';
console.log(img);
// Append that image to the wrapper
div.appendChild(img);
// with HTML string, make a div, with two paragraphs inside of it
const varHTML = `
  <div>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </div>

`
/*
const fragHTML = document.createRange().createContextualFragment(varHTML);
console.log(typeof fragHTML);
*/


// put this div before the unordered list from above

div.insertAdjacentHTML('beforeBegin', varHTML);

// add a class to the second paragraph called warning

const paragraph = document.querySelector('p');

paragraph.classList.add("warning");
console.log(paragraph);

// remove the first paragraph

// paragraph.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height){
  return `
  <div class="playerCard">
    <h2>NAME — AGE</h2>
    <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
  </div>
  `
};

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
