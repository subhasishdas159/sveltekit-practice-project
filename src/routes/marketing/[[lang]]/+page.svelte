<script lang="ts">
	import { page } from '$app/stores';

	type langType = 'en' | 'fr';

	const greeting = {
		en: 'Hello!',
		fr: 'Bonjour!'
	};

	const { lang = 'en' } = $page.params;

	const selectedGreeting: string = greeting[lang as langType] || greeting['en'];
</script>

{selectedGreeting}
