import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const title = 'List of available books';
	const fetchedBooksStrm = await fetch('http://localhost:4000/books');
	const fetchedBooks = await fetchedBooksStrm.json();

	return { title, books: fetchedBooks };
};
