<script lang="ts">
  import { onMount } from "svelte";

  export let data: any;

  import ClientArea from "$lib/ClientArea.svelte";
  import Header from '$lib/projects/Header.svelte'
  import Display from '$lib/projects/Display.svelte'
  import Footer from '$lib/projects/Footer.svelte'

  // console.log(data.projectId)
  
  let records: any
  let record: any

  onMount(async () => {
    let endpoint = `https://projects.subvind.workers.dev`;
    const init = {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    };

    const response = await fetch(endpoint, init);
    const content: any = JSON.parse(await response.text())
    records = content.sort(function (a: any, b: any) {
      let bb: any = new Date(b.pushed_at)
      let aa: any = new Date(a.pushed_at)
      return bb - aa
    })
    
    record = records.filter((record: any) => {
      return record.name === data.projectId
    })[0]

    console.log(record)
  })
</script>

<svelte:head>
  {#if record}
    <title>Project: {record.name} - isTrav</title>
    <meta name="description" content={record.description} />
  {/if}
</svelte:head>

<br />
<br />
<br />
<br />
<div style="min-height: 75vh;">
  {#if record}
    <Display project={record} />
  {/if}
</div>
<br />
<br />
<br />
<br />
<Header />
<Footer />
<br />
<br />
<br />
<br />
<ClientArea />
<br />
<br />
<br />
<br />