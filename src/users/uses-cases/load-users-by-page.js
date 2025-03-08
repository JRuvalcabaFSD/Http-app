import { localhostUserToModel } from '../mappers/localhost-user.mappers';

/**
 *
 * @param {Number} page
 * @returns {Promise<User[]>}
 */
export const loadUserByPage = async (page = 1) => {
	const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const users = data.map(localhostUserToModel);

	return users;
};
