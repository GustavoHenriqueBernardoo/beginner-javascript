const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  // console.log(person.name);
  // if (person.name === 'Wes'){
  //   console.warn('Dumb name')}
  // debugger;
  console.groupCollapsed(`${person.name}`);
  // collapsed is a very useful
  console.log(person.country);
  console.log(person.cool);
  console.log('DONE')
  console.groupEnd(`${person.name}`);
});

// console.table(people);

// Console Methods


// Callstack

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doALotOfStuff(){
  console.group('Doing some stuff');
  console.log('Hey Im one');
  console.warn('Watch OUT!!!');
  console.error('Hey');
  console.groupEnd('Doing some stuff');
}

function doctorize(name) {
  // console.count(`running Doctorize for ${name}`);
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}
// go();

function anything(){
  go()
}
// anything();

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
