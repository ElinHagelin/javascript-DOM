const nameInput = document.querySelector('#name-input')
const colorInput = document.querySelector('#color-input')
const inputButton = document.querySelector('button')
const nameTagBackground = document.querySelector('.name-tag')
const nameTag = document.querySelector('.name')



inputButton.addEventListener('click', () => {
	let name = nameInput.value
	let color = colorInput.value

	nameTag.innerText = name
	nameTagBackground.style = `background-color: ${color}`
})