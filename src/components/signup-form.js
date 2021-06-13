import React from "react";
import styles from "../styles/modules/forms.module.scss"
import signUp from "../services/sign-up"
import { Formik, Form, Field } from "formik";
import isValidName from "../verifiers/is-valid-name";
import isValidEmail from "../verifiers/is-valid-email";
import isValidPassword from "../verifiers/is-valid-password";
import Button from "./button";
import Input from "./input";
import stylesInput from "../styles/modules/input.module.scss"
import stylesButton from "../styles/modules/button.module.scss"


const SignUpForm = () => {

	const handleSubmit = async (data) => {
		await signUp(data)
	};

	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				password: '',
			}}

			onSubmit={handleSubmit}
		>
			{({ values, errors, touched, isValid, handleSubmit, dirty }) => (
				<Form className={styles.formsSingUp}>
					<div className={`${stylesInput.inputWrap} ${stylesInput.nameWrap}`}>
						<Field
							type="name"
							placeholder="Name"
							name="name"
							className={stylesInput.name}
							validate={isValidName}
							component={Input}
						/>
					</div>

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

					<Button className={stylesButton.btn_sing_in} handleSubmit={handleSubmit} valid={isValid} dirty={dirty}>Sign up</Button>
				</Form>
			)}
		</Formik>
	);
}

export default SignUpForm;
