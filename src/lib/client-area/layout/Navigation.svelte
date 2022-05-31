<script>
	export let app = 'my-account'
	export let active = 'available-sessions'
</script>

{#if app === 'my-account'}
  <ul class="sidenav" style="display: visible;">
    <li><a class="subheader">Relations</a></li>
    <li><a href="/my-account" class={active === 'available-sessions' ? 'active' : ''}><i class="material-icons">business</i>Companies</a></li>
    <li><a href="/my-account" class={active === 'available-sessions' ? 'active' : ''}><i class="material-icons">contacts</i>Employees</a></li>
    <li><a href="/my-account" class={active === 'available-sessions' ? 'active' : ''}><i class="material-icons">people</i>Team Members</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">My Account</a></li>
    <li><a href="/accounts/change-password" class={active === 'change-password' ? 'active' : ''}><i class="material-icons">key</i>Change Password</a></li>
    <li><a href="/accounts/subscription" class={active === 'subscription' ? 'active' : ''}><i class="material-icons">inbox</i>Subscription</a></li>
    <li><a href="/accounts/verify-email" class={active === 'verify-email' ? 'active' : ''}><i class="material-icons">mail</i>Verify Email</a></li>
    <li><div class="divider"></div></li>
  </ul>
{/if}
    
{#if app === 'dashboard'}
  <ul class="sidenav" style="display: visible;">
    <li><a class="subheader">Main</a></li>
    <li><a href="/admin-control-panel/dashboard" class={active === 'dashboard' ? 'active' : ''}><i class="material-icons">dashboard</i>Dashboard</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">A. Launch Checklist</a></li>
    <li><a href="/admin-control-panel/website" class={active === 'website' ? 'active' : ''}><i class="material-icons">looks_one</i>Define Problem</a></li>
    <li><a href="/admin-control-panel/social-groups" class={active === 'social-groups' ? 'active' : ''}><i class="material-icons">looks_two</i>Find Solutions</a></li>
    <li><a href="/admin-control-panel/admins" class={active === 'admins' ? 'active' : ''}><i class="material-icons">looks_3</i>Connect The Two</a></li>
    <li><a href="/admin-control-panel/admins" class={active === 'admins' ? 'active' : ''}><i class="material-icons">looks_4</i>What Apps Fit</a></li>
    <li><a href="/admin-control-panel/admins" class={active === 'admins' ? 'active' : ''}><i class="material-icons">looks_5</i>3rd Party APIs</a></li>
    <li><a href="/admin-control-panel/admins" class={active === 'admins' ? 'active' : ''}><i class="material-icons">looks_6</i>Domain Name(s)</a></li>
    <li><a class="subheader">B. Launch Back-End</a></li>
    <li><a href="/admin-control-panel/users" class={active === 'users' ? 'active' : ''}><i class="material-icons">looks_one</i>SQL Database</a></li>
    <li><a href="/admin-control-panel/users" class={active === 'users' ? 'active' : ''}><i class="material-icons">looks_two</i>S3 Storage</a></li>
    <li><a href="/admin-control-panel/users" class={active === 'users' ? 'active' : ''}><i class="material-icons">looks_3</i>eMail & SMS</a></li>
    <li><a href="/admin-control-panel/users" class={active === 'users' ? 'active' : ''}><i class="material-icons">looks_4</i>User Authentication</a></li>
    <li><a href="/admin-control-panel/users" class={active === 'users' ? 'active' : ''}><i class="material-icons">looks_5</i>Deploy /platform/</a></li>
    <li><a class="subheader">C. Launch Front-End(s)</a></li>
    <li><a href="/admin-control-panel/users" class={active === 'users' ? 'active' : ''}><i class="material-icons">looks_one</i>Clone Projects</a></li>
    <li><a href="/admin-control-panel/users" class={active === 'users' ? 'active' : ''}><i class="material-icons">looks_two</i>Custom Code</a></li>
    <li><a href="/admin-control-panel/users" class={active === 'users' ? 'active' : ''}><i class="material-icons">looks_3</i>Deploy [1, 2, 3, etc]</a></li>
    <li><a class="subheader">D. Launch Success</a></li>
    <li><a href="/admin-control-panel/users" class={active === 'users' ? 'active' : ''}><i class="material-icons">looks_one</i>Production</a></li>
    <li><a href="/admin-control-panel/users" class={active === 'users' ? 'active' : ''}><i class="material-icons">looks_two</i>Status Pages</a></li>
    <li><a href="/admin-control-panel/users" class={active === 'users' ? 'active' : ''}><i class="material-icons">looks_3</i>Testing End 2 End</a></li>
    <li><a href="/admin-control-panel/users" class={active === 'users' ? 'active' : ''}><i class="material-icons">looks_3</i>Alerts</a></li>
    <li><div class="divider"></div></li>
  </ul>
{/if}

{#if app === 'production'}
  <ul class="sidenav" style="display: visible;">
    <li><a class="subheader">Production</a></li>
    <li><a href="/client-area/help-desk" class={active === 'help-desk' ? 'active' : ''}><i class="material-icons">assignment_ind</i>Mobile Apps</a></li>
    <li><a href="/client-area/help-desk" class={active === 'help-desk' ? 'active' : ''}><i class="material-icons">assignment_ind</i>Web Apps</a></li>
    <li><a href="/client-area/help-desk" class={active === 'help-desk' ? 'active' : ''}><i class="material-icons">assignment_ind</i>Backend Apps</a></li>
    <li><a href="/client-area/help-desk" class={active === 'help-desk' ? 'active' : ''}><i class="material-icons">assignment_ind</i>Serverless Apps</a></li>
    <li><div class="divider"></div></li>
  </ul>
{/if}

{#if app === 'platforms'}
  <ul class="sidenav" style="display: visible;">
    <li><a class="subheader">Dependencies</a></li>
    <li><a href="/webmaster/dashboard" class={active === 'dashboard' ? 'active' : ''}><i class="material-icons">dashboard</i>SQL Databases</a></li>
    <li><a href="/webmaster/dashboard" class={active === 'dashboard' ? 'active' : ''}><i class="material-icons">dashboard</i>S3 Storages</a></li>
    <li><a href="/webmaster/dashboard" class={active === 'dashboard' ? 'active' : ''}><i class="material-icons">dashboard</i>eMail Services</a></li>
    <li><a href="/webmaster/dashboard" class={active === 'dashboard' ? 'active' : ''}><i class="material-icons">dashboard</i>SMS Services</a></li>
    <li><a href="/webmaster/dashboard" class={active === 'dashboard' ? 'active' : ''}><i class="material-icons">dashboard</i>User Authentications</a></li>
    <li><a href="/webmaster/dashboard" class={active === 'dashboard' ? 'active' : ''}><i class="material-icons">dashboard</i>Domain Names</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Platforms</a></li>
    <li><a href="/client-area/tenant" class={active === 'tenant' ? 'active' : ''}><i class="material-icons">flash_auto</i>Live Production</a></li>
    <li><a href="/client-area/websites" class={active === 'websites' ? 'active' : ''}><i class="material-icons">spellcheck</i>In Staging</a></li>
    <li><a href="/client-area/websites" class={active === 'websites' ? 'active' : ''}><i class="material-icons">text_format</i>Under Development</a></li>
    <li><div class="divider"></div></li>
  </ul>
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