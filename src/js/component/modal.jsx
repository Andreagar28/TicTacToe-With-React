import React from "react";
import { useState } from "react";

const Modal = () => {
	const [opened, setOpened] = useState(false);

	return opened ? (
		<div>
			<h1>Chose Your Weapon!</h1>
			<button type="button" onClick={() => setOpened(false)}>
				Close
			</button>
		</div>
	) : (
		<button type="button" onClick={() => setOpened(true)}>
			Open
		</button>
	);
};

export default Modal;
