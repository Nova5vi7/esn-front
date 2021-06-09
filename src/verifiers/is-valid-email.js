//test@robot.com = true
//test@robot.ru = true
//test@robot-ru = false

const isValidEmail = (emailValue) => {
	return Boolean(
		!emailValue.match(
			/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
		)
	);
};

const validateEmail = (value) => {
	let error;

	if (!value) {
		error = "Required";
	} else if (isValidEmail(value)) {
		error = "Invalid email address";
	}

	return error;
}

export default validateEmail;
