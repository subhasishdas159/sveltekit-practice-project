<script lang="ts">
	import BookList from './BookList.svelte';

	const { data } = $props();

	const { title, books } = data;

	console.log('books', books);
</script>

{title}
<br />

<BookList {books} />
