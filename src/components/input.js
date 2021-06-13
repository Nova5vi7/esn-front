import React from "react";
import stylesInput from "../styles/modules/input.module.scss"


const Input = ({ field, type, placeholder, form: { touched, errors } }) => {
	return (
		<>
			<input
				type={type}
				placeholder={placeholder}
				{...field}
			/>
			{errors[field.name] && touched[field.name] && <div className={stylesInput.error}>{errors[field.name]}</div>}
		</>
	);
}

export default Input;
