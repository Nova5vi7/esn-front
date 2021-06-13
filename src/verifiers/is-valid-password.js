import { VARIFIERS_PASSWORD } from "../constant/varifiers"

const isValidPassword = (passwordValue) => {
	return Boolean(
		!passwordValue.match(VARIFIERS_PASSWORD)
	);
};

const validatePassword = (value) => {
	let error;

	if (!value) {
		error = "Required";
	} else if (isValidPassword(value)) {
		error = "Invalid password";
	}

	return error;
}

export default validatePassword;
