import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return { name: 'Sun', notification: 'book page notification' };
};

//  if you're returning multiple promises and want to run them in parallel,
// return them as top level promises. Sveltekit will make them parallel
// such as this one
// return {promise1, promise2, promise2}
// they will be parallel.
// however this way nested promises can't be parallel
