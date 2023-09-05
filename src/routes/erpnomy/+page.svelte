<script lang="ts">
  import { onMount } from "svelte";
	
	import Browser from "$lib/platforms/Browser.svelte";
	import ClientArea from "$lib/ClientArea.svelte";
	import List from "$lib/platforms/List.svelte";
	import Rocket from "$lib/platforms/Rocket.svelte";

	let organizations: any = []
	
	onMount(() => {
		fetch('/api/organizations.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        organizations = data
      })
	})
</script>

<svelte:head>
	<title>inomy.ERP - GET STARTED! - isTrav</title>
	<meta name="description" content="A platform & multi-layered BBS built for innovating ideas. BBS: This is software dedicated to the sharing or exchange of ideas or other messages/files on a network." />
</svelte:head>

<main>
	<Browser />
	<br />
	<br />
	<br />
	<br />
	<div class="container">
		<div class="row" style="margin: 0 -0.6em;">
			<div class="col s12 m4">
				<div class="card">
					<img src="./travis.jpeg" alt="travis in canada" width="100%" style="padding-bottom: 0.5em; margin-bottom: -1em;" />
					<div class="card-content">
						<div class="card-title">Getting Started</div>
						The quickest way to get ahold of a full demo is to <a href="https://erpnomy.com/auth/register" target="_blank">register</a> an account at erpnomy.com. Another quick alternative is to <a href="https://erpnomy.com/auth/login" target="_blank">login</a> to one of our existing test accounts for a limited demonstration.
						<br />
						<br />
						free demo:<br />
						username: test@test.com<br />
						password: test123<br />
						<br />
						If you find our software to be the right solution for your needs then checkout <a href="/pricing">istrav.com/pricing</a> for unlimited access to our services.
					</div>
					<div class="card-action">
						<a href="/about" class="btn fluid red lighten-2"><i class="material-icons left">directions_boat</i>about<i class="material-icons right">directions</i></a>
					</div>
				</div>
				<br />
			</div>
			<div class="col s12 m8">
				<List records={organizations} />
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
</main>

<style>
	main {
		padding-top: 4em;
	}
	.fluid {
		width: 100%;
	}
</style>