import React from "react";

class UserDetail extends React.Component {
	render() {
		return (
			<div className="border bg-dark text-white shadow p-3 my-5">
				<div className="d-flex justify-content-around">
					<img
						className="border border-white"
						src={this.props.user.avatar}
						alt=""
						title=""
					/>

					<h4>{`id: ${this.props.user.id}`}</h4>
				</div>
				<h4>
					{this.props.user.first_name} {this.props.user.last_name}
				</h4>

				<h4>{this.props.user.email}</h4>
			</div>
		);
	}
}

export default UserDetail;
