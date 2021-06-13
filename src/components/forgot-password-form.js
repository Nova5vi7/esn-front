import React from "react";
import { Formik } from "formik";
import styles from "../styles/modules/forms.module.scss"
import Input from "./input";
import Button from "./button";
import stylesInput from "../styles/modules/input.module.scss"
import stylesButton from "../styles/modules/button.module.scss"


const LogInForm = ({ onSubmit }) => {

	return (
		<div className={styles.formsLogIn}>
			<Formik
				initialValues={{//начальное значение полей ввода
					email: '',
				}}

				onSubmit={onSubmit} //метод вызывающий функцию при отправке формы
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

						<Button className={stylesButton.btn_sing_in} handleSubmit={handleSubmit} valid={isValid} dirty={dirty}>Reset</Button>
					</>
				)}

			</Formik>
		</div>
	);
}

export default LogInForm
