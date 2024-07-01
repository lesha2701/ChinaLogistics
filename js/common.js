// $('body').hide()
var swiper = new Swiper('.mySwiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

document
	.getElementById('open-modal-btn1')
	.addEventListener('click', function () {
		document.getElementById('my-modal').classList.add('open')
	})

document
	.getElementById('open-modal-btn2')
	.addEventListener('click', function () {
		document.getElementById('my-modal').classList.add('open')
	})

document
	.getElementById('open-modal-btn3')
	.addEventListener('click', function () {
		document.getElementById('my-modal').classList.add('open')
	})

document
	.getElementById('open-modal-btn4')
	.addEventListener('click', function () {
		document.getElementById('my-modal').classList.add('open')
	})

document
	.getElementById('open-modal-btn5')
	.addEventListener('click', function () {
		document.getElementById('my-modal').classList.add('open')
	})

// Закрыть модальное окно
document
	.getElementById('close-my-modal-btn')
	.addEventListener('click', function () {
		document.getElementById('my-modal').classList.remove('open')
	})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', e => {
	if (e.key === 'Escape') {
		document.getElementById('my-modal').classList.remove('open')
	}
})
