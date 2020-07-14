import React from "react";
import { Button } from "reactstrap";

class ButtonInit extends React.Component {
	render() {
		return (
			<Button className="btn btn-info mt-4" onClick={this.props.handleClick}>
				Inicio
			</Button>
		);
	}
}

export default ButtonInit;
