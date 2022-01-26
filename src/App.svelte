<script>
	import * as news from './feeds/nrk/current.json'
</script>

<main>

	<h1>NRK Nyheter</h1>
	<span>Hentet {news.date} </span>

	{#each news.stories as story }
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