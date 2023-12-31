import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies, url }) => {
	if (!cookies.get('username')) {
		throw redirect(307, `/form-tut?redirectTo=${url.pathname}`);
	}
};
