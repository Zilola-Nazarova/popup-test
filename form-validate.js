function showMessage(input, message, type) {
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function validateEmail(input, lowerCaseMsg) {
	const emailRegex = /^[^A-Z\s]+\.[^A-Z\s]+$/;
	const email = input.value.trim();

	if (!emailRegex.test(email)) {
		return showError(input, lowerCaseMsg);
	}
	return true;
}

const form = document.querySelector("#send-message");
const EMAIL_UPPERCASE = "Please enter email address in lowercase format";


form.addEventListener("submit", function (event) {
	event.preventDefault();
	let emailValid = validateEmail(form.elements["user-email"], EMAIL_UPPERCASE);
	if (emailValid) {
		form.submit();
	}
});

