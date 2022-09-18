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
      let bb: any = new Date(b.pushed_at)
      let aa: any = new Date(a.pushed_at)
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
            <div class="card-title">Portfolio</div>
            Being a <span style="font-weight: 900;">self taught</span> learner and supporter of <span style="text-decoration: underline;">full ownership</span> are my two core pricipals. These ideals have lead me to be a <span style="text-decoration: underline;">Full Stack Developer (FSD)</span> and <span style="font-weight: 900;">coder</span>. As with any expert their portfolio should demonstrate clear capabilities in their field of expertise. With that said, along side my work, let's get into the details.
            <br /><br />
            W = (S + K) * E
            <br /><br />
            This formula where inputs (Wisdom, Skill, Knowledge, and Experience) are plugged in is one way to measure success; where IMHO [skill {`<-->`} technology] and [expereince {`<-->`} projects] are important vectors in ones journy throughout their career.
            <br /><br />
            Now, every person going down one <a href="https://roadmap.sh" target="_blank">roadmap.sh</a> or another is going to have their set of tools (languages, libraries, frameworks) limited by their enviornment and/or capability so it is tough to judge (identify & classify) and communicate cryptographically (the art of writing or solving codes) with others going down related roadmaps unless you have already been there, you happen to be a local, or you happen to have GPS.
            <br /><br />
            Obviously, any person with a limited toolset will yeild results with limited abilities. Such that people equipped with more powerful and controllable toolsets will yeild results with more capability.
            <br /><br />
            As time goes on, technology advances, so we have to update or remove old toolsets with the latest toolsets. The cycle repeats. With each release of some toolset we have to update our skills and knowledge around them; thus, more wisdom becomes available through expereince.
            <br /><br />
            In the end ... the <span style="font-weight: 900;">key</span> to <span style="text-decoration: underline;">success</span> is about making investments in (S + K) or "learning" and applying those investments to real life (E) or <a href="/production">istrav.com/production</a> and it's probably one of the smartest things one can do (W); and the work done here at isTrav reflects that philosophy by showcasing clear capabilities and expertise in the field of coding and FSD.
          </div>
          <div class="card-action" style="padding: 0;">
            <a href="/about" style="display: contents;">
              <img src="/anchor.png" alt="isTrav" style="width: 100%;">
            </a>
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