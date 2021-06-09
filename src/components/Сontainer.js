import React from "react";
import Title from "./Title";
import style from "../styles/modules/container.module.scss"

const Container = ({ title, children }) => (
	<div className={style.form_container}>
		<Title className={style.title}>{title}</Title>
		{children}
	</div>
);

export default Container;
