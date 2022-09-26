<script lang="ts">
  import { onMount } from 'svelte';

	import About from '$lib/About.svelte'
	import PracticalIdeas from '$lib/PracticalIdeas.svelte';

	let linkIndex: number = 0
	let links: any = []

	onMount(() => {
		fetch('/api/resume.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        links = data
				linkIndex = data.length - 1
      })
	})
</script>

<svelte:head>
	<title>The Official Resume of Travis Burandt - isTrav</title>
	<meta name="description" content="(Resume of a FSD) [Full Stack Developer] -Travis Burandt-" />
</svelte:head>

<div class="container" style="width: 1100px;">
	<br />
	<br />
	<div style="text-align: center;">
		<h3 style="font-weight: 900;">(Resume of a FSD)</h3>
		<span style="font-size: 4em; font-weight: 900; border-top: 0.2em solid #ee6e73; border-bottom: 0.2em solid #ee6e73;">Full Stack Developer</span>
		<h3 style="font-weight: 900;">-Travis Burandt-</h3>
		{#if links.length}
			{#each links as link, index}
				<a href="#" on:click={() => linkIndex = index} class={`btn navigation btn-large ${linkIndex === index ? 'red lighten-2' : 'grey'}`}>{link.name}</a>
			{/each}
		{/if}
	</div>
	<br />
	<br />
	{#if links.length}
		<div style="margin: 0 1em;">
			<iframe id="resume" src={links[linkIndex].website} height={links[linkIndex].height} scrolling="no" frameborder="0" title="The Official Resume of Travis Burandt"></iframe>
			<nav class="grey">
				<div class="nav-wrapper">
					<div style="text-align: center;">
						<a href={links[linkIndex].sourceCode} class="btn large black">source code</a>
						<a href={links[linkIndex].website} class="btn large black">WEBSITE</a>
						<a href={links[linkIndex].pdf} class="btn large black">PDF</a>
					</div>
				</div>
			</nav>
		</div>
	{/if}
</div>

<br />
<br />
<br />
<About />
<PracticalIdeas />

<style>
	h3 {
		margin: 0;
	}
	#resume {
		width: 100%;
		margin: 0;
		margin-bottom: -0.4em;
		min-height: calc(75vh);
		border: 1em solid #000;
		overflow: hidden;
	}
	.navigation {
		margin: 0 0.2em;
	}
</style>