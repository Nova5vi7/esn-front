//Ro = true
//ro = true
//r = false
//Ro1 = false

const isValidName = (nameValue) => {
	return Boolean(
		!nameValue.match(/^(?=[a-zA-Z._]{1,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/)
	);
};

const validateName = (value) => {
	let error;

	if (!value) {
		error = "Required";
	} else if (isValidName(value)) {
		error = "Invalid name";
	}

	return error;
}

export default validateName;
