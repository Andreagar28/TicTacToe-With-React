import React from "react";
import { useState } from "react";
import { PropTypes } from "prop-types";

const Table = props => {
	const winningConditions = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9],
		[9, 5, 1],
		[7, 5, 3]
	];

	const styles = "table".concat("x");

	return <div className={styles}></div>;
};

export default Table;

Table.PropTypes = {
	change: PropTypes.string
};
