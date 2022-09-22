<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import ClientArea from "$lib/ClientArea.svelte";
	import AppsFooter from "$lib/apps/Footer.svelte";
</script>

<Header />

<slot />

<AppsFooter />
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
