import { localhostUserToModel } from '../mappers/localhost-user.mappers';
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
	let userUpdate;
	if (saveUser.id) {
		userUpdate = await updateUser(saveUser);
	} else {
		userUpdate = await createUser(saveUser);
	}

	return localhostUserToModel(userUpdate);
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

	return await resp.json();
};

/**
 *
 * @param {User} user
 */
const updateUser = async (user) => {
	const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;
	const resp = await fetch(url, {
		method: 'PATCH',
		body: JSON.stringify(user),
		headers: {
			'Content-Type': 'applicatión/json',
		},
	});

	return await resp.json();
};
