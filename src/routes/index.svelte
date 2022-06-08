<script context="module" lang="ts">
	export const prerender = true;

  declare module 'matter-js';
</script>

<script lang="ts">
	import Portfolio from '$lib/Portfolio.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import ClientArea from "$lib/ClientArea.svelte";
</script>

<svelte:head>
	<title>isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<Header />
<Portfolio />
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
