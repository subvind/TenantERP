
<script lang="ts">
  import { GithubAuthProvider } from "firebase/auth";
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
  <a href={`https://github.com/trabur/${project.name}`} class="btn btn-large right red lighten-2 stats" target="_blank"><i class="material-icons left">star</i> Starred = {project.stargazers_count}</a>
  <a href={`https://github.com/trabur/${project.name}`} class="btn btn-large right red lighten-2 stats" target="_blank"><i class="material-icons left">visibility</i> Watching = {project.watchers_count}</a>
  <h1 class="title">Display</h1>
  <div class="card" style="border: 1em solid #000;">
    {#if project}
      <div class="card" style="margin-top: 0; background: #222;">
        <div class="card-content">
          <span class="language grey-text">{project.language}</span> 
          <a href={`https://github.com/trabur/${project.name}`} target="_blank" class="name">github.com/trabur/{project.name}</a>
          <br /><span class="description white-text">{project.description}</span>
          <br /><span class="date grey-text">Latest commit: <Time relative timestamp={new Date(project.pushed_at)} /> &#8226; {project.stargazers_count} Stars</span>
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
  .stats {
    margin: 0.75em 0 0 0.5em;
  }
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