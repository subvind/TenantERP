
<script lang="ts">
  import { onMount } from "svelte";

  export let records: any[]
  
  onMount(() => {
    // nothing
  })
</script>

<h3 class="title">
  E-Commerce Stores:
</h3>
<div class="card">
  {#if records.length}
    {#each records as record}
      <div class="card-content">
        <a href={record.url} target="_blank" class="name">{record.name}</a>
        <br /><span class="description">{record.description}</span>
      </div>
      <hr>
    {/each}
  {/if}
  <div class="card-content">
    (Top 10 list of e-commerce stores that we support.)
  </div>
</div>
<a href="https://erpnomy.com/organizations" target="_blank" class="btn btn-large black white-text" style="display: inline-flex;"><i class="material-icons left">domain</i>organizations</a>
<br />
<br />

<style>
	.title {
		font-weight: 900;
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