import React from "react";

const currentYear = new Date().getFullYear();

export function Footer() {
	return (
		<div className="bg-dark text-center text-white">
			<p className="m-0 p-5">
				Copyright &copy; Your Website {currentYear}
			</p>
		</div>
	);
}
