let screenWidth = screen.width
let screenHeight = screen.height

console.log(screenWidth + "x" + screenHeight);

let i = true

function myLoop() {
	setTimeout(function() {
		let diagonal_0 = document.getElementById('diagonal_0').value
		let diagonal_1 = document.getElementById('diagonal_1').value
		let attitude = document.getElementById('attitude').value

		let ratio = diagonal_1 * 100 / diagonal_0 / 100

		document.body.style.cssText += `--ratio: ${ratio}`
		document.body.style.cssText += `--Width: ${screenWidth}px`
		document.body.style.cssText += `--Height: ${screenHeight}px`

		let l = attitude.split(" ")
		a = l[0]
		b = l[1]
		
		let x = (diagonal_0 ** 2 / (a * 2 + b * 2)) ** 0.5

		let width_0 = (a * x).toFixed(1)
		let height_0 = (b * x).toFixed(1)

		console.log(width_0, height_0);

		x = (diagonal_1 ** 2 / (a * 2 + b * 2)) ** 0.5

		let width_1 = (a * x).toFixed(1)
		let height_1 = (b * x).toFixed(1)

		console.log(width_1, height_1);

		document.getElementById('display-1_text').innerHTML = diagonal_0 + '" ' + screenWidth + "x" + screenHeight + " размер:" + width_0 + "см " + height_0 + "см"
		document.getElementById('display-2_text').innerHTML = diagonal_1 + '" ' + " размер:" + width_1 + "см " + height_1 + "см"
		
		console.log(diagonal_0, diagonal_1);

		if (Number(diagonal_0) < Number(diagonal_1)) {
			console.log("!Основная диагональ меньше желаемой");
			document.getElementById('display-2_text').innerHTML = "!Основная диагональ меньше желаемой"
		}

		myLoop();
	}, 100)
}

function scroll() {
  window.scrollTo({ top: 1000, behavior: 'smooth' });
}
setTimeout(scroll, 500);

window.onresize = function(){ location.reload(); }

myLoop();