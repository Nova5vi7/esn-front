import React from "react";
import { Field } from "formik";


const Input = ({ value, type, placeholder, inputName, className, classInputWrap }) => {
	return (
		<div className={classInputWrap}>
			<>
				<Field
					type={type}
					value={value}
					id={inputName}
					className={className}
					placeholder={placeholder}
				/>
			</>
		</div>
	);
}

export default Input;
