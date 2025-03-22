import React, { useState } from "react";

function TextForm(props) {
	//#region Default Variables
	const defaultText = "Enter Text Here";
	const defaultDropDownText = "Pick An Option";
	const defaultOptions = ["UpperCase", "LowerCase", "DownloadToTxt"];
	//#endregion

	//#region UseStates
	const [text, setText] = useState(defaultText);
	const [dropdownOptions, setdropdownOptions] = useState("");
	//#endregion

	//#region Submit Button
	const handleSubmitClick = () => {
		if (text === defaultText) {
			return;
		} else {
			if (dropdownOptions === defaultOptions[0]) {
				handleUpClick();
			} else if (dropdownOptions === defaultOptions[1]) {
				handleLoClick();
			} else {
				downloadTextAsFile(text);
			}
		}
	};
	//#endregion

	//#region Operation Functions

	const handleUpClick = () => {
		if (text != null && text !== undefined && text !== "" && text !== "") {
			setText(text.trim().toUpperCase());
			props.showAlert("Converted To upperCase","Success");
		}
	};

	const handleLoClick = () => {
		if (text != null && text !== undefined && text !== "" && text !== "") {
			setText(text.trim().toLowerCase());
			props.showAlert("Converted To LowerCase","Success");

		}
	};

	const downloadTextAsFile = () => {
		if (
			!text ||
			text === defaultText ||
			text.trim() === "" ||
			text.trim() === ""
		) {
			setTimeout(() => {
				window.alert("File cannot be downloaded! Please enter valid text.");
			}, 100);
			return;
		}

		const blob = new Blob([text], { type: "text/plain" });
		const link = document.createElement("a");
		link.href = URL.createObjectURL(blob);
		link.download = "textfile.txt";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleClearClick = () => {
		setText(defaultText);
	};

	const getTextStats = (inputText) => ({
		wordCount:
			inputText === defaultText
				? 0
				: inputText.trim().split(/\s+/).filter(Boolean).length,
		charCount: inputText === defaultText ? 0 : inputText.length,
	});

	//#endregion

	//#region Extra HandleOnChange Functions

	const handleOnChange = (event) => {
		setText(event.target.value);
	};

	const handleBlur = () => {
		if (text.trim() === "") {
			setText(defaultText);
		}
	};

	const handleFocus = () => {
		if (text === defaultText) {
			setText("");
		}
	};

	//#endregion

	return (
		<div className="border">
			<div className="container">
				<h1>{props.heading}</h1>
				<div className="mb-3">
					<textarea
						className="form-control"
						id="myBox"
						rows="8"
						value={text}
						onChange={handleOnChange}
						onBlur={handleBlur}
						onFocus={handleFocus}
					></textarea>
				</div>
				<div className="d-flex justify-content-between">
					<button className="btn btn-primary mx-2" onClick={handleClearClick}>
						Clear Text
					</button>
					<div className="d-flex">
						<div className="dropdown">
							<button
								className="btn btn-secondary dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								{dropdownOptions === undefined ||
								dropdownOptions === null ||
								dropdownOptions === "" ||
								dropdownOptions === "" ||
								text === "" ||
								text === "" ||
								text === undefined ||
								text === null ||
								text === defaultText
									? defaultDropDownText
									: dropdownOptions}
							</button>
							<ul className="dropdown-menu">
								{defaultOptions?.map((option, index) => (
									<li key={index}>
										<button
											className="dropdown-item"
											onClick={(e) => {
												e.preventDefault();
												setdropdownOptions(option);
											}}
										>
											{option}
										</button>
									</li>
								))}
							</ul>
						</div>
						<button
							className="btn btn-primary mx-2"
							onClick={handleSubmitClick}
						>
							Submit
						</button>
					</div>
				</div>
			</div>
			<div className="container my-3">
				<h2>Your text summary</h2>
				<p>
					<b>{getTextStats(text).wordCount}</b> Words and{" "}
					<b>{getTextStats(text).charCount}</b> Characters
				</p>
				<p>
					<b>{0.008 * getTextStats(text).wordCount}</b> Minutes Read
				</p>
				<h2>Preview</h2>
				<p>{text === defaultText ? "" : text} </p>
			</div>
		</div>
	);
}

export default TextForm;
