import React from "react";
import Title from "./Title";
import style from "../styles/modules/container.module.scss"

export default function Container({ title, children }) {
	return (
		<div className={style.form_container}>
			<Title className={style.title}>{title}</Title>

			{children}
		</div>
	);
}

