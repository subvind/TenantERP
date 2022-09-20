
<script lang="ts">
  import { onMount } from "svelte";

  export let records: any[]
  
  onMount(() => {
    // nothing
  })
</script>

<h1 class="title">
  Platforms
</h1>
<div class="card">
  {#each records as record}
    <div class="card-content">
      <a href={record.url} target="_blank" class="name">{record.name}</a>
      <br /><span class="description">{record.description}</span>
    </div>
    <hr>
  {/each}
  <div class="card-content">
    (Showing most recent 15 public platforms sorted in order by the date each platform was created at.)
  </div>
</div>

<style>
	.title {
		font-weight: 900;
		font-size: 4.5em;
		text-align: left;
		margin: 0;
	}
  .card {
    border: 1em solid #000;
  }
  .name {
    font-size: 1.5em;
    font-weight: 900;
  }
  .description {
    font-size: 1.5em;
  }
  .card-content {
    padding: 1em;
  }
</style>