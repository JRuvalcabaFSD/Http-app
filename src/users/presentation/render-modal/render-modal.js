import { User } from '../../models/users.model';
import { getUserById } from '../../uses-cases/get-user-by-id';
import './render-modal.css';
import modalHTML from './render-modal.html?raw';

let modal, form;
let loaderUser = {};

/**
 *
 * @param {String|Number} id
 */
export const showModal = async (id) => {
	modal?.classList.remove('hide-modal');
	if (!id) return;
	const user = await getUserById(id);
	setFormValues(user);
};

export const hideModal = () => {
	modal?.classList.add('hide-modal');
	form?.reset();
};

/**
 *
 * @param {User} user
 */
const setFormValues = (user) => {
	form.querySelector('[name="firstName"]').value = user.firstName;
	form.querySelector('[name="lastName"]').value = user.lastName;
	form.querySelector('[name="balance"]').value = user.balance;
	form.querySelector('[name="isActive"]').checked = user.isActive;
	loaderUser = user;
};

/**
 *
 * @param {HTMLDivElement} element
 * @param {(User)=>Promise<void>} callback
 */
export const renderModal = (element, callback) => {
	if (modal) return;
	modal = document.createElement('div');
	modal.innerHTML = modalHTML;
	modal.className = 'modal-container hide-modal';
	form = modal.querySelector('form');

	form.addEventListener('submit', async (e) => {
		e.preventDefault();
		const formData = new FormData(form);
		const userLike = { ...loaderUser };
		for (const [key, value] of formData) {
			if (key === 'balance') {
				userLike[key] = +value;
				continue;
			}
			if (key === 'isActive') {
				userLike[key] = value === 'on' ? true : false;
				continue;
			}

			userLike[key] = value;
		}

		await callback(userLike);
	});

	modal.addEventListener('click', (e) => {
		if (e.target.className !== 'modal-container') return;
		hideModal();
	});
	element.append(modal);
};
