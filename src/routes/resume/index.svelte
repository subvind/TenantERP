<script lang="ts">
  import { onMount } from "svelte";



	function iframeLoaded () {
		setTimeout(() => {
			var iFrameID: any = document.getElementById('resume');
			if (iFrameID) {
				console.log('iframe loaded', iFrameID.contentWindow.document)
				// here you can make the height, I delete it first, then I make it again
				iFrameID.height = "";
				iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + "px";
			}
		}, 0)
	}
</script>

<svelte:head>
	<title>Travis Burandt's Resume - isTrav</title>
	<meta name="description" content="If your looking for talent print out my Resume, send my GitHub to the coding team, and contact me for hire." />
</svelte:head>

<iframe id="resume" src="https://2008-2015.istrav.com" frameborder="0" title="The Resume of Travis Burandt" on:load={() => iframeLoaded()}></iframe>

<style>
	#resume {
		width: 100%;
		margin: 0;
		margin-bottom: -0.4em;
		min-height: calc(100vh - 64px - 64px);
		overflow: auto;
	}
</style>