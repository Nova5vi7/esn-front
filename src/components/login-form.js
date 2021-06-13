import React from "react";
import { Formik, Form, Field } from "formik";
import styles from "../styles/modules/forms.module.scss"
import signIn from "../services/sing-in";
import isValidEmail from "../verifiers/is-valid-email";
import isValidPassword from "../verifiers/is-valid-password";
import Button from "./button";
import Input from "./input";
import stylesInput from "../styles/modules/input.module.scss"
import stylesButton from "../styles/modules/button.module.scss"


const LogInForm = () => {

	const handleSubmit = async (data) => {
		await signUp(data)
	};

	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}

			onSubmit={handleSubmit}
		>

			{({ values, errors, touched, isValidating, handleSubmit, dirty }) => (
				<Form className={styles.formsLogIn}>
					<div className={`${stylesInput.inputWrap} ${stylesInput.emailWrap}`}>
						<Field
							type="email"
							placeholder="Email"
							name="email"
							className={stylesInput.email}
							validate={isValidEmail}
							component={Input}

						/>
					</div>

					<div className={`${stylesInput.inputWrap} ${stylesInput.passwordWrap}`}>
						<Field
							type="password"
							placeholder="Password"
							name="password"
							className={stylesInput.password}
							value={values.password}
							validate={isValidPassword}
							component={Input}

						/>
					</div>

					<Button className={stylesButton.btn_sing_in} handleSubmit={handleSubmit} valid={isValidating} dirty={dirty}>Sign in</Button>
				</Form>
			)}

		</Formik>
	);
}

export default LogInForm;
