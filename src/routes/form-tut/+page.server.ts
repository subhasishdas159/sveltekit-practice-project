import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

// form actions
export const actions: Actions = {
	// this takes same params as api routes
	// default: async ({ request, cookies }) => {
	login: async ({ request, cookies, url }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		console.log('username, password', username, password);
		if (!username || !password) {
			return {
				username,
				message: 'missing username or password'
			};
		}

		cookies.set('username', username, { path: '/' });
		// return { message: 'logged in' };
		throw redirect(303, url.searchParams.get('redirectTo') || '/');
	},

	register: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		console.log('username, password', username, password);
		if (!username || !password) {
			// return {
			// 	message: 'missing username or password'
			// };
			return fail(400, { username, message: 'user name or password not provided' });
		}

		cookies.set('username', username, { path: '/' });
		return { message: 'registered' };
	}
};
