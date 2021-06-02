import React from "react";
import ForgotPas from "../components/Forgot-password-form"
import Container from "../components/Сontainer"
import Link from "../components/Link"



export default function ForgotPass() {


	return (
		<Container title="Get on board">
			<ForgotPas />
			<Link
				text="New here ?"
				linkText="Sing up"
				linkHrf="/sing-up"
				className="links-log"
			/>
		</Container>
	)
}