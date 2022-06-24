<script lang="ts">
  import { onMount } from "svelte";

  import Header from '$lib/projects/Header.svelte'
  import List from '$lib/projects/List.svelte'
  import ClientArea from "$lib/ClientArea.svelte";
  
  let records: any

  onMount(async () => {
    let endpoint = `https://projects.trabur.workers.dev`;
    const init = {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    };

    const response = await fetch(endpoint, init);
    const content: any = JSON.parse(await response.text())
    records = content.sort(function (a: any, b: any) {
      let bb: any = new Date(b.updated_at)
      let aa: any = new Date(a.updated_at)
      return bb - aa
    })
    console.log(records)
  })
</script>

<svelte:head>
	<title>Projects - isTrav</title>
	<meta name="description" content="Here are links to all of my fair source licensed code on GitHub located under the 'trabur' username." />
</svelte:head>

<div class="wrapper">
  <Header />
  <br />
  <br />
  <div class="container">
    <div class="row">
      <div class="col s4">
        <div class="card">
          <img src="./travis.jpeg" alt="travis in canada" width="100%" style="padding-bottom: 0.5em; margin-bottom: -1em;" />
          <div class="card-content">
            <div class="card-title">trabur</div>  
            Here are links to all of my fair source licensed code on GitHub located under the "trabur" username. I've added a detailed description about each project and ordered them by latest activity. A few projects are just fun small experiements. My current languages and tech stacks of choice are ... Svelte/TypeScript for the web, frontend, and mobile ... NestJS/TypeScript for the backend ... and Wrangler/JavaScript for global workers. When it comes to deploying to production I use GitHub Actions.
          </div>
          <div class="card-action">
            <a href="https://github.com/trabur" class="btn btn-large blue lighten-2 fluid" target="_blank">GitHub</a>
          </div>
        </div>
      </div>
      <div class="col s8">
        {#if records}
          <List records={records} />
        {/if}
      </div>
    </div>
  </div>
</div>
<br />
<br />
<ClientArea />
<br />
<br />
<br />
<br />

<style>
  .wrapper {
    min-height: 100vh;
  }

  .fluid {
    width: 100%;
  }
</style>