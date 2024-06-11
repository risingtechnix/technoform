// // let lastScrollTop = 0;
// // const header = document.querySelector('.header');

// // window.addEventListener('scroll', () => {
// //     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// //     if (scrollTop > lastScrollTop) {
// //         // Scrolling down
// //         header.style.top = '-80px'; // Adjust according to the header height
// //     } else {
// //         // Scrolling up
// //         header.style.top = '0';
// //     }
// //     lastScrollTop = scrollTop;
// // });

// document.addEventListener("DOMContentLoaded", function() {
//   const slider = document.querySelector(".slider");
//   const slides = slider.children;
//   const slideWidth = slides[0].offsetWidth;
//   let counter = 1;

//   setInterval(() => {
//     slider.style.transform = `translateX(${-counter * slideWidth}px)`;
//     counter++;
//     if (counter === slides.length) {
//       counter = 0;
//       setTimeout(() => {
//         slider.style.transition = "none";
//         slider.style.transform = "translateX(0)";
//       }, 1000);
//     } else {
//       slider.style.transition = "transform 0.5s ease";
//     }
//   }, 3000);
// });

document.addEventListener("DOMContentLoaded", function () {
	const slider = document.querySelector(".slider")
	const prevButton = document.querySelector(".prev-button")
	const nextButton = document.querySelector(".next-button")
	const images = document.querySelectorAll(".slider img")
	let currentIndex = 0

	function showImage(index) {
		slider.style.transform = `translateX(-${index * 100}%)`
	}

	prevButton.addEventListener("click", function () {
		currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1
		showImage(currentIndex)
	})

	nextButton.addEventListener("click", function () {
		currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0
		showImage(currentIndex)
	})

	setInterval(function () {
		nextButton.click()
	}, 3000) // Automatically slide every 3 seconds
})

function openModal(image) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modal-image");
    var modalDescription = document.getElementById("modal-description");

    modal.style.display = "flex";
    modalImage.src = image.src;
    modalDescription.innerHTML = image.alt;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
