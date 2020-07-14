const getUsers = async () => {
	try {
		const response = await fetch(`https://reqres.in/api/users?delay=2`);
		const { data } = await response.json();
		if (!response.ok) {
			throw Error(response.statusText);
		}
		return data;
	} catch (error) {
		console.log(error);
	}
};

export { getUsers };
