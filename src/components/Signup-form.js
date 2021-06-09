import React, { useState } from "react";
import styles from "../styles/modules/forms.module.scss"
import signUp from "../services/sign-up"
import { Formik, Form, Field } from "formik";
import isValidName from "../verifiers/is-valid-name";
import isValidEmail from "../verifiers/is-valid-email";
import isValidPassword from "../verifiers/is-valid-password";
import Input from "./Input";
import Button from "./Button";
import stylesInput from "../styles/modules/input.module.scss"
import stylesButton from "../styles/modules/button.module.scss"


export default function SignUpForm() {

	const handleSubmit = (data) => {
		signUp(data)
	};

	return (
		<div className={styles.formsSingUp} >
			<Formik
				initialValues={{//начальное значение полей ввода
					name: '',
					email: '',
					password: '',
				}}

				onSubmit={handleSubmit} //метод вызывающий функцию при отправке формы
			>
				{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
					<Form>
						<div className={`${stylesInput.inputWrap} ${stylesInput.nameWrap}`}>
							<Field
								type="name"
								placeholder="Name"
								name="name"
								className={stylesInput.name}
								validate={isValidName}
							/>
							{errors.name && touched.name && <div className={stylesInput.error}>{errors.name}</div>}
						</div>

						<div className={`${stylesInput.inputWrap} ${stylesInput.emailWrap}`}>
							<Field
								type="email"
								placeholder="Email"
								name="email"
								className={stylesInput.email}
								validate={isValidEmail}
							/>
							{errors.email && touched.email && <div className={stylesInput.error}>{errors.email}</div>}
						</div>

						<div className={`${stylesInput.inputWrap} ${stylesInput.passwordWrap}`}>
							<Field
								type="password"
								placeholder="Password"
								name="password"
								className={stylesInput.password}
								value={values.password}
								validate={isValidPassword}
							/>
							{errors.password && touched.password && <div className={stylesInput.error}>{errors.password}</div>}
						</div>

						<Button className={stylesButton.btn_sing_in} handleSubmit={handleSubmit} valid={isValid} dirty={dirty}>Sign up</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
}