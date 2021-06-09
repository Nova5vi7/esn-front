import React from "react";
import styles from "../styles/modules/form-container.module.scss"
import Image from 'next/image'

// import logo from "../images/form-logo.png";


export default function FormContainer({ children }) {

	return (
		<div className={styles.formContainer}>
			<div className={styles.blockLeft}>
				<div className={styles.content}>
					<div className={styles.imgWrap}>
						<Image src="/images/form-logo.png" alt="Logo" width={284} height={284} />
					</div>
					<p className={styles.logoText}>PLATFORM</p>
				</div>
			</div>
			<div className={styles.blockRight}>{children}</div>
		</div>
	);
}