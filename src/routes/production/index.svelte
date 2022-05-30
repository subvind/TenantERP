
<script lang="ts">
  import Production from '$lib/Production.svelte'
  import List from '$lib/production/List.svelte'

  let data = [
    {
      name: 'istrav.com',
      type: 'website', // mobile, website, backend, serverless
      url: 'https://istrav.com',
      git: 'https://github.com/trabur/istrav.com',
      pipeline: 'https://github.com/trabur/istrav.com/actions',
      statusPage: 'https://stats.uptimerobot.com/1nz1rt61VL/791840169',
      kanban: 'https://trello.com/b/LWqVCN14/istravcom',
    },
    {
      name: 'communityfolder.com',
      type: 'website',
      url: 'https://communityfolder.com',
      git: 'https://github.com/trabur/communityfolder.com',
      pipeline: 'https://github.com/trabur/communityfolder.com/actions',
      statusPage: 'https://stats.uptimerobot.com/1nz1rt61VL/791899626',
      kanban: 'https://trello.com/b/xS3zTAnC/communityfoldercom',
    },
    {
      name: 'istrav.communityfolder.com',
      type: 'website',
      url: 'https://istrav.communityfolder.com',
      git: 'https://github.com/trabur/communityfolder-frontend',
      pipeline: 'https://github.com/trabur/communityfolder-frontend/actions',
      statusPage: 'https://stats.uptimerobot.com/1nz1rt61VL/791899644',
      kanban: 'https://trello.com/b/Iv6f0rrj/istravcommunityfoldercom',
    },
    {
      name: 'communityfolder.herokuapp.com',
      type: 'backend',
      library: '',
      url: 'https://communityfolder.herokuapp.com',
      git: 'https://github.com/trabur/communityfolder-backend',
      pipeline: 'https://github.com/trabur/communityfolder-backend/actions',
      statusPage: 'https://stats.uptimerobot.com/1nz1rt61VL/791899655',
      kanban: 'https://trello.com/b/nOIdEOSO/communityfolderherokuappcom',
      restApi: 'https://documenter.getpostman.com/view/129924/Uz5Aqy9r',
    },
  ]
</script>

<Production />
<br />
<br />
<div class="wrapper">
  <List data={data} />
</div>
<br />
<br />

<style>
  .wrapper {
    min-height: 100vh;
  }
</style>