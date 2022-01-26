<script>
	import * as news from './feeds/nrk/current.json'
</script>
Nyheter fra NRK.no (Arkiv)
<main>
	{#each news.default as story }
		<article>
			<h2>{story.title}</h2>
			<p>{story.description}</p>
		</article>
	{/each}
</main>

<style>
	main {
		width:500px;
		margin: auto;
	}
	article {
		width: 500px;
	}
</style>