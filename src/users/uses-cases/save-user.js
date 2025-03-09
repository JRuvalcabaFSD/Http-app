import { userToLocalhost } from '../mappers/user-to-localhost.mapper';
import { User } from '../models/users.model';

/**
 *
 * @param {Object<User>} userLike
 */
export const saveUser = async (userLike) => {
	const user = new User(userLike);
	if (!user.firstName || !user.lastName) throw 'First & Last name are required';
	const saveUser = userToLocalhost(user);
	if (saveUser.id) {
		throw 'Noy implemented';
		return;
	}

	return await createUser(saveUser);
};

/**
 *
 * @param {User} user
 */
const createUser = async (user) => {
	const url = `${import.meta.env.VITE_BASE_URL}/users`;
	const resp = await fetch(url, {
		method: 'POST',
		body: JSON.stringify(user),
		headers: {
			'Content-Type': 'applicatión/json',
		},
	});

	const newUser = await resp.json();
	console.log(newUser);
};
