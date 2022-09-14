<script lang="ts">
	let index: number = 2
	let links = [
		{
			download: 'https://github.com/trabur/2008-2015',
			website: 'https://2008-2015.istrav.com',
			height: '2500px',
			pdf: 'https://2008-2015.istrav.com/travis-burandt-resume.pdf'
		},
		{
			download: 'https://github.com/trabur/2016-2021',
			website: 'https://2016-2021.istrav.com',
			height: '1000px',
			pdf: 'https://2016-2021.istrav.com/travis-burandt-resume.pdf'
		},
		{
			download: 'https://github.com/trabur/2022-now',
			website: 'https://2022-now.istrav.com',
			height: '1000px',
			pdf: 'https://2022-now.istrav.com/travis-burandt-resume.pdf'
		},
	]
</script>

<svelte:head>
	<title>Travis Burandt's Resume - isTrav</title>
	<meta name="description" content="(Resume of a FSD) [Full Stack Developer] -Travis Burandt-" />
</svelte:head>

<div class="container" style="width: 1100px;">
	<br />
	<br />
	<div style="text-align: center;">
		<h3 style="font-weight: 900;">(Resume of a FSD)</h3>
		<span style="font-size: 4em; font-weight: 900; border-top: 0.2em solid #ee6e73; border-bottom: 0.2em solid #ee6e73;">Full Stack Developer</span>
		<h3 style="font-weight: 900;">-Travis Burandt-</h3>
		<a href="#" on:click={() => index = 0} class={`btn btn-large ${index === 0 ? 'red lighten-2' : 'grey'}`}>2008-2015</a>
		<a href="#" on:click={() => index = 1} class={`btn btn-large ${index === 1 ? 'red lighten-2' : 'grey'}`}>2016-2021</a>
		<a href="#" on:click={() => index = 2} class={`btn btn-large ${index === 2 ? 'red lighten-2' : 'grey'}`}>2022-NOW</a>
	</div>
	<br />
	<br />
	<div style="margin: 0 1em;">
		<iframe id="resume" src={links[index].website} height={links[index].height} scrolling="no" frameborder="0" title="The Resume of Travis Burandt"></iframe>
		<nav class="grey">
			<div class="nav-wrapper">
				<div style="text-align: center;">
					<a href={links[index].download} class="btn large black">DOWNLOAD</a>
					<a href={links[index].website} class="btn large black">WEBSITE</a>
					<a href={links[index].pdf} class="btn large black">PDF</a>
				</div>
			</div>
		</nav>
	</div>
</div>

<style>
	h3 {
		margin: 0;
	}
	#resume {
		width: 100%;
		margin: 0;
		margin-bottom: -0.4em;
		min-height: calc(75vh);
		border: 1em solid #000;
		overflow: hidden;
	}
</style>