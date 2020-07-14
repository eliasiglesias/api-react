const URL = "https://reqres.in/api/users/";

const getUser = async (userId) => {
	try {
		const response = await fetch(`${URL}${userId}?delay=1`);
		const { data } = await response.json();
		if (!response.ok) {
			throw Error(response.statusText);
		}
		return data;
	} catch (error) {
		console.log(error);
	}
};

export { getUser };
