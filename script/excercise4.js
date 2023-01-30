const addWordInput = document.querySelector('#add-word-input')
const addWordButton = document.querySelector('#add-word-button')
const wordList = document.querySelector('.word-list')




addWordButton.addEventListener('click', event => {

	word = addWordInput.value
	console.log(word);
	let newLi = document.createElement('li')
	newLi.innerText = word

	wordList.append(newLi)
	addWordInput.value = ''

})