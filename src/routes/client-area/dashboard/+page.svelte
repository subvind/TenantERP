<script lang="ts">
  import Client from '$lib/client-area/dashboard/Client.svelte';
	import Namespace from '$lib/client-area/dashboard/Namespace.svelte';
  import Team from '$lib/client-area/dashboard/Team.svelte';
  import User from '$lib/client-area/dashboard/User.svelte';
</script>

<svelte:head>
	<title>Dashboard - Client Area - isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<br />
<br />
<div class="container">
	<div class="row">
		<div class="col m6">
			<User />
			<br />
			<Client />
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