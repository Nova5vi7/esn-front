import React, { useState } from "react";
import { Formik } from "formik";
import styles from "../styles/modules/forms.module.scss"
import Input from "./Input";
import Button from "./Button";
import stylesInput from "../styles/modules/input.module.scss"
import stylesButton from "../styles/modules/button.module.scss"


export default function LogInForm() {

	return (
		<div className={styles.formsLogIn}>
			<Formik
				initialValues={{//начальное значение полей ввода
					email: '',
					password: '',
				}}

				onSubmit={(values) => { console.log(values) }} //метод вызывающий функцию при отправке формы
			>

				{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
					<>
						<Input
							type="email"
							placeholder="Email"
							inputName="email"
							className={stylesInput.email}
							classInputWrap={`${stylesInput.inputWrap} ${stylesInput.emailWrap}`}
							value={values.email}
							handleBlurTwo={handleBlur}
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

						<Button className={stylesButton.btn_sing_in} handleSubmit={handleSubmit} valid={isValid} dirty={dirty}>Sign In</Button>
					</>
				)}

			</Formik>
		</div>
	);
}

{/* <Input
					type="email"
					placeholder="E-mail"
					inputName="E-mail"
					className={stylesInput.email}
					classInputWrap={`${stylesInput.inputWrap} ${stylesInput.emailWrap}`}
					value={emailValue}
					setValue={setEmailValue}
				/>
	
				<Input
					type="password"
					placeholder="Password"
					inputName="Password"
					className={stylesInput.password}
					classInputWrap={`${stylesInput.inputWrap} ${stylesInput.passwordWrap}`}
					value={passwordValue}
					setValue={setPasswordValue}
				/>
	
				<Button className={stylesButton.btn_sing_in}>Sign In</Button> */}