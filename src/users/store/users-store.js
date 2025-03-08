import { loadUserByPage } from '../uses-cases/load-users-by-page';

const state = {
	curretPage: 1,
	users: [],
};

const loadNextPage = async () => {
	await loadUserByPage();
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

const getUsers = () => [...state.users];
const currentPage = () => state.curretPage;

export default { loadNextPage, loadPreviusPage, onUserChange, realoadPage, getUsers, currentPage };
