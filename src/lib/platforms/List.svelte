
<script lang="ts">
  import { onMount } from "svelte";

  export let records: any[]
  
  onMount(() => {
    // nothing
  })
</script>

<h3 class="title">
  For Example:
</h3>
<div class="card">
  {#if records.length}
    {#each records as record}
      <div class="card-content">
        <a href={`https://erpnomy.com/${record.username}/${record.orgname}`} target="_blank" class="name">{record.name}</a>
        <br /><span class="description">{record.description}</span>
        <br />
        <br />
        <div style="font-weight: 900;">Solutions:</div>
        {#each record.solutions as solution}
          <ul class="solutions">
            <li>
              &#8226; module: <a href={`https://${record.orgname}.${solution.module}.com`} target="_blank">{`https://${record.orgname}.${solution.module}.com`}</a>
            </li>
            <li>
              &#8226; bolt-on: <a href={solution.url} target="_blank">{solution.url}</a>
            </li>
          </ul>
        {/each}
      </div>
      <hr>
    {/each}
  {/if}
  <div class="card-content">
    (Top 10 list of organizations that we support.)
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
  .solutions {
    font-size: 1em;
    margin: 0 0 1em;
  }
</style>