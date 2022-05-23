<script context="module" lang="ts">
	export const prerender = true;

  declare module 'matter-js';
</script>

<script lang="ts">
	import Cradle from "$lib/Cradle.svelte";
	import ReadMe from "$lib/ReadMe.svelte";


</script>

<svelte:head>
	<title>isTrav</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="container wrapper">
	<Cradle />
	<ReadMe />
</main>
<br />
<br />


<style>
  .wrapper {
		text-align: center;
		min-height: 100vh;
  }
</style>
