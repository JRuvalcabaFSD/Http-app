import { localhostUserToModel } from '../mappers/localhost-user.mappers';
import usersStore from '../store/users-store';

/**
 *
 * @param {Number} page
 * @returns {Promise<User[]>}
 */
export const loadUserByPage = async (page = 1) => {
	const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
	const resp = await fetch(url);
	const { data, last } = await resp.json();

	if (page > last || page === 0) return [];
	const users = data.map(localhostUserToModel);

	return users;
};
