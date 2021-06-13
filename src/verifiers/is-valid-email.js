import { VARIFIERS_EMAIL } from "../constant/varifiers"

const isValidEmail = (emailValue) => {
	return Boolean(
		!emailValue.match(
			VARIFIERS_EMAIL
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
