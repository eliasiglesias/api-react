import React from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import { getUsers } from "./async/api-call-users";
import { getUser } from "./async/api-get-user";
import UsersTable from "./components/UsersTable";
import UserDetail from "./components/UserDetail";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import ButtonInit from "./components/ButtonInit";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			isLoaded: false,
			error: null,
			user: {},
			showUser: false,
		};

		// Este enlace es necesario para hacer que `this` funcione en el callback
		this.handleClick = this.handleClick.bind(this);

		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	async componentDidMount() {
		const usersList = await getUsers();
		this.setState({ ...this.state, users: usersList, isLoaded: true });
	}

	// Pendiente de preguntar
	componentWillUnmount() {
		console.log("cuando es necesario este caso");
	}

	async handleClick(id) {
		const userData = await getUser(id);
		this.setState({ ...this.state, user: userData, showUser: true });
	}

	handleButtonClick() {
		this.setState({ ...this.state, showUser: false });
	}

	render() {
		if (this.state.showUser) {
			return (
				<div className="App">
					<Container>
						<Row>
							<ButtonInit handleClick={this.handleButtonClick} />
						</Row>
						<Row className="d-flex justify-content-center">
							<Col xs="6">
								<UsersTable
									users={this.state.users}
									handleClick={this.handleClick}
								/>
							</Col>
						</Row>
					</Container>

					<Container>
						<Row className="d-flex justify-content-center">
							<Col xs="6">
								<UserDetail user={this.state.user} />
							</Col>
						</Row>
					</Container>
				</div>
			);
		}
		if (this.state.isLoaded) {
			return (
				<div className="App">
					<Container>
						<Row>
							<ButtonInit handleClick={this.handleButtonClick} />
						</Row>
						<Row className="d-flex justify-content-center">
							<Col xs="6">
								<UsersTable
									users={this.state.users}
									handleClick={this.handleClick}
								/>
							</Col>
						</Row>
					</Container>
				</div>
			);
		} else {
			return (
				<div>
					<ClipLoader
						css={css`
							display: block;
							margin: 0 auto;
						`}
						size={100}
						color={"#123abc"}
					/>
				</div>
			);
		}
	}
}

export default App;
