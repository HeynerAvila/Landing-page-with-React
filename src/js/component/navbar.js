import React from "react";

export function NavBar() {
	return (
		<div>
			<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<a className="navbar-brand" href="#">
						Landing page with React
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarText"
						aria-controls="navbarText"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarText">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home{" "}
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Services
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
