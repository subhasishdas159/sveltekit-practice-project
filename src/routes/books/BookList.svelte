<script lang="ts">
	type Book = {
		id: string;
		text: string;
	};

	const { books } = $props<{ books: Book[] }>();

	console.log('books', books);
</script>

{#each books as book (book.id)}
	<div>{book.text}</div>
{/each}
