import React from "react";
import ForgotPas from "../components/forgot-password-form"
import Container from "../components/container"
import Link from "../components/link"



const ForgotPass = () => {


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

export default ForgotPass
