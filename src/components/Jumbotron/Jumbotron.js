//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>Clicky-Bird Challenge!</h1>
		<h2>Select each bird only once | 2 clicks on the same bird - you lose! | 12 birds in 12 clicks - you win!</h2>
	</header>
);
export default Jumbotron;