
<script lang="ts">
  import { onMount } from "svelte";

  import Time from "svelte-time";

  export let records: any

  let showcaseSelected = 'istrav.pro'
  let languageSelected = 'Svelte'
  let languageSelectedIndex = 0
  let libAndFrameSelected = 'fleet-optimizer'
  let libAndFrameSelectedIndex = 0
  let technologies: any

  onMount(() => {
    fetch(`/api/technologies.json`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        technologies = data
      })
  })
</script>

<h1 id="technologies"class="title">
  Technologies
</h1>
{#if technologies}
  <div class="card">
    <div class="card-content">
      <span class="language">{technologies.languages.length} TOTAL</span> 
      <a href="#technologies" class="name">Languages</a>
      <hr>
      <span class="description">
        {#each technologies.languages as language, index}
          {#if index != 0}, {/if}
          <span on:click={() => {languageSelected = language.name; languageSelectedIndex = index}} class="link" style={languageSelected == language.name ? 'text-decoration: underline;' : ''}>{language.name}</span>
        {/each}
      </span>
    </div>
    <div class="card-content">
      <span class="language">{technologies.librariesAndFrameworks.length} TOTAL</span> 
      <a href="#technologies" class="name">Libraries & Frameworks</a>
      <hr>
      <span class="description">
        {#each technologies.librariesAndFrameworks as libAndFrame, index}
          {#if index != 0}, {/if}
          <span on:click={() => {libAndFrameSelected = libAndFrame.name; libAndFrameSelectedIndex = index}} class="link" style={libAndFrameSelected == libAndFrame.name ? 'text-decoration: underline;' : ''}>{libAndFrame.name}</span>
        {/each}
      </span>
    </div>
    <div class="card-content">
      <span class="language">{technologies.librariesAndFrameworks[libAndFrameSelectedIndex].projects.filter((investment) => {return technologies.languages[languageSelectedIndex].projects.filter((value) => value === investment).length}).length} TOTAL</span> 
      <a href="#technologies" class="name">Investments</a>
      <hr>
      <span class="description">
        {#each technologies.librariesAndFrameworks[libAndFrameSelectedIndex].projects.filter((investment) => {return technologies.languages[languageSelectedIndex].projects.filter((value) => value === investment).length}) as project, index}
          {#if index != 0}, {/if}
          <span class="link" on:click={() => {showcaseSelected = project;}} style={showcaseSelected == project ? 'text-decoration: underline;' : ''}>{project}</span>
        {/each}
      </span>
    </div>
    <div class="card-content">
      <span class="language">{showcaseSelected}</span> 
      <a href="#technologies" class="name">Showcase</a>
      <hr>
      <span class="description">
        {records.filter((r) => {return r.name == showcaseSelected})[0].description}
      </span>
      {#if true}
        <br /><span class="date">Latest commit: <Time relative timestamp={new Date(records.filter((r) => {return r.name == showcaseSelected})[0].pushed_at)} /> &#8226; {records.filter((r) => {return r.name == showcaseSelected})[0].stargazers_count} Stars</span>
      {/if}
      <br /><br />
      <a data-sveltekit-reload href={`/projects/${showcaseSelected}`} class="btn btn-large red lighten-2">display</a>
      <a href={records.filter((r) => {return r.name == showcaseSelected})[0].html_url} target="_blank" class="btn btn-large red lighten-2">Source Code</a>
    </div>
  </div>
{/if}
<br />
<br />
<h1 class="title">
  Repositories
</h1>
<div class="card">
  {#each records as record}
    <div class="card-content">
      <span class="language">{record.language}</span> 
      <a data-sveltekit-reload href={`/projects/${record.name}`} class="name">{record.name}</a>
      <br /><span class="description">{record.description}</span>
      {#if true}
        <br /><span class="date">Latest commit: <Time relative timestamp={new Date(record.pushed_at)} /> &#8226; {record.stargazers_count} Stars</span>
      {/if}
    </div>
    <hr>
  {/each}
  <div class="card-content">
    <a href="https://github.com/trabur?tab=repositories" class="btn btn-large red lighten-2 fluid" target="_blank">repositories on github</a>
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
  .link {
    cursor: pointer;
  }
</style>