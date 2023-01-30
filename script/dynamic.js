let body = document.querySelector('body')
let countButton = document.querySelector('.count-button')
let clickCounter = document.querySelector('.click-counter')

appendChild(document.createElement('p'))

let clicks = 0

countButton.addEventListener('click', event => {
	console.log('You clicked the button');
	clicks = clicks + 1
	clickCounter.innerText = `Click count: ${clicks}`
})