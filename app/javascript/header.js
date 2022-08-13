//* Open/close menu
burguer = document.querySelector('#burgerSqueeze')
burguer.addEventListener(
	'click',
	function () {
		burguer.classList.toggle('open')
	},
	false
)
