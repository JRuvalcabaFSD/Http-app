import { loadUserByPage } from '../uses-cases/load-users-by-page';

const state = {
	curretPage: 0,
	users: [],
};

const loadNextPage = async () => {
	const users = await loadUserByPage(state.curretPage + 1);
	if (!users.length === 0) rerturn;
	state.curretPage += 1;
	state.users = users;
};
const loadPreviusPage = async () => {
	throw new Error('Not implemented!');
};
const onUserChange = () => {
	throw new Error('Not implemented!');
};
const realoadPage = async () => {
	throw new Error('Not implemented!');
};

/**
 *
 * @returns {User[]}
 */
const getUsers = () => [...state.users];
const getCurrentPage = () => state.curretPage;

export default { loadNextPage, loadPreviusPage, onUserChange, realoadPage, getUsers, getCurrentPage };
