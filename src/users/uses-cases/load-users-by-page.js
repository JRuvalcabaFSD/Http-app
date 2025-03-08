/**
 *
 * @param {Number} page
 * @returns
 */
export const loadUserByPage = async (page = 1) => {
	const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
	const resp = await fetch(url);
	const { data } = await resp.json();
	console.log(data);
};
