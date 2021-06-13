import React from "react";
import Link from 'next/link'

const LinkA = ({ linkText, linkHrf }) => {
	return (
		<Link href={linkHrf}>
			<a>{linkText}</a>
		</Link>
	);
}

export default LinkA;
