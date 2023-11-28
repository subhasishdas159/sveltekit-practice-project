<script lang="ts">
	import { page } from '$app/stores';

	console.log('$page', $page.params.productId);
</script>

{$page.params.productId}
