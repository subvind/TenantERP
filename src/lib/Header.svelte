<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
  <nav>
		<div class="nav-wrapper">
			<a href="//community.istrav.com" class="btn right" style="margin: 1em;">community</a>
      <a href="/" class="brand-logo center">isTrav</a>
			<ul id="nav-mobile" class="left hide-on-med-and-down">
				<li class:active={$page.url.pathname === '/scramble'}>
					<a sveltekit:prefetch href="/scramble">Scramble</a>
				</li>
				<li class:active={$page.url.pathname === '/geo'}>
					<a sveltekit:prefetch href="/geo">Geo</a>
				</li>
				<li class:active={$page.url.pathname === '/consensus'}>
					<a sveltekit:prefetch href="/consensus">Consensus</a>
				</li>
				<li class:active={$page.url.pathname === '/chains'}>
					<a sveltekit:prefetch href="/chains">Chains</a>
				</li>
				<li class:active={$page.url.pathname === '/ai-bot'}>
					<a sveltekit:prefetch href="/ai-bot">AI Bot</a>
				</li>
			</ul>
  </nav>
	<div>
</header>
