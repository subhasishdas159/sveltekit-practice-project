import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, depends }) => {
	depends('fetchAllBooks');

	const title = 'List of available books';
	const fetchedBooksStrm = await fetch('http://localhost:4000/books');
	const fetchedBooks = await fetchedBooksStrm.json();

	console.log('calling', fetchedBooks);

	// the depends only affects the fetch and not the timestamp?
	return { title, books: fetchedBooks, timestamp: Date.now() };
};
