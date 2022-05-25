<script lang="ts">
  import { onMount } from "svelte";

  import List from '$lib/projects/List.svelte'
  import { Octokit } from 'octokit';
  
  let records: any
  let request: {
    data: any
  }

  onMount(async () => {
    const octokit = new Octokit({ auth: `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` });
    request = await octokit.rest.repos.listForUser({ username: 'trabur' })

    records = request.data.sort(function (a: any, b: any) {
      let bb: any = new Date(b.updated_at)
      let aa: any = new Date(a.updated_at)
      return bb - aa
    })
    console.log(records)
  })
</script>

<div class="wrapper">
  {#if records}
    <List records={records} />
  {/if}
</div>

<style>
  .wrapper {
    min-height: 100vh;
  }
</style>