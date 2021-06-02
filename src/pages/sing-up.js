import React from "react";
import SignUpForm from "../components/Signup-form"
import Container from "../components/Сontainer"
import Link from "../components/Link"



export default function SingUp() {


	return (
		<Container title="Get on board">
			<SignUpForm />
			<Link
				text="Already have an account?"
				linkText="Sing in"
				linkHrf="/sing-in"
				className="links-log"
			/>
		</Container>
	)
}