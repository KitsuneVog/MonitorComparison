// let display_1 = document.getElementById('display-1')
// let display_2 = document.getElementById('display-2')



function myLoop() {
	setTimeout(function() {
		let size_0 = document.getElementById('size-0').value
		let size_1 = document.getElementById('size-1').value
		let size_2 = document.getElementById('size-2').value

		document.body.style.cssText += `--size: ${size_1 / size_2 - 1}`
		document.body.style.cssText += `--size-0: ${size_0}px`

		myLoop();
	}, 300)
}

myLoop();