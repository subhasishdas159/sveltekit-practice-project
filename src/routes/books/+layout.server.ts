import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return { name: 'Sun', notification: 'book page notification' };
};
