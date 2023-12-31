// import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params, url, route, parent }) => {
	// console.log('params, url, route', params, url, route);
	const parentData = await parent();
	const { name } = parentData;

	// if (params.bookId === '99') {
	// 	throw error(404, 'book not found');
	// }

	if (params.bookId === '99') {
		throw redirect(307, '/books');
	}

	const title = `details of book ${params.bookId}`;
	const fetchedBooksStream = await fetch(`http://localhost:4000/books/${params.bookId}`);
	const fetchedBooks = await fetchedBooksStream.json();

	return { title, book: fetchedBooks, name, notification: 'dynamic page notification' };
};

//  exactly same can be done with layout.js file and layout.server.js file for server and universal load function

// prerendering dynamic route pages
export const prerender = true;

// if you do
// export const prerender = true;
// then it will prerender the pages that it can crawl build time then, the rest will be serverside rendered
