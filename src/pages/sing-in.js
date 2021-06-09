import React from "react";
import FormContainer from "../components/Form-container"
import LogInForm from "../components/Login-form"
import Container from "../components/Сontainer"
import Link from "../components/Link"



export default function SingIn() {


	return (
		<FormContainer>
			<Container title="Sing In">
				<LogInForm />
				<Link
					text="Don’t have anu account yet?"
					linkText="Sing Up"
					linkHrf="/sing-up"
					className="links-log"
				/>
			</Container>
		</FormContainer>

	)
}