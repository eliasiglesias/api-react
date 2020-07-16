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
			isLoading: true,
			user: {},
			showUser: false,
		};
	}

	async componentDidMount() {
		const usersList = await getUsers();
		this.setState({ ...this.state, users: usersList, isLoading: false });
	}

	handleClick = (id) => {
		this.setState({
			...this.state,
			isLoading: true,
			showUser: true,
		});
		this.getUserData(id);
	};

	getUserData = async (id) => {
		const userData = await getUser(id);
		if (this.state.isLoading && this.state.showUser) {
			this.setState({
				...this.state,
				user: userData,
				showUser: true,
				isLoading: false,
			});
		}
	};

	handleButtonClick = () => {
		this.setState({ ...this.state, isLoading: false, showUser: false });
	};

	render() {
		if (this.state.isLoading && !this.state.showUser) {
			return (
				<div>
					<ClipLoader
						css={css`
							display: block;
							margin: 0 auto;
							margin-top: 50px;
						`}
						size={100}
						color={"#9F75A8"}
					/>
				</div>
			);
		} else
			return (
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

					{this.state.isLoading && this.state.showUser && (
						<div>
							<ClipLoader
								css={css`
									display: block;
									margin: 0 auto;
									margin-top: 50px;
								`}
								size={100}
								color={"#3AE2DE"}
							/>
						</div>
					)}

					{!this.state.isLoading && this.state.showUser && (
						<div>
							<Row className="d-flex justify-content-center">
								<Col xs="6">
									<UserDetail user={this.state.user} />
								</Col>
							</Row>
						</div>
					)}
				</Container>
			);
	}
}

export default App;
