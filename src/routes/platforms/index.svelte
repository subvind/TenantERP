<script lang="ts">
	
	import Browser from "$lib/platforms/Browser.svelte";
	import ClientArea from "$lib/ClientArea.svelte";
	import List from "$lib/platforms/List.svelte";

	let records: any[] = [
		{
			name: '/istrav/',
			description: 'This is a Bulletin Board System for talking about application software development, building projects, deploying solutions to production, and integration with artificial inteligence.',
			url: 'https://istrav.net'
		}
	]
</script>

<svelte:head>
	<title>Platforms - isTrav</title>
	<meta name="description" content="A platform & multi-layered BBS built for innovating ideas. BBS: This is software dedicated to the sharing or exchange of ideas or other messages/files on a network." />
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
					It doesn't take long to duplicate a platform and rebrand it as your own. To get started checkout the most recent 15 platforms created, in the black bordered box, for inspiration then view our pricing levels, register, and you will have your very own platform by the end of today!
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