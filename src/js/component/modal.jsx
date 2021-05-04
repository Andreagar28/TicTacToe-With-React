import React from "react";
import { useState } from "react";

const Modal = () => {
	const [opened, setOpened] = useState(false);

	return opened ? (
		<div className="mainmenu">
			<div className="titles">
				<ul>
					<h1>TicTacToe in React.js</h1>

					<h2>Pick A Weapon</h2>

					<p>CHOSE YOUR WEAPON!</p>
				</ul>
			</div>

			<form className="inputs">
				<input
					type="text"
					id="player1"
					name="player1"
					placeholder="Player 1 username"></input>

				<input
					type="text"
					id="player2"
					name="player2"
					placeholder="Player 2 username"></input>
			</form>

			<div className="buttons">
				<button
					className="Xbutton"
					type="button"
					onClick={() => setOpened(false)}>
					<i className="fas fa-times"></i>
				</button>
				<button
					className="Obutton"
					type="button"
					onClick={() => setOpened(false)}>
					<i className="far fa-circle"></i>
				</button>
			</div>
		</div>
	) : (
		<button
			className="startover"
			type="button"
			onClick={() => setOpened(true)}>
			Start Over!
		</button>
	);
};

export default Modal;
