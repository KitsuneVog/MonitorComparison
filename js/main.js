let screenWidth = screen.width
let screenHeight = screen.height

console.log(screenWidth + "x" + screenHeight);

let i = true

function myLoop() {
	setTimeout(function() {
		let diagonal_0 = document.getElementById('diagonal_0').value
		let diagonal_1 = document.getElementById('diagonal_1').value

		document.getElementById('display-1_text').innerHTML = diagonal_0
		document.getElementById('display-2_text').innerHTML = diagonal_1

		let ratio = diagonal_0 / diagonal_1 - 1

		document.body.style.cssText += `--size: ${ratio}`
		document.body.style.cssText += `--size-0: ${screenWidth}px`

		let n1 = screenWidth - screenWidth * ratio.toFixed(3)
		let n2 = screenHeight - screenHeight * ratio.toFixed(3)
		let resolution = n1 + " x " + n2

		if (i) {
			window.scrollTo({ top: 1000, behavior: 'smooth' });
			console.log(resolution);
			i = false
		}


		myLoop();
	}, 100)
}

myLoop();



// a^2 + b^2 == c^2

