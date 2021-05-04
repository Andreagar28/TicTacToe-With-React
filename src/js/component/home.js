import React, { Fragment } from "react";
import Modal from "./modal.jsx";
import Table from "./table.jsx";

//create your first component
export function Home() {
	return (
		<Fragment>
			<Modal />
			<Table change="x" "o" "null" />
		</Fragment>
	);
}
