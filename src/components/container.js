import React from "react";
import Title from "./title";
import A from "../components/link-a"
import style from "../styles/modules/container.module.scss"

const Container = ({ title, children, text, linkText, linkHrf }) => (
	<div className={style.form_container}>
		<Title className={style.title}>{title}</Title>
		{children}
		<div className={style.link_wrap}>
			<p className="links-text">{text}</p>
			<A
				linkText={linkText}
				linkHrf={linkHrf}
			/>
		</div>
	</div>
);

export default Container;
