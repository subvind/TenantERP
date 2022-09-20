<script lang="ts">
  import Header from "$lib/apps/Header.svelte";
  import List from "$lib/apps/List.svelte";

  export let data: any;

	let apps = [
		{ 
			name: 'Main Website',
			website: 'istrav.com',
			url: '/apps/istrav.com'
		},
		{ 
			name: 'Community Platforms',
			website: 'istrav.net',
			url: '/apps/istrav.net'
		},
		{ 
			name: 'Professionals',
			website: 'istrav.pro',
			url: '/apps/istrav.pro'
		},
		{ 
			name: 'Team of Bots',
			website: 'istrav.top',
			url: '/apps/istrav.top'
		},
		{ 
			name: 'Live Streaming',
			website: 'istrav.one',
			url: '/apps/istrav.one'
		},
		{ 
			name: 'System Headquarters',
			website: 'istrav.dev',
			url: '/apps/istrav.dev'
		},
	]
</script>

<svelte:head>
	<title>Application: {data.appId} - isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<Header />
<List apps={apps} selected={data.appId} />
<br />
<br />
<br />
<br />