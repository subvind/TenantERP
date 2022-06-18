<script>
  import ProjectsSidebar from '$lib/projects/Sidebar.svelte'
	export let app = 'my-account'
	export let active = 'available-sessions'
</script>

{#if app === 'my-account'}
  <ul class="sidenav" style="display: visible;">
    <li><a class="subheader">Settings</a></li>
    <li><a href="/accounts/change-password" class={active === 'change-password' ? 'active' : ''}><i class="material-icons">key</i>Change Password</a></li>
    <li><a href="/accounts/subscription" class={active === 'subscription' ? 'active' : ''}><i class="material-icons">inbox</i>Subscription</a></li>
    <li><a href="/accounts/verify-email" class={active === 'verify-email' ? 'active' : ''}><i class="material-icons">mail</i>Verify Email</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Actions</a></li>
    <li><a href="/client-area/exit" class={active === 'verify-email' ? 'active' : ''}><i class="material-icons">clear</i>Logout</a></li>
    <li><div class="divider"></div></li>
  </ul>
{/if}
    
{#if app === 'dashboard'}
  <ul class="sidenav" style="display: visible;">
    <li><a class="subheader">Main</a></li>
    <li><a href="/client-area/dashboard" class={active === 'dashboard' ? 'active' : ''}><i class="material-icons">dashboard</i>Dashboard</a></li>
    <li><div class="divider"></div></li>
  </ul>
{/if}

{#if app === 'production'}
  <ul class="sidenav" style="display: visible;">
    <li><a class="subheader">Production</a></li>
    <li><a href="/client-area/help-desk" class={active === 'help-desk' ? 'active' : ''}><i class="material-icons">phone_iphone</i>Mobile Apps</a></li>
    <li><a href="/client-area/help-desk" class={active === 'help-desk' ? 'active' : ''}><i class="material-icons">web</i>Web Apps</a></li>
    <li><a href="/client-area/help-desk" class={active === 'help-desk' ? 'active' : ''}><i class="material-icons">dns</i>Back-End Apps</a></li>
    <li><a href="/client-area/help-desk" class={active === 'help-desk' ? 'active' : ''}><i class="material-icons">cloud</i>Global Apps</a></li>
    <li><div class="divider"></div></li>
  </ul>
{/if}

{#if app === 'platforms'}
  <ul class="sidenav" style="display: visible;">
    <li><a class="subheader">Dependencies</a></li>
    <li><a href="/webmaster/dashboard" class={active === 'dashboard' ? 'active' : ''}><i class="material-icons">create_new_folder</i>SQL Databases</a></li>
    <li><a href="/webmaster/dashboard" class={active === 'dashboard' ? 'active' : ''}><i class="material-icons">create_new_folder</i>S3 Storages</a></li>
    <li><a href="/webmaster/dashboard" class={active === 'dashboard' ? 'active' : ''}><i class="material-icons">create_new_folder</i>eMail Services</a></li>
    <li><a href="/webmaster/dashboard" class={active === 'dashboard' ? 'active' : ''}><i class="material-icons">create_new_folder</i>SMS Services</a></li>
    <li><a href="/webmaster/dashboard" class={active === 'dashboard' ? 'active' : ''}><i class="material-icons">create_new_folder</i>User Authentications</a></li>
    <li><a href="/webmaster/dashboard" class={active === 'dashboard' ? 'active' : ''}><i class="material-icons">create_new_folder</i>Domain Names</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Platforms</a></li>
    <li><a href="/client-area/tenant" class={active === 'tenant' ? 'active' : ''}><i class="material-icons">flash_auto</i>Live Production</a></li>
    <li><a href="/client-area/websites" class={active === 'websites' ? 'active' : ''}><i class="material-icons">spellcheck</i>In Staging</a></li>
    <li><a href="/client-area/websites" class={active === 'websites' ? 'active' : ''}><i class="material-icons">text_format</i>Under Development</a></li>
    <li><div class="divider"></div></li>
  </ul>
{/if}

{#if app === 'projects'}
  <ProjectsSidebar />
{/if}

<style>
	.sidenav {
    box-shadow: none;
    width: 100%;
		height: auto;
		transform: none !important;
		position: relative;
		background: transparent;
	}

	.sidenav li a,
	.sidenav li a i {
		color: #fff;
		font-size: 1.2em;;
	}

	.sidenav li a:hover {
		background-color: #111;
	}

	.sidenav li a.active {
		background-color: #64B5F6 !important;
    border-radius: 2em;
	}

	.sidenav .divider {
		background-color: #000;
	}
</style>