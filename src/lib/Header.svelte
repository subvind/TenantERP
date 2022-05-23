<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
  <nav>
		<div class="nav-wrapper">
			<a href="//community.istrav.com" class="btn right" style="margin: 1em;">community</a>
      <a href="/" class="brand-logo center">isTrav</a>
			<ul id="nav-mobile" class="right hide-on-med-and-down">
				<li class:active={$page.url.pathname === '/about'}>
					<a sveltekit:prefetch href="/about">About</a>
				</li>
				<li class:active={$page.url.pathname === '/my-assistant'}>
					<a sveltekit:prefetch href="/my-assistant">My Assistant</a>
				</li>
			</ul>
			<ul id="nav-mobile" class="left hide-on-med-and-down">
				<li class:active={$page.url.pathname === '/production'}>
					<a sveltekit:prefetch href="/production">Production</a>
				</li>
				<li class:active={$page.url.pathname === '/solutions'}>
					<a sveltekit:prefetch href="/solutions">Solutions</a>
				</li>
				<li class:active={$page.url.pathname === '/apps'}>
					<a sveltekit:prefetch href="/apps">Apps</a>
				</li>
				<li class:active={$page.url.pathname === '/platforms'}>
					<a sveltekit:prefetch href="/platforms">Platforms</a>
				</li>
				<li class:active={$page.url.pathname === '/projects'}>
					<a sveltekit:prefetch href="/projects">Projects</a>
				</li>
			</ul>
  </nav>
	<div>
</header>
