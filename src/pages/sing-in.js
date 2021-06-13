import React from "react";
import FormContainer from "../components/form-container"
import LogInForm from "../components/login-form"
import Container from "../components/container"

const SingIn = () => (
	<FormContainer>
		<Container
			title="Sing In"
			text="Don’t have anu account yet?"
			linkText="Sing Up"
			linkHrf="/sing-up">

			<LogInForm />
		</Container>
	</FormContainer>
)

export default SingIn
