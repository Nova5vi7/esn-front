import React from "react";
import FormContainer from "../components/form-container"
import SignUpForm from "../components/signup-form"
import Container from "../components/container"

const SingUp = () => (
	<FormContainer>
		<Container title="Sing Up"
			text="Already have an account?"
			linkText="Sing In"
			linkHrf="/sing-in">

			<SignUpForm />

		</Container>
	</FormContainer>

)

export default SingUp;
