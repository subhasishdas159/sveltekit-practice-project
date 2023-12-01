<script lang="ts">
	const { data } = $props();

	const { title, book, name } = data;

	console.log('title, book', title, book);
</script>

Book details
<br />
{book.text} for {name}
