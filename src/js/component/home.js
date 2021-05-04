import React, { Fragment } from "react";
import Modal from "./modal.jsx";
import Table from "./table.jsx";

import { useState } from "react";

//create your first component
export function Home() {
	return (
		<Fragment>
			<div className="container">
				<Modal />
				<Table change="" />
			</div>
		</Fragment>
	);
}
