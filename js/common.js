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

// document
// 	.getElementById('open-modal-btn4')
// 	.addEventListener('click', function () {
// 		document.getElementById('my-modal').classList.add('open')
// 	})

// document
// 	.getElementById('open-modal-btn5')
// 	.addEventListener('click', function () {
// 		document.getElementById('my-modal').classList.add('open')
// 	})

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

gsap.registerPlugin(ScrollTrigger)

const boxes = gsap.utils.toArray('.work__truck')

if (window.matchMedia('(min-width: 1000px)').matches) {
	boxes.forEach((box, i) => {
		gsap.to(box, {
			scrollTrigger: {
				trigger: box,
				scrub: true,
				start: 'top center+=200',
			},
			x: 1100,
		})
	})
} else if (window.matchMedia('(max-width: 560px)').matches) {
	boxes.forEach((box, i) => {
		gsap.to(box, {
			scrollTrigger: {
				trigger: box,
				scrub: true,
				start: 'top center+=200',
			},
			y: 450,
		})
	})
}

// var swiper = new Swiper('.mySwiper-rev', {
// 	slidesPerView: checkScreenSize(),
// })

// function checkScreenSize() {
// 	if (window.matchMedia('(max-width: 576px)').matches) {
// 		return 1.6
// 	} else if (window.matchMedia('(max-width: 769px)').matches) {
// 		return 3.5
// 	} else if (window.matchMedia('(max-width: 1000px)').matches) {
// 		return 4
// 	} else if (window.matchMedia('(max-width: 1200px)').matches) {
// 		return 5
// 	} else {
// 		return 3.5 // Значение по умолчанию
// 	}
// }

if (window.matchMedia('(max-width: 500px)').matches) {
	var swiper = new Swiper('.mySwiper-rev', {
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	})
} else {
	var swiper = new Swiper('.mySwiper-rev', {
		slidesPerView: 2.8,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	})
}

window.addEventListener('resize', function () {
	swiper.params.slidesPerView = checkScreenSize()
	swiper.update()
})
