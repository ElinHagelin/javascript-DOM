let cardSection = document.querySelector('.cards')


for (let divCounter = 1; divCounter <= 5; divCounter++) {
	let divElement = document.createElement('div')
	divElement.innerText = divCounter

	if (divCounter == 2) {
		divElement.classList.add('festive')
	}

	cardSection.append(divElement)
}

