<script lang="ts">
	import { invalidate } from '$app/navigation';
	import BookList from './BookList.svelte';

	const { data } = $props();

	// for some reasons when this is destructed, the reactivity is lost
	// thus must always use data.something
	// const { title, books, timestamp } = data;
</script>

{data.title} - {data.timestamp}
<br />

<!-- to invalidate all load functions use invalidateAll -->
<button onclick={() => invalidate('fetchAllBooks')}>refresh</button>

{#each data.books as book (book.id)}
	<!-- because of this anchor tag sveltekit is able to crawl the dynamic pages and thus  -->
	<!-- this is how it knows which pages to prerender -->
	<a href="/books/{book.id}">{book.text}</a>
	<br />
{/each}

<BookList books={data.books} />

