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

// popup

document.addEventListener("DOMContentLoaded", function () {
	var popupForm = document.getElementById("popup-form")
	var openPopupBtn = document.getElementById("open-popup-btn")
	var closeBtn = document.querySelector(".close-btn")

	// Open the popup form
	openPopupBtn.addEventListener("click", function () {
		popupForm.style.display = "flex"
	})

	// Close the popup form
	closeBtn.addEventListener("click", function () {
		popupForm.style.display = "none"
	})

	// Close the popup form when clicking outside of it
	window.addEventListener("click", function (event) {
		if (event.target == popupForm) {
			popupForm.style.display = "none"
		}
	})
})

// form submission

function submitForm(name, email, phone, message) {
	Email.send({
		SecureToken: "e30b6797-a913-48bb-939f-4508387eb3b8", // setup and add clients token from smtpjs
		To: "amarpakhare30@gmail.com", // Add clients email here	(should be same as the token email)
		From: "amarpakhare30@gmail.com", // Add clients email here	(should be same as the token email)
		Subject: "New contact form submission from " + name,
		Body:
			"Name: " +
			name +
			"<br>Email: " +
			email +
			"<br>Phone: " +
			phone +
			"<br>Message: " +
			message,
	})
		.then((message) => alert("Thank you! Your message has been sent."))
		.catch((error) =>
			alert(
				"Oops! Something went wrong and we couldn't send your message. Please try again later."
			)
		)
}

document
	.getElementById("contact-form")
	.addEventListener("submit", function (event) {
		event.preventDefault()
		var name = document.getElementById("name").value
		var email = document.getElementById("email").value
		var phone = document.getElementById("phone").value
		var message = document.getElementById("message").value
		submitForm(name, email, phone, message)
	})

// 2nd form submission
document
	.getElementById("popup-form")
	.addEventListener("submit", function (event) {
		event.preventDefault()
		var name = document.getElementById("name").value
		var email = document.getElementById("email").value
		var phone = document.getElementById("phone").value
		var message = document.getElementById("message").value
		submitForm(name, email, phone, message)
	})
