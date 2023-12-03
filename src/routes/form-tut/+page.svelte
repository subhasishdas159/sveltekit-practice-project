<script lang="ts">
	const { form } = $props();

	console.log('form', form);
</script>

<!-- when you're doing default form action  -->
<!-- <form method="post"> -->
<!-- <form method="post" action="?/login"> -->
<form method="post">
	{form?.message || 'not logged in'}
	<br />
	<input type="text" name="username" placeholder="username" id="" />
	<input type="password" name="password" id="" />
	<!-- <button type="submit">login</button> -->
	<button formaction="?/register">register</button>
	<button formaction="?/login">login</button>
</form>
