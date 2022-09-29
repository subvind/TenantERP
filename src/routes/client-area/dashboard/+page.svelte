<script lang="ts">
  import { onMount } from 'svelte';
	
  import Banner from '$lib/Banner.svelte';
  import Client from '$lib/client-area/dashboard/Client.svelte';
  import Idea from '$lib/client-area/dashboard/Innovate.svelte';
	import Namespace from '$lib/client-area/dashboard/Namespace.svelte';
  import Team from '$lib/client-area/dashboard/Team.svelte';
  import User from '$lib/client-area/dashboard/User.svelte';

	onMount(() => {
		let elms = document.querySelectorAll('.tabs')
		var instance = M.Tabs.init(elms, {});
	})
</script>

<svelte:head>
	<title>Dashboard - Client Area - isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<Banner icon="dashboard" name="Client Area" description="Innovation Management System">
  <a href="/" class="breadcrumb">isTrav</a>
  <a href="/client-area/ideas" class="breadcrumb">Dashboard</a>
</Banner>

<div class="navigation z-depth-2">
	<div class="container">
		<ul class="tabs">
			<li class="tab col s3"><a class="active" href="#test1">Setup</a></li>
			<li class="tab col s3"><a href="#test2">Foundation</a></li>
			<li class="tab col s3"><a href="#test3">Innovate</a></li>
			<li class="tab col s3"><a href="#test4">Manage</a></li>
		</ul>
	</div>
</div>
<br />
<br />
<div class="container">
	<div id="test1">
		<div class="row">
			<div class="col m6">
				<User />
				<br />
				<Client />
				<br />
				<Idea />
			</div>
			<div class="col m6">
				<Namespace />
				<br />
				<Team />
			</div>
		</div>
	</div>
	<div id="test2">Test 2</div>
	<div id="test3">Test 3</div>
	<div id="test4">Test 4</div>
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