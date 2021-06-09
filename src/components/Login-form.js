import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import styles from "../styles/modules/forms.module.scss"
import signIn from "../services/sing-in";
import isValidEmail from "../verifiers/is-valid-email";
import isValidPassword from "../verifiers/is-valid-password";
import Input from "./Input";
import Button from "./Button";
import stylesInput from "../styles/modules/input.module.scss"
import stylesButton from "../styles/modules/button.module.scss"


export default function LogInForm() {

	const handleSubmit = (data) => {
		signIn(data)
	};

	return (
		<div className={styles.formsLogIn}>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}

				onSubmit={handleSubmit}
			>

				{({ values, errors, touched, isValidating, handleSubmit, dirty }) => (
					<Form>
						<div className={`${stylesInput.inputWrap} ${stylesInput.emailWrap}`}>
							<Field
								type="email"
								placeholder="Email"
								name="email"
								className={stylesInput.email}
								validate={isValidEmail}
							/>
							{errors.email && touched.email && <div>{errors.email}</div>}
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
							{errors.password && touched.password && <div>{errors.password}</div>}
						</div>


						<Button className={stylesButton.btn_sing_in} handleSubmit={handleSubmit} valid={isValidating} dirty={dirty}>Sign in</Button>
					</Form>
				)}

			</Formik>
		</div>
	);
}