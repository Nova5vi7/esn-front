import React, { useState } from "react";
import styles from "../styles/modules/input.module.scss"

export default function Input({ value, type, placeholder, inputName, className, classInputWrap, setValue, handleBlur, handleChange }) {
	const [inputActive, setInputActive] = useState(false);

	// const handleBlurTwo = handleBlur(() => {
	// 	{
	// 		setInputActive(false);
	// 		// setValue(e.currentTarget.value);
	// 	};
	// })

	// const handleFocus = () => {
	// 	setInputActive(true);
	// };

	// const handleChangeTwo = handleChange(() => {
	// 	setValue(e.currentTarget.value);
	// })

	// const labelNameClass = () => {
	// 	if (inputActive || value) {
	// 		return `${styles.label} ${styles.labelInactive}`;
	// 	} else {
	// 		return `${styles.label}`;
	// 	}
	// };

	return (
		<div className={classInputWrap}>
			{/* <label className={`${styles.label}`} htmlFor={inputName}>{placeholder}</label> */}
			<>
				<input
					type={type}
					value={value}
					id={inputName}
					className={className}
					onChange={handleChange}
					// onFocus={handleFocus}
					onBlur={handleBlur}
					placeholder={placeholder}
				/>
			</>
		</div>
	);
}