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
	{book.text}
	<br />
{/each}

<BookList books={data.books} />
