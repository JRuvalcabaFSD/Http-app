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
const onUserChange = () => {
	throw new Error('Not implemented!');
};
const realoadPage = async () => {
	throw new Error('Not implemented!');
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
