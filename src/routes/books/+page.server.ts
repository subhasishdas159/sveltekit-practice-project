import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, depends }) => {
	depends('fetchAllBooks');
	console.log('prerendering');

	const title = 'List of available books';
	const fetchedBooksStream = await fetch('http://localhost:4000/books');
	const fetchedBooks = await fetchedBooksStream.json();

	console.log('calling', fetchedBooks);

	// the depends only affects the fetch and not the timestamp?
	return { title, books: fetchedBooks, timestamp: Date.now() };
};

export const ssr = true;
export const csr = true;
export const prerender = true;
