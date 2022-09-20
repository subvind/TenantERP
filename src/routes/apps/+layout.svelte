<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import ClientArea from "$lib/ClientArea.svelte";
</script>

<Header />

<slot />

<ClientArea />
<br />
<br />
<br />
<br />
<Footer />
