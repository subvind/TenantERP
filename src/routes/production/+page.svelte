<script lang="ts">
  import { onMount } from 'svelte';
  
  import Production from '$lib/Production.svelte'
  import List from '$lib/production/List.svelte'
  import BannerTop from '$lib/production/BannerTop.svelte'
  import BannerBottom from '$lib/production/BannerBottom.svelte'
  import ClientArea from '$lib/ClientArea.svelte';
  import Footer from '$lib/production/Footer.svelte';
  import About from '$lib/production/About.svelte';

  let deployments: any = []

	onMount(() => {
		fetch('/api/deployments.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        deployments = data
      })
	})
</script>

<svelte:head>
	<title>Production: Mission Critical Deployments - isTrav</title>
	<meta name="description" content="Here is what I am commited to keeping the lights on. // Fully Commited To 100% <>Quality</> This includes ... [Kanban / BDD / Tests / Pipelines];
  Reports / Documentation." />
</svelte:head>

<Production />
<BannerTop />
<div class="wrapper">
  <br />
  <br />
  <br />
  <br />
  <About />
  <br />
  <List data={deployments} />
  <br />
  <br />
  <br />
  <br />
</div>
<BannerBottom />
<Footer />
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
    background-color: #bbbbbb;
    background-image: url("data:image/svg+xml,%3Csvg width='44' height='12' viewBox='0 0 44 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 12v-2L0 0v10l4 2h16zm18 0l4-2V0L22 10v2h16zM20 0v8L4 0h16zm18 0L22 8V0h16z' fill='%23cccccc' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
  }
</style>