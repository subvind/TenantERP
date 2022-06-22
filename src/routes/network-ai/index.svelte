
<script lang="ts">
	import Editor from "$lib/Editor.svelte";

	let message = `// say something to the Network AI\nfunction testing() {\n  return 42\n}`
</script>
	
<svelte:head>
	<title>Network AI - isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<div class="container">
	<div class="card">
		<Editor value={message} />

	</div>
</div>