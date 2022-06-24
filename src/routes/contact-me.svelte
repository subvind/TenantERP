<script lang="ts">
	import ContactMe from "$lib/ContactMe.svelte";
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import ClientArea from "$lib/ClientArea.svelte";
	import '../app.css';
</script>

<svelte:head>
	<title>Contact Me - isTrav</title>
	<meta name="description" content="If you like the work I'm doing around here consider becoming an isTrav Client today. If your looking for talent print out my Resume, send my GitHub to the coding team, and contact me for hire." />
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
<ClientArea />
<br />
<br />
<br />
<br />
<Footer />


