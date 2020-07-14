import React from "react";
import { Table } from "reactstrap";

class UsersTable extends React.Component {
	render() {
		return (
			<Table className="border shadow">
				<thead>
					<tr>
						<th>Email</th>
						<th>First Name</th>
						<th>Last Name</th>
					</tr>
				</thead>
				<tbody>
					{this.props.users.map((value) => {
						return (
							<tr
								onClick={() => {
									this.props.handleClick(value.id);
								}}
							>
								<th>{value.email}</th>
								<td>{value.first_name}</td>
								<td>{value.last_name}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		);
	}
}

export default UsersTable;
