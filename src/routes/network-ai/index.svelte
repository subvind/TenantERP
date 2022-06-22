
<script lang="ts">
	import { onMount } from "svelte";
	import Editor from "$lib/Editor.svelte";

	let messages: any = [
		`// ai: respond like this to run a command:`,
		`// > echo "Hello World!"`,
		`// ai: respond like this to remain anonymous:`,
		`// person: Hello World!`,
	  `// ai: respond like this and i'll remember you:`,
	  `// Travis: Hello World!`,
	  `// ai: ... :)`,
	  `// ai: How are you doing?`,
	]
	let message = messages.join('\n')
	let log  = '// person: good, can you help me with...'

	let socket: any
	onMount(() => {
		socket = io('http://localhost:8888');

		socket.on('connect', function() {
			console.log('Connected');

			socket.emit('my-event', { test: 'test' });
		});
		socket.on('my-event', function(data) {
			console.log('event', data);
		});
		socket.on('exception', function(data) {
			console.log('event', data);
		});
		socket.on('disconnect', function() {
			console.log('Disconnected');
		});
	})

	function submit () {
		message = `${message}\n${log}`
		socket.emit('my-event', log);
		log = ''
		onChangeTimeline(message)
		onChangeLog(log)
	}

	let onChangeTimeline: any;
	let onChangeLog: any;
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
			<Editor bind:value={message} bind:onChange={onChangeTimeline} />
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
			<Editor bind:value={log} bind:onChange={onChangeLog} />
			<div class="card-action">
				<a href="https://github.com/trabur" class="btn btn-large grey" target="_blank">history</a>
				<a href="https://github.com/trabur" class="btn btn-large grey" target="_blank">templates</a>
				<button on:click={() => submit()} class="btn btn-large red lighten-2 right" target="_blank">submit</button>
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