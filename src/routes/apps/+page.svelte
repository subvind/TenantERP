<script lang="ts">
  import { onMount } from "svelte";

  import Header from "$lib/apps/Header.svelte";
  import Navigation from "$lib/apps/Navigation.svelte";
  import Browser from "$lib/apps/Browser.svelte";

	let apps: any = []
  let app: any = undefined
  let selected = "istrav.com"

	onMount(() => {
    fetch(`/api/apps.json`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        apps = data
        app = apps.filter((value: any) => {
          return value.website === selected
        })[0]
      })
	})
</script>

<svelte:head>
	<title>Applications Produced by isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<Header />
<Navigation apps={apps} selected={selected} />
<Browser app={app} selected={selected} />
