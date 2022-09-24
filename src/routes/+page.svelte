<script lang="ts">
	import { Button, Card } from '$lib';
	const onClick = (e: any) => {
		e.stopPropagation();
		alert('Hello');
	};
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Card
	as="section"
	type="row"
	sx={{
		content: 'space-between',
		p: '16px',
		b: '1px solid #fefefe',
		bgc: '#dfdfdf',
		r: '8px',
		'--primary-bgc': 'steelblue',
		'--primary-color': 'white',
		'--secondary-bgc': 'tomato',
		'--secondary-color': 'white'
	}}
	on:click={() => console.log('card')}
>
	<Button type="button" variant="primary" on:click={onClick}>Time to soar!</Button>
	<Button type="button" variant="secondary" on:click={onClick}>Soar, really?</Button>
	<Button type="button" on:click={onClick}>Don't know 'bout that.</Button>
</Card>
