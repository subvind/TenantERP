<script>
	export let app = 'my-account'
	export let active = 'available-sessions'
</script>

{#if app === 'my-account'}
  <ul class="sidenav" style="display: visible;">
    <li><a class="subheader">Main</a></li>
    <li><a href="/my-account" class={active === 'available-sessions' ? 'active' : ''}><i class="material-icons">person</i>Usernames</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Settings</a></li>
    <li><a href="/accounts/change-password" class={active === 'change-password' ? 'active' : ''}><i class="material-icons">key</i>Change Password</a></li>
    <li><a href="/accounts/subscription" class={active === 'subscription' ? 'active' : ''}><i class="material-icons">inbox</i>Subscription</a></li>
    <li><a href="/accounts/verify-email" class={active === 'verify-email' ? 'active' : ''}><i class="material-icons">mail</i>Verify Email</a></li>
    <li><div class="divider"></div></li>
  </ul>
{/if}
    
{#if app === 'admin-control-panel'}
  <ul class="sidenav" style="display: visible;">
    <li><a class="subheader">Main</a></li>
    <li><a href="/admin-control-panel/dashboard" class={active === 'dashboard' ? 'active' : ''}><i class="material-icons">dashboard</i>Dashboard</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Admin Control Panel</a></li>
    <li><a href="/admin-control-panel/website" class={active === 'website' ? 'active' : ''}><i class="material-icons">public</i>Website</a></li>
    <li><a href="/admin-control-panel/social-groups" class={active === 'social-groups' ? 'active' : ''}><i class="material-icons">group</i>Social Groups</a></li>
    <li><a href="/admin-control-panel/admins" class={active === 'admins' ? 'active' : ''}><i class="material-icons">verified_user</i>Admins</a></li>
    <li><a href="/admin-control-panel/users" class={active === 'users' ? 'active' : ''}><i class="material-icons">person</i>Users</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Feedback</a></li>
    <li><a href="/admin-control-panel/help-desk" class={active === 'help-desk' ? 'active' : ''}><i class="material-icons">assignment_ind</i>Help Desk</a></li>
    <li><a href="/admin-control-panel/support" class={active === 'support' ? 'active' : ''}><i class="material-icons">assignment_turned_in</i>Support</a></li>
    <li><div class="divider"></div></li>
  </ul>
{/if}

{#if app === 'client-area'}
  <ul class="sidenav" style="display: visible;">
    <li><a class="subheader">Main</a></li>
    <li><a href="/client-area/dashboard" class={active === 'dashboard' ? 'active' : ''}><i class="material-icons">dashboard</i>Dashboard</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Client Area</a></li>
    <li><a href="/client-area/tenant" class={active === 'tenant' ? 'active' : ''}><i class="material-icons">business</i>Tenant</a></li>
    <li><a href="/client-area/websites" class={active === 'websites' ? 'active' : ''}><i class="material-icons">public</i>Websites</a></li>
    <li><a href="/client-area/license-keys" class={active === 'license-keys' ? 'active' : ''}><i class="material-icons">key</i>License Keys</a></li>
    <li><a href="/client-area/bills" class={active === 'bills' ? 'active' : ''}><i class="material-icons">attach_money</i>Bills</a></li>
    <li><a href="/client-area/charges" class={active === 'charges' ? 'active' : ''}><i class="material-icons">receipt</i>Charges</a></li>
    <li><a href="/client-area/clients" class={active === 'clients' ? 'active' : ''}><i class="material-icons">supervisor_account</i>Clients</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Feedback</a></li>
    <li><a href="/client-area/help-desk" class={active === 'help-desk' ? 'active' : ''}><i class="material-icons">assignment_ind</i>Help Desk</a></li>
    <li><a href="/client-area/support" class={active === 'support' ? 'active' : ''}><i class="material-icons">assignment_turned_in</i>Support</a></li>
    <li><div class="divider"></div></li>
  </ul>
{/if}

{#if app === 'webmaster'}
  <ul class="sidenav" style="display: visible;">
    <li><a class="subheader">Main</a></li>
    <li><a href="/webmaster/dashboard" class={active === 'dashboard' ? 'active' : ''}><i class="material-icons">dashboard</i>Dashboard</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Webmaster</a></li>
    <li><a href="/webmaster/platform" class={active === 'platform' ? 'active' : ''}><i class="material-icons">folder</i>Platform</a></li>
    <li><a href="/webmaster/tenants" class={active === 'tenants' ? 'active' : ''}><i class="material-icons">business</i>Tenants</a></li>
    <li><a href="/webmaster/websites" class={active === 'websites' ? 'active' : ''}><i class="material-icons">public</i>Websites</a></li>
    <li><a href="/webmaster/amounts" class={active === 'amounts' ? 'active' : ''}><i class="material-icons">local_offer</i>Amounts</a></li>
    <li><a href="/webmaster/license-keys" class={active === 'license-keys' ? 'active' : ''}><i class="material-icons">key</i>License Keys</a></li>
    <li><a href="/webmaster/bills" class={active === 'bills' ? 'active' : ''}><i class="material-icons">payment</i>Bills</a></li>
    <li><a href="/webmaster/receipt" class={active === 'receipt' ? 'active' : ''}><i class="material-icons">receipt</i>Charges</a></li>
    <li><a href="/webmaster/masters" class={active === 'masters' ? 'active' : ''}><i class="material-icons">contacts</i>Masters</a></li>
    <li><a href="/webmaster/accounts" class={active === 'accounts' ? 'active' : ''}><i class="material-icons">folder_shared</i>Accounts</a></li>
    <li><a href="/webmaster/applications" class={active === 'applications' ? 'active' : ''}><i class="material-icons">apps</i>Applications</a></li>
    <li><a href="/webmaster/themes" class={active === 'themes' ? 'active' : ''}><i class="material-icons">color_lens</i>Themes</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Feedback</a></li>
    <li><a href="/webmaster/help-desk" class={active === 'help-desk' ? 'active' : ''}><i class="material-icons">assignment_ind</i>Help Desk</a></li>
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