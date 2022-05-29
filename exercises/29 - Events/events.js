// Listen on multiple items

const buyButtons = document.querySelectorAll('.buy')
console.log(buyButtons)

function buyItem() {
  console.log('You are buying a item')
}

buyButtons.forEach(button => button.addEventListener('click', buyItem))