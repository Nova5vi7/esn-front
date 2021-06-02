import React from "react";
import Link from 'next/link'
import style from "../styles/modules/link.module.scss"

export default function Links({ text, linkText, linkHrf, className }) {
	return (
		<div className={style.link_wrap}>
			<p className="links-text">{text}</p>
			<Link href={linkHrf}>
				<a>{linkText}</a>
			</Link>
		</div>
	);
}