<!-- <script context="module" lang="ts">
	export const prerender = true;

  declare module 'matter-js';
</script> -->

<script lang="ts">
	import StartToday from '$lib/StartToday.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import ClientArea from "$lib/ClientArea.svelte";
	import ReadMe from '$lib/ReadMe.svelte';
	import Anchor from '$lib/Anchor.svelte';
	import FreeDemo from '$lib/FreeDemo.svelte';
	import Path from '$lib/Path.svelte';
	import Customize from '$lib/Customize.svelte';
	// import Domains from '$lib/Domains.svelte';
	import Quote from '$lib/Quote.svelte';
</script>

<svelte:head>
	<title>isTrav Subvind - Full Stack Developer; coding since 2008.</title>
	<meta name="description" content="isTrav's goal is to solve problems using the right solutions, turn ideas into apps that spark joy to the end user, and then to keep production live with what works best." />
</svelte:head>

<Header />
<main>
	<Anchor />
	<StartToday />
	<br />
	<br />
	<ReadMe />
	<br />
	<br />
	<Path />
	<br />
	<br />
	<br />
	<br />
	<Quote />
	<!-- <Domains /> -->
	<Customize />
	<br />
	<br />
	<FreeDemo />
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
<Footer />

<style>
	main {
		position: relative;
		overflow: hidden;
		padding-top: 4em;
	}
</style>