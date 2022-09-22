<script lang="ts">
  import { onMount } from "svelte";

  import Header from "$lib/apps/Header.svelte";
  import Navigation from "$lib/apps/Navigation.svelte";
  import Browser from "$lib/apps/Browser.svelte";

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
	<title>Applications Produced by isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<Header />
<Navigation apps={apps} selected={selected} />
<!-- <div style="border-top: 1em solid #000;"></div> -->