<script lang="ts">
  import { onMount } from 'svelte';
	
  import Banner from '$lib/Banner.svelte';

	onMount(() => {
		let elms = document.querySelectorAll('.tabs')
		var instance = M.Tabs.init(elms, {});
	})
</script>

<svelte:head>
	<title>Foundation - Client Area - isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<Banner icon="layers" name="Foundation" description="Innovation Management System">
  <a href="/client-area/dashboard" class="breadcrumb">Dashboard</a>
  <a href="/client-area/foundation" class="breadcrumb">Foundation</a>
</Banner>

<div class="navigation z-depth-2">
	<div class="container">
		<ul class="tabs">
			<li class="tab col s2"><a class="active" href="#test1">Values</a></li>
			<li class="tab col s2"><a href="#test2">Mission</a></li>
			<li class="tab col s2"><a href="#test3">Features</a></li>
			<li class="tab col s2"><a href="#test4">Industries</a></li>
			<li class="tab col s2"><a href="#test5">Solutions</a></li>
			<li class="tab col s2"><a href="#test6">Objectives</a></li>
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
		ASDAV 
	</div>
	<div id="test6">
		dscdscdc
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