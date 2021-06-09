//Keni123men = true
//Keni123 = false
//Keni123n = true
//Kenimenkeni = false

const isValidPassword = (passwordValue) => {
	return Boolean(
		!passwordValue.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
	);
};

export default function validatePassword(value) {
	let error;

	if (!value) {
		error = "Required";
	} else if (isValidPassword(value)) {
		error = "Invalid password";
	}

	return error;
}