<script lang="ts">

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

<div class="container">
	<br />
	<br />
	<div style="text-align: center;">
		<h1>Resume</h1>
		<a href="#" class="btn large red lighten-2">2008-2015</a>
		<a href="#" class="btn large red lighten-2">2016-NOW</a>
	</div>
	<br />
	<br />
	<div style="margin: 0 1em;">
		<iframe id="resume" src="https://2008-2015.istrav.com" frameborder="0" title="The Resume of Travis Burandt" on:load={() => iframeLoaded()}></iframe>
		<nav class="grey">
			<div class="nav-wrapper">
				<div style="text-align: center;">
					<a href="#" class="btn large black">DOWNLOAD</a>
					<a href="#" class="btn large black">WEBSITE</a>
					<a href="#" class="btn large black">PDF</a>
				</div>
	
			</div>
		</nav>
	</div>
</div>

<br />
<br />
<style>
	h1 {
		margin: 0;
	}
	#resume {
		width: 100%;
		margin: 0;
		margin-bottom: -0.4em;
		min-height: calc(75vh);
		z-index: 10;
		border: 1em solid #000;
	}
</style>