<script lang="ts">
	const { form } = $props();

	console.log('form', form);
</script>

<!-- example of different page form action being called -->
<form method="post">
	{form?.message || 'not logged in'}
	<br />
	<input value={form?.username || ''} type="text" name="username" placeholder="username" id="" />
	<input type="password" name="password" id="" />
	<button formaction="/form-tut?/register">register</button>
	<button formaction="/form-tut?/login">login</button>
</form>
