<script lang="ts">
  import { onMount } from 'svelte';
	
  import Banner from '$lib/Banner.svelte';

	onMount(() => {
		let elms = document.querySelectorAll('.tabs')
		var instance = M.Tabs.init(elms, {});
	})
</script>

<svelte:head>
	<title>System - Client Area - isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<Banner icon="traffic" name="System" description="Innovation Management System">
  <a href="/client-area/dashboard" class="breadcrumb">Dashboard</a>
  <a href="/client-area/manage" class="breadcrumb">System</a>
</Banner>

<div class="navigation z-depth-2">
	<div class="container">
		<ul class="tabs">
			<li class="tab col s3"><a class="active" href="#test1">Deployments</a></li>
			<li class="tab col s3"><a href="#test2">Access Keys</a></li>
			<li class="tab col s2"><a href="#test3">Clients</a></li>
			<li class="tab col s2"><a href="#test4">Reports</a></li>
			<li class="tab col s2"><a href="#test5">Billing</a></li>
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
	<div id="test5">
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