import React, { useState } from "react";
// import styles from "../styles/modules/input.module.scss"
import { Field } from "formik";


export default function Input({ value, type, placeholder, inputName, className, classInputWrap }) {

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