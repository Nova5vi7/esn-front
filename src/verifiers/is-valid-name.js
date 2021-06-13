import { VARIFIERS_NAME } from "../constant/varifiers";

const isValidName = (nameValue) => {
	return Boolean(
		!nameValue.match(VARIFIERS_NAME)
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
