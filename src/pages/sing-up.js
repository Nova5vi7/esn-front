import React from "react";
import FormContainer from "../components/Form-container"
import SignUpForm from "../components/Signup-form"
import Container from "../components/Сontainer"
import Link from "../components/Link"

const SingUp = () => (
	<FormContainer>
		<Container title="Sing Up">
			<SignUpForm />
			<Link
				text="Already have an account?"
				linkText="Sing In"
				linkHrf="/sing-in"
				className="links-log"
			/>
		</Container>
	</FormContainer>

)

export default SingUp;
