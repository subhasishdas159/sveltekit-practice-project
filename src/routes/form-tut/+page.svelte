<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	const { form } = $props();
	let name = $state<string>('');

	export const snapshot = {
		capture: () => {
			return {
				name
			};
		},
		restore: (data) => {
			name = data.name;
		}
	};

	console.log('form', form);
	const redirectTo = $page.url.searchParams.get('redirectTo') || '/';
	console.log('redirectTo', redirectTo);
</script>

<!-- when you're doing default form action  -->
<!-- <form method="post"> -->
<!-- <form method="post" action="?/login"> -->
<form method="post" use:enhance>
	{form?.message || 'not logged in'}
	<br />
	<input type="text" name="username" placeholder="username" id="" bind:value={name} />
	<input type="password" name="password" id="" />
	<!-- <button type="submit">login</button> -->
	<button formaction="?/register&redirectTo={redirectTo}">register</button>
	<button formaction="?/login&redirectTo={redirectTo}">login</button>
</form>
