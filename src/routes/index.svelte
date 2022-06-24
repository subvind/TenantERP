<script context="module" lang="ts">
	export const prerender = true;

  declare module 'matter-js';
</script>

<script lang="ts">
	import Ideas from '$lib/Ideas.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import ClientArea from "$lib/ClientArea.svelte";
	import ReadMe from '$lib/ReadMe.svelte';
</script>

<svelte:head>
	<title>isTrav: Travis Burandt</title>
	<meta name="description" content="isTrav's goal is to solve problems using the right solutions, turn ideas into apps that spark joy to the end user, and then to keep production live with what works best." />
</svelte:head>

<Header />
<Ideas />
<br />
<br />
<br />
<br />
<br />
<br />
<ReadMe />
<br />
<br />
<br />
<br />
<ClientArea />
<br />
<br />
<br />
<br />
<Footer />
