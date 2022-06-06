<script lang="ts">
  import { onMount } from "svelte";

  import List from '$lib/projects/List.svelte'
  import ClientArea from "$lib/ClientArea.svelte";
  
  let records: any

  onMount(async () => {
    let endpoint = `https://projects.trabur.workers.dev`;
    const init = {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    };

    const response = await fetch(endpoint, init);
    const content: any = JSON.parse(await response.text())
    records = content.sort(function (a: any, b: any) {
      let bb: any = new Date(b.updated_at)
      let aa: any = new Date(a.updated_at)
      return bb - aa
    })
    console.log(records)
  })
</script>

<svelte:head>
	<title>Projects - isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<div class="wrapper">
  {#if records}
    <List records={records} />
  {/if}
</div>
<br />
<br />
<ClientArea />
<br />
<br />
<br />
<br />

<style>
  .wrapper {
    min-height: 100vh;
  }
</style>