let increaseButton = document.querySelector('.increase-button')
let onButton = document.querySelector('.on-button')
let clickTextCount = document.querySelector('p')

let clicks = 0

increaseButton.addEventListener('click', event => {
	console.log('You clicked the button');
	clicks = clicks + 1
	clickTextCount.innerText = `Click count: ${clicks}`

})

onButton.addEventListener('click', event => {
	if (onButton.innerText == 'On') {
		onButton.innerText = 'Off'
	}
	else {
		onButton.innerText = 'On'
	}
})