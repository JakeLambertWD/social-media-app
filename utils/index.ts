import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const createOrGetUser = async (response: any) => {
	// decode to extract required details
	const decoded: { name: string; picture: string; sub: string } = jwt_decode(
		response.credential
	);

	const { name, picture, sub } = decoded;

	// create user object
	const user = {
		_id: sub,
		_type: 'user',
		userName: name,
		image: picture
	};

	// axios POST request parsing data to the API route
	await axios.post(`http://localhost:3000/api/auth`, user);
};
