<script lang="ts">
  import { onMount } from "svelte";
	
	import Browser from "$lib/platforms/Browser.svelte";
	import ClientArea from "$lib/ClientArea.svelte";
	import List from "$lib/platforms/List.svelte";
	import Rocket from "$lib/platforms/Rocket.svelte";

	let platforms: any = []
	
	onMount(() => {
		fetch('/api/platforms.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        platforms = data
      })
	})
</script>

<svelte:head>
	<title>Community Platforms - isTrav</title>
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
					<div class="card-title">Community</div>
					Every idea needs a community (network of social groups) that provides a feeling of fellowship with others, as a result of sharing common attitudes, interests, and goals. Our software <a href="/platforms">istrav.com/platforms</a> enables just that.
				</div>
				<div class="card-action">
					<a href="/about" class="btn fluid red lighten-2">about</a>
				</div>
			</div>
		</div>
		<div class="col s8">
			<List records={platforms} />
		</div>
	</div>
</div>
<br />
<br />
<br />
<Rocket />
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