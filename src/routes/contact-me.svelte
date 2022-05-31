<script lang="ts">
	import ContactMe from "$lib/ContactMe.svelte";
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Contact Me - isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<Header />
<main>
	<br />
	<br />
	<ContactMe />
	<br />
	<br />
	<br />
	<br />
</main>
<Footer />


