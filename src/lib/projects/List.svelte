
<script lang="ts">
  import { onMount } from "svelte";
  import dayjs from 'dayjs';
  import LocalizedFormat from 'dayjs/plugin/LocalizedFormat'; // import plugin

  export let records: any

  onMount(() => {
    dayjs.extend(LocalizedFormat)
  })
</script>

<br />
<br />
<div class="container">
  <h1 class="title">
    Projects
  </h1>
  <div class="card">
    {#each records as record}
      <div class="card-content">
        <span class="language">{record.language}</span> 
        <a href={record.html_url} target="_blank" class="name">{record.name}</a>
        <br /><span class="description">{record.description}</span>
        <br /><span class="date">{dayjs(record.updated_at).format('LLLL')}</span>
      </div>
      <hr>
    {/each}
    <div class="card-content">
      <a href="https://github.com/trabur?tab=repositories" class="btn btn-large fluid" target="_blank">all projects</a>
    </div>
  </div>
</div>
<br />
<br />

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
  .language {
    font-weight: 900;
    float: right;
  }
  .description {
    font-size: 1.5em;
  }
  .card-content {
    padding: 1em;
  }
  .fluid {
    width: 100%;
  }
</style>