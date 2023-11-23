<script lang="ts">
	import { page } from '$app/stores';

	let name = 'isTrav'
	let letters: any = null
	let timer: any = null

	function arrayRotate(arr: any, reverse: boolean) {
		if (reverse) arr.unshift(arr.pop());
		else arr.push(arr.shift());
		return arr;
	}

	function go() {
		// console.log('go')
		timer = setInterval(() => {
			let rotate: string[] = letters || name.split('')
			letters = arrayRotate(rotate, true)
			name = letters.join('')
		}, 500)
	}

	function stop() {
		// console.log('stop')
		clearInterval(timer)
	}
</script>

<header on:mouseenter={() => go()} on:mouseleave={() => stop()}>
	<div class="row top">
		<div class="col s2 m2 l1" style="background: #111; text-align: center;">
			<nav class="white">
				<div class="nav-wrapper" style="text-align: center;">
					<ul style="height: inherit;">
						<li style="height: inherit; float: none;">
							<a href="https://istrav.com" style="height: inherit; justify-content: center; display: flex; align-items: center;">
								<img src="/anchor.png" alt="isTrav Subvind" style="height: 45px;">
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
		<div class="col s10 m10 l11">
			<nav class="red lighten-2">
				<div class="nav-wrapper">
					<a href="/" class="brand-logo center">{name}</a>
					<a href="https://subvind.com" class="btn black white-text left hide-on-med-and-down" style="margin: 1em;">subvind</a>
					<!-- <a href="//istrav.pro" class="btn right white black-text " style="margin: 1em 0.5em;">pro</a>
					<a href="/ideal-talent" class="btn right white black-text " style="margin: 1em 0.5em;">it</a> -->
					<ul id="nav-mobile" class="left hide-on-med-and-down">
						<li>
							<a href="https://client-area.istrav.com">Client Area</a>
						</li>
						<li class:active={$page.url.pathname.startsWith('/pricing')}>
							<a sveltekit:prefetch href="/pricing">Pricing</a>
						</li>
					</ul>
					<ul id="nav-mobile" class="right hide-on-med-and-down">
						<li class:active={$page.url.pathname.startsWith('/solutions')}>
							<a sveltekit:prefetch href="/solutions">GET STARTED!</a>
						</li>
					</ul>
				<div>
			</nav>
		</div>
	</div>
</header>

<style>
  .top {
    z-index: 1000;
    position: fixed;
    right: 0;
    left: 0;
    margin: 0;
    padding: 0;
  }
  .top > .col {
    margin: 0;
    padding: 0;
  }
  .top > .col .row {
    margin: 0;
  }
</style>