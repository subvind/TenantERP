<script lang="ts">
  import { onMount } from 'svelte';
	
  import Banner from '$lib/Banner.svelte';

	onMount(() => {
		let elms = document.querySelectorAll('.tabs')
		var instance = M.Tabs.init(elms, {});
	})
</script>

<svelte:head>
	<title>Innovate - Client Area - isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<Banner icon="trending_up" name="Innovate" description="Innovation Management System">
  <a href="/client-area/dashboard" class="breadcrumb">Dashboard</a>
  <a href="/client-area/innovate" class="breadcrumb">Innovate</a>
</Banner>

<div class="navigation z-depth-2">
	<div class="container">
		<ul class="tabs">
			<li class="tab col s3"><a class="active" href="#test1">Platforms</a></li>
			<li class="tab col s3"><a href="#test2">Tenants</a></li>
			<li class="tab col s3"><a href="#test3">Chatbots</a></li>
			<li class="tab col s3"><a href="#test4">Apps</a></li>
		</ul>
	</div>
</div>
<br />
<br />
<div class="container">
	<div id="test1">
		hello world
	</div>
	<div id="test2">
		123
	</div>
	<div id="test3">
		asd
	</div>
	<div id="test4">
		34545
	</div>
</div>
<br />
<br />

<style>
	.navigation {
		background: #fff;
	}

	.tabs {
		background: #fff;
	}
</style>