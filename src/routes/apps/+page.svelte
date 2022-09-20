<script lang="ts">
  import { onMount } from "svelte";

  import Header from "$lib/apps/Header.svelte";
  import Navigation from "$lib/apps/Navigation.svelte";

	let apps: any = []

	onMount(() => {
    fetch(`/api/apps.json`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        apps = data
      })
	})
</script>

<svelte:head>
	<title>Applications Produced by isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<Header />
{#if apps.length}
	<Navigation apps={apps} selected="istrav.com" />
{/if}
<br />
<br />
<br />
<br />