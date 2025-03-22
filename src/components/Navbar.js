import React from "react";
import "../StyleFiles/Navbar.css";

const Navbar = (props) => {

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
				<div className="navbar-brand" style={{ cursor: "pointer" }}>
                        {props.title}
                    </div>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
							<button className="nav-link active btn btn-link" >
                                    Home
                                </button>
							</li>
							<li className="nav-item">
							<button className="nav-link btn btn-link">
                                    About
                                </button>
							</li>
						</ul>
						<form className="d-flex" role="search">
							<div className="form-check form-switch d-flex flex-column mx-3">
								<input
									className="form-check-input upCont"
									type="checkbox"
									role="switch"
									id="flexSwitchCheckDefault"
									onChange={() => {
										props.setDarkMode(!props.darkMode);
									}}
									checked={props.darkMode}
								/>
								<label
									className="form-check-label text-white lwrCont"
									htmlFor="flexSwitchCheckDefault"
								>
									{props.darkMode ? "Dark" : "Light"}
								</label>
							</div>
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn-outline-success" type="submit">
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
