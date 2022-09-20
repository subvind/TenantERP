
<script lang="ts">
  import { onMount } from "svelte";

  import SvelteMarkdown from 'svelte-markdown'
  import Time from "svelte-time";

  export let project: any

  let source = ``

  onMount(async () => {
    fetch(`https://raw.githubusercontent.com/trabur/${project.name}/master/README.md`)
      .then(response => response.text())
      .then(data => {
        console.log(data);
        source = data
      })
  })
</script>

<div class="container">
  <h1 class="title">Display</h1>
  <div class="card" style="border: 1em solid #000;">
    {#if project}
      <div class="card" style="margin-top: 0; background: #222;">
        <div class="card-content">
          <span class="language grey-text">{project.language}</span> 
          <a href="#" class="name">{project.name}</a>
          <br /><span class="description white-text">{project.description}</span>
          <br /><span class="date grey-text">Latest commit: <Time relative timestamp={new Date(project.pushed_at)} /> &#8226; {project.stargazers_count} Stars</span>
        </div>
        <hr style="border-color: #000;">
        <div class="card-content">
          <a href={`https://github.com/trabur/${project.name}`} class="btn btn-large red lighten-2" target="_blank">source code</a>
        </div>
      </div>
    {/if}
    <div class="card-content" style="overflow: auto;">
      <SvelteMarkdown {source} />
    </div>
  </div>
  <a href="/projects" class="btn btn-large red lighten-2">← Back to showcase</a>
</div>

<style>
	.title {
		font-weight: 900;
		font-size: 4.5em;
		text-align: left;
		margin: 0;
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
  :global(.card-content > h1) {
    margin-top: 0;
  }
  .fluid {
    width: 100%;
  }
</style>