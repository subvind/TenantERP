
<script lang="ts">
  import { onMount } from "svelte";
  import TimeAgo from 'javascript-time-ago'

  import en from 'javascript-time-ago/locale/en'

  TimeAgo.addDefaultLocale(en)

  // Create formatter (English).
  const timeAgo = new TimeAgo('en-US')

  export let records: any
  
  onMount(() => {
    // nothing

  })
</script>

<h1 class="title">
  Projects
</h1>
<div class="card">
  {#each records as record}
    <div class="card-content">
      <span class="language">{record.language}</span> 
      <a href={record.html_url} target="_blank" class="name">{record.name}</a>
      <br /><span class="description">{record.description}</span>
      <br /><span class="date">Updated: {timeAgo.format(new Date(record.updated_at))}</span>
    </div>
    <hr>
  {/each}
  <div class="card-content">
    <a href="https://github.com/trabur?tab=repositories" class="btn btn-large blue lighten-2 fluid" target="_blank">all projects</a>
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