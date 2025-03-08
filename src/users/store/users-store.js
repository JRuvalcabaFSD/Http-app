const state = {
	currentPage: 0,
	users: [],
};

const loadNextPage = async () => {};
const loadPreviusPage = async () => {};
const onUserChange = () => {};
const realodPage = async () => {};
const getUsers = () => [...state.users];
const getCurrentPage = () => state.currentPage;

export default { loadNextPage, loadPreviusPage, onUserChange, realodPage, getUsers, getCurrentPage };
