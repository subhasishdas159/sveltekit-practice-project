<script lang="ts">
	import { page } from '$app/stores';

	console.log('$page', $page);
</script>

<svelte:head>
	<title>{$page.data.title || 'books page'}</title>
</svelte:head>

{$page.data.notification}
<br />
<slot />
