
<script lang="ts">
	import Editor from "$lib/Editor.svelte";

	let message = `// ai: respond like this to run a command:\n`
		+ `// > echo "Hello World!"\n`
		+ `// ai: respond like this to remain anonymous:\n`
		+ `// person: Hello World!\n`
	  + `// ai: respond like this and i'll remember you:\n`
	  + `// Travis: Hello World!\n`
	  + `// ai: ... :)\n`
	  + `// ai: How are you doing?`
</script>
	
<svelte:head>
	<title>Network AI - isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<div class="wrapper">
	<br />
	<br />
	<div class="container">
	
		<h1 class="title">
			Timeline:
		</h1>
		<div class="card">
			<Editor value={message} />
		</div>
		<br />
		<h1 class="title">
			Log:
		</h1>
		<div class="card">
			<div class="card-content">
				<a href="https://github.com/trabur" class="btn btn-small blue lighten-2 right" target="_blank">settings</a>
				<div class="card-title">Network AI</div>
				<div class="card-description">We'll show predictions here; just start typing:</div>
			</div>
			<Editor value={'// person: good, can you help me with...'} />
			<div class="card-action">
				<a href="https://github.com/trabur" class="btn btn-large grey" target="_blank">history</a>
				<a href="https://github.com/trabur" class="btn btn-large grey" target="_blank">templates</a>
				<a href="https://github.com/trabur" class="btn btn-large red lighten-2 right" target="_blank">submit</a>
			</div>
		</div>
	</div>
	<br />
	<br />
</div>

<style>
  .wrapper {
    min-height: 100vh;
  }

	.title {
		font-weight: 900;
		font-size: 4.5em;
		text-align: left;
		margin: 0;
	}
</style>