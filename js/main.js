let screenWidth = screen.width
let screenHeight = screen.height

console.log(screenWidth + "x" + screenHeight);

let i = true

function myLoop() {
	setTimeout(function() {
		let diagonal_0 = document.getElementById('diagonal_0').value
		let diagonal_1 = document.getElementById('diagonal_1').value
		let attitude = document.getElementById('attitude').value

		document.getElementById('display-1_text').innerHTML = diagonal_0
		document.getElementById('display-2_text').innerHTML = diagonal_1

		let ratio = diagonal_0 / diagonal_1 - 1

		document.body.style.cssText += `--size: ${ratio}`
		document.body.style.cssText += `--size-0: ${screenWidth}px`

		if (i) {
			let l = attitude.split(" ")
			a = l[0]
			b = l[1]
			
			let x = (diagonal_0 ** 2 / (a * 2 + b * 2)) ** 0.5

			let width = a * x
			let height = b * x

			console.log(width, height);

			x = (diagonal_1 ** 2 / (a * 2 + b * 2)) ** 0.5

			width = a * x
			height = b * x

			console.log(width, height);

			i = false
		}
		
		myLoop();
	}, 100)
}

function scroll() {
  window.scrollTo({ top: 1000, behavior: 'smooth' });
}
setTimeout(scroll, 500);

myLoop();