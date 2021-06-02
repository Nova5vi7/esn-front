import React, { useState } from "react";
import styles from "../styles/modules/forms.module.scss"
import { Formik } from "formik";
import Input from "./Input";
import Button from "./Button";
import stylesInput from "../styles/modules/input.module.scss"
import stylesButton from "../styles/modules/button.module.scss"

export default function SignUpForm() {

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className={styles.formsSingUp} onSubmit={handleSubmit}>
			<Formik
				initialValues={{//начальное значение полей ввода
					name: '',
					email: '',
					password: '',
				}}

				onSubmit={(values) => { console.log(values) }} //метод вызывающий функцию при отправке формы
			>
				{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
					<>
						<Input
							type="name"
							placeholder="Name"
							inputName="name"
							className={stylesInput.name}
							classInputWrap={`${stylesInput.inputWrap} ${stylesInput.nameWrap}`}
							value={values.name}
							handleBlur={handleBlur}
							handleChange={handleChange}
						/>

						<Input
							type="email"
							placeholder="Email"
							inputName="email"
							className={stylesInput.email}
							classInputWrap={`${stylesInput.inputWrap} ${stylesInput.emailWrap}`}
							value={values.email}
							handleBlur={handleBlur}
							handleChange={handleChange}
						/>

						<Input
							type="password"
							placeholder="Password"
							inputName="password"
							className={stylesInput.password}
							classInputWrap={`${stylesInput.inputWrap} ${stylesInput.passwordWrap}`}
							value={values.password}
							handleBlur={handleBlur}
							handleChange={handleChange}
						/>

						<Button className={stylesButton.btn_sing_in} handleSubmit={handleSubmit} valid={isValid} dirty={dirty}>Sign Up</Button>
					</>
				)}
			</Formik>
		</div>
	);
}