import React, { useState, useEffect } from "react";
import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

const App = () => {
	//#region UseStates
	const [alert, setalert] = useState(null);
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem("darkMode") === "true"
	);
	//#endregion

	//#region useEffect
	useEffect(() => {
		if (darkMode) {
			document.body.classList.add("dark-mode");
		} else {
			document.body.classList.remove("dark-mode");
		}
		localStorage.setItem("darkMode", darkMode);
	}, [darkMode]);
	//#endregion

	//#region Methods
	const showAlert = (message, type) => {
		setalert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setalert(null);
		}, 3000);
	};
	//#endregion

	return (
		<>
			<Navbar
				title={"TestUtil"}
				darkMode={darkMode}
				setDarkMode={setDarkMode}
			/>
			<Alert alert={alert} />
			<div className="container my-3">
				
				<TextForm showAlert={showAlert} darkMode={darkMode} />
			</div>
		</>
	);
};

export default App;
