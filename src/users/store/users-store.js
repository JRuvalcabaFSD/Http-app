import { User } from '../models/users.model';
import { loadUserByPage } from '../uses-cases/load-users-by-page';

const state = {
	curretPage: 0,
	users: [],
};

const loadNextPage = async () => {
	const users = await loadUserByPage(state.curretPage + 1);

	if (users.length === 0) return;
	state.curretPage += 1;
	state.users = users;
};
const loadPreviusPage = async () => {
	const users = await loadUserByPage(state.curretPage - 1);
	if (users.length === 0) return;
	state.curretPage -= 1;
	state.users = users;
};
/**
 *
 * @param {User} updateUser
 */
const onUserChange = (updateUser) => {
	let wasFound = false;
	state.users = state.users.map((user) => {
		if (user.id === updateUser.id) {
			wasFound = true;
			return updateUser;
		}

		return user;
	});

	if (wasFound && state.users.length < 10) {
		state.users.push(updateUser);
	}
};
const realoadPage = async () => {
	const users = await loadUserByPage(state.curretPage);
	if (users.length === 0) {
		await loadPreviusPage();
		return;
	}
	state.users = users;
};
const setLastPage = (lastPage) => {
	if (lastPage) state.lastPage = lastPage;
};

/**
 *
 * @returns {User[]}
 */
const getUsers = () => [...state.users];
const getCurrentPage = () => state.curretPage;
const getLastPage = () => state.lastPage;

export default { loadNextPage, loadPreviusPage, onUserChange, realoadPage, getUsers, getCurrentPage, getLastPage, setLastPage };
