<script context="module" lang="ts">
	export const prerender = true;

  declare module 'matter-js';
</script>

<script lang="ts">
	import ReadMe from "$lib/ReadMe.svelte";
	import Map from "$lib/Map.svelte";
	import ContactMe from "$lib/ContactMe.svelte";
	import Portfolio from "$lib/Portfolio.svelte";
	import Welcome from "$lib/Welcome.svelte";
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<title>isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<Header />
<main>
	<Welcome />
	<Portfolio />
	<br />
	<br />
	<ReadMe />
	<br />
	<br />
	<br />
	<br />
	<Map />
	<br />
	<br />
	<br />
	<br />
	<ContactMe />
	<br />
	<br />
	<br />
	<br />
</main>
<Footer />
