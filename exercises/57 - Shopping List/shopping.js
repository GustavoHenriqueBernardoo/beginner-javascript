const shoppingForm = document.querySelector('.shopping')
const list = document.querySelector('.list')

// console.log(shoppingForm)
// console.log(list)

// We need an array to hold our state
const items = []

function handleSubmit(e) {
  e.preventDefault()

  // another way of doing
  // const inputValue = document.getElementById('item').value

  // here item, is the name it were assign into the input
  const name = e.currentTarget.item.value

  const item = {
    name: name,
    // creating an ID with the date.now
    id: Date.now(),
    complete: false,
  }

  // Push the items into our state
  items.push(item)

  // clear the form
  e.currentTarget.item.value = ''

  displayItems()
}

function displayItems() {
  console.log(items)

  const html = items.map(item =>
    `
  <li class='shopping-item'>
    <input type='checkbox'>
    <span class='item-nam'>${item.name}</span>
    <button aria-label= 'remove' >&times;</button>
  </li>
  `
  ).join('')
  list.innerHTML = html
}

shoppingForm.addEventListener('submit', handleSubmit)