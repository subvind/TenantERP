<script lang="ts">
	
	import Browser from "$lib/platforms/Browser.svelte";
	import ClientArea from "$lib/ClientArea.svelte";
	import List from "$lib/platforms/List.svelte";

	let records: any[] = [
		{
			name: '/community_folder/',
			description: 'This is a Bulletin Board System for talking about application software development, building projects, deploying solutions to production, and integration with artificial inteligence.',
			url: 'https://communityfolder.com'
		}
	]
</script>

<svelte:head>
	<title>Platforms - isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<Browser />
<br />
<br />
<br />
<br />
<div class="container">
	<div class="row">
		<div class="col s4">
			<div class="card">
				<img src="./travis.jpeg" alt="travis in canada" width="100%" style="padding-bottom: 0.5em; margin-bottom: -1em;" />
				<div class="card-content">
					<div class="card-title">Launch Today:</div>
					It doesn't take long to duplicate a platform and rebrand it as your own. Checkout the most recent 15 platforms created, in the black bordered box, for ideas to get started then view our pricing levels and you will have very own platform by the end of today!
				</div>
				<div class="card-action">
					<a href="/client-area/platforms" class="btn fluid">manage platforms</a>
				</div>
			</div>
		</div>
		<div class="col s8">
			<List records={records} />
		</div>
	</div>
</div>
<br />
<br />
<br />
<br />
<ClientArea />
<br />
<br />
<br />
<br />

<style>
	.fluid {
		width: 100%;
	}
</style>