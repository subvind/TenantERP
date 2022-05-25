<script context="module" lang="ts">
	export const prerender = true;

  declare module 'matter-js';
</script>

<script lang="ts">
	import Cradle from "$lib/Cradle.svelte";
	import ReadMe from "$lib/ReadMe.svelte";
	import Map from "$lib/Map.svelte";
import ContactMe from "$lib/ContactMe.svelte";


</script>

<svelte:head>
	<title>isTrav</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<div class="container wrapper">
		<Cradle />
		<ReadMe />
	</div>
	<br />
	<br />
	<Map />
	<br />
	<br />
	<div class="container">
		<ContactMe />
	</div>
	<br />
	<br />
</main>

<style>
	main {
		min-height: 100vh;
	}
  .wrapper {
		text-align: center;
  }
</style>
