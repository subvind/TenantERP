<script lang="ts">
  import { onMount } from "svelte";

  import Header from "$lib/apps/Header.svelte";
  import Navigation from "$lib/apps/Navigation.svelte";

	let apps: any = []
  let selected = "default"

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
	<title>Applications: Made in Austin, TX - isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<Header />
<Navigation apps={apps} selected={selected} />