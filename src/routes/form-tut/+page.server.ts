// form actions
export const actions = {
	// this takes same params as api routes
	// default: async ({ request, cookies }) => {
	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		console.log('username, password', username, password);
		if (!username || !password) {
			return {
				message: 'missing username or password'
			};
		}

		cookies.set('username', username, { path: '/' });
		return { message: 'logged in' };
	},

	register: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		console.log('username, password', username, password);
		if (!username || !password) {
			return {
				message: 'missing username or password'
			};
		}

		cookies.set('username', username, { path: '/' });
		return { message: 'registered' };
	}
};
