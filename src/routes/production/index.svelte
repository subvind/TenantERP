
<script lang="ts">
  
  import Production from '$lib/Production.svelte'
  import List from '$lib/production/List.svelte'
  import ClientArea from '$lib/ClientArea.svelte';

  let data = [
    {
      name: 'istrav.com',
      type: 'web', // mobile, web, backend, global
      url: 'https://istrav.com',
      git: 'https://github.com/trabur/istrav.com',
      pipeline: 'https://github.com/trabur/istrav.com/actions',
      statusPage: 'https://stats.uptimerobot.com/1nz1rt61VL/791840169',
      kanban: 'https://trello.com/b/LWqVCN14/istravcom',
    },
    {
      name: 'istrav.dev',
      type: 'web', // mobile, web, backend, global
      url: 'https://istrav.dev',
      git: 'https://github.com/trabur/istrav.dev',
      pipeline: 'https://github.com/trabur/istrav.dev/actions',
      statusPage: 'https://stats.uptimerobot.com/1nz1rt61VL/792096486',
      kanban: 'https://trello.com/b/i9bJnArc/istravdev',
    },
    {
      name: 'istrav-platform-frontgate',
      type: 'web',
      url: 'https://istrav.net',
      git: 'https://github.com/trabur/istrav-platform-frontgate',
      pipeline: 'https://github.com/trabur/istrav-platform-frontgate/actions',
      statusPage: 'https://stats.uptimerobot.com/1nz1rt61VL/791899626',
      kanban: 'https://trello.com/b/MhOKmx1V/istrav-platform-frontgate',
    },
    {
      name: 'istrav-platform-frontend',
      type: 'web',
      url: 'https://meta.istrav.net',
      git: 'https://github.com/trabur/istrav-platform-frontend',
      pipeline: 'https://github.com/trabur/istrav-platform-frontend/actions',
      statusPage: 'https://stats.uptimerobot.com/1nz1rt61VL/791899644',
      kanban: 'https://trello.com/b/Iv6f0rrj/istrav-platform-frontend',
    },
    {
      name: 'istrav-platform-backend',
      type: 'backend',
      library: '',
      url: 'https://meta.istrav.dev',
      git: 'https://github.com/trabur/istrav-platform-backend',
      pipeline: 'https://github.com/trabur/istrav-platform-backend/actions',
      statusPage: 'https://stats.uptimerobot.com/1nz1rt61VL/791899655',
      kanban: 'https://trello.com/b/nOIdEOSO/istrav-platform-backend',
      restApi: 'https://documenter.getpostman.com/view/129924/Uz5Aqy9r',
      apiTests: 'https://test-platform-backend.vercel.app',
    },
    {
      name: 'istrav-global',
      type: 'global',
      library: '',
      url: 'https://global.trabur.workers.dev',
      git: 'https://github.com/trabur/istrav-global',
      pipeline: 'https://github.com/trabur/istrav-global/actions',
      statusPage: 'https://stats.uptimerobot.com/1nz1rt61VL/791940226',
      kanban: 'https://trello.com/b/5lLtD2VE/traburworkersdev',
      restApi: 'https://documenter.getpostman.com/view/129924/Uz5AqyTV',
      apiTests: 'https://test-istrav-global.vercel.app',
    },
  ]
</script>

<svelte:head>
	<title>Production - isTrav</title>
	<meta name="description" content="Here is what I am commited to keeping the lights on. // Fully Commited To 100% </> Quality. This includes ... [Kanban / BDD / Tests / Pipelines];
  Reports / Documentation." />
</svelte:head>

<Production />
<br />
<br />
<div class="wrapper">
  <List data={data} />
</div>
<br />
<br />
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
</style>