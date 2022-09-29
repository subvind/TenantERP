<script lang="ts">
  import Banner from '$lib/Banner.svelte';
  import Client from '$lib/client-area/dashboard/Client.svelte';
  import Idea from '$lib/client-area/dashboard/Innovate.svelte';
	import Namespace from '$lib/client-area/dashboard/Namespace.svelte';
  import Team from '$lib/client-area/dashboard/Team.svelte';
  import User from '$lib/client-area/dashboard/User.svelte';
</script>

<svelte:head>
	<title>Dashboard - Client Area - isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<Banner icon="dashboard" name="Client Area" description="Innovation Management System">
  <a href="/" class="breadcrumb">isTrav</a>
  <a href="/client-area/ideas" class="breadcrumb">Dashboard</a>
</Banner>

<br />
<br />
<div class="container">
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
<br />
<br />