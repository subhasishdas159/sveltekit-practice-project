<script lang="ts">
	import { page } from '$app/stores';

	console.log('$page', $page);
</script>

{$page.status}
<br />
{$page.error?.message}
