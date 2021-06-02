import React from "react";
import LogInForm from "../components/Login-form"
import Container from "../components/Сontainer"
import Link from "../components/Link"



export default function SingIn() {


	return (
		<Container title="Get on board">
			<LogInForm />
			<Link
				text="Hello there, welcome back"
				linkText="Sing Up"
				linkHrf="/sing-up"
				className="links-log"
			/>
		</Container>
	)
}