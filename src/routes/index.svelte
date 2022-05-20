<script context="module" lang="ts">
	export const prerender = true;

  declare module 'matter-js';
</script>

<script lang="ts">
	import Cradle from "$lib/Cradle.svelte";
	import Profile from "$lib/Profile.svelte";


</script>

<svelte:head>
	<title>isTrav</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="container wrapper">
	<Cradle />
	<Profile />
</main>
<br />
<br />


<style>
  .wrapper {
		text-align: center;
		height: 100vh;
  }
</style>
