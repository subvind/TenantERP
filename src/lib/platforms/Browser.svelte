<script lang="ts">
    import { onMount } from "svelte";

  let folder = 'meta'
  let url = `https://erpnomy.subvind.com`
  let active = ''
  let display = ''
  let description = ''

  function toggle(value: any) {
    active = value
    switch (active) {
      case 'homenomy':
        display = 'nomy.HOME'
        url = `https://homenomy.subvind.com`
        description = 'Easily engage and empower your community.<br><br> Load balance traffic by creating a splash page landing or homepage that is optimized for every user. No code needed.'
        break;
      case 'erpnomy':
        display = 'nomy.ERP'
        url = `https://erpnomy.subvind.com`
        description = 'Easily create and manage your e-commerce business.<br><br> Accept orders, manage products and sell online using your very own storefront in minutes. No code needed.'
        break;
      case 'desknomy':
        display = 'nomy.DESK'
        url = `https://desknomy.subvind.com`
        description = 'Easily create and manage your productized service.<br><br> Accept monthly subscription plans, manage tasks and communicate using your very own client area in minutes. No code needed.'
        break;
      case 'tubenomy':
        display = 'nomy.TUBE'
        url = `https://tubenomy.subvind.com`
        description = 'Easily promote and sell your goods and services.<br><br> Notify subscribers, manage playlists, and showcase videos using your very own catalog in minutes. No code needed.'
        break;
    }
  }

  onMount(() => {
    // It retrieves the hash value from the URL and assigns it to the variable.
    function getHashValue() {
      return window.location.hash.substring(1); // Removes the "#" character
    }
    let hash = getHashValue() || 'homenomy';

    toggle(hash)
  })
</script>

<div class="header">
  <br />
  <br />
  <h1 class="title">µSaaS Modules</h1>
  <div class="description" style="color: #000;">Micro software as a service modules that<br />bolt-on to your website via subdomain.</div>
  <br />
  <div class="browser z-depth-5">
    <div class="toolbar">
      <div class="column left">
        <span class="dot" style="background:#ED594A;"></span>
        <span class="dot" style="background:#FDD800;"></span>
        <span class="dot" style="background:#5AC05A;"></span>
      </div>
      <div class="column middle">
        <input type="text" value={url}>
      </div>
      <div class="column right">
        <div style="float:right">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </div>
  
    <div class="content">
      <div id="wrap">
        <iframe id="frame" title="demo" src={url} frameborder="0"></iframe>
      </div>
    </div>
  </div>
</div>

<div class="panel">
  <div class="container">
    <a href="#" class="btn-floating btn-large waves-effect waves-light red lighten-2 platform-btn"><i class="material-icons">arrow_upward</i></a>
    <div class="line"></div>
    <a href="https://underwind.solutions">
      <img src="/anchor.png" alt="underwind.solutions" style="width: 100px; margin-bottom: -2em;">
    </a>
    <div class="line"></div>
    <h1 class="demo-title">{display}</h1>
    <button class="waves-effect waves-light btn grey" class:active={active === 'homenomy'} on:click={() => toggle('homenomy')}>homenomy</button>
    <button class="waves-effect waves-light btn grey" class:active={active === 'erpnomy'} on:click={() => toggle('erpnomy')}>erpnomy</button>
    <button class="waves-effect waves-light btn grey" class:active={active === `desknomy`} on:click={() => toggle('desknomy')}>desknomy</button>
    <button class="waves-effect waves-light btn grey" class:active={active === `tubenomy`} on:click={() => toggle('tubenomy')}>tubenomy</button>
    <br />
    <br />
    <div style="max-width: 600px; margin: 0 auto;">
      <div class="description" style="color: #ccc;">{@html description}</div>
    </div>
    <br />
    <a href={url} class="btn btn-small black lighten-2 white-text">{url}</a>
    <br />
    <br />
  </div>
</div>

<style>
  .platform-btn {
    margin: -1.9em;
    position: absolute;
  }

  .active {
    background: #fff !important;
    color: #000 !important;
  }

  .header {    
    background-color: #cccccc;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23bbbbbb' fill-opacity='1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  .title {
    font-weight: 900;
    color: #000;
		font-size: 4.5em;
    margin: 0;
    text-align: center;
  }

  .description {
    color: #ccc;
    font-size: 1.5em;
    margin: 0;
    text-align: center;
  }

  .demo-title {
    font-weight: 900;
    color: #eee;
    margin: 0;
    text-align: center;
    margin-bottom: 0.2em;
    border: 0.25em solid #ee6e73;
  }

  .line {
    border-left: 1em solid #ee6e73;
    height: 4em;
    margin: 0 auto;
    width: 0;
  }

  /* The browser window */
  .browser {
    background: #eee;
    border: 3px solid #f1f1f1;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom: 0;
    max-width: 900px;
    margin: 0 auto;
  }
  
  /* Container for columns and the top "toolbar" */
  .toolbar {
    padding: 12px 10px 0 10px;
    background: #f1f1f1;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  
  /* Create three unequal columns that floats next to each other */
  .column {
    float: left;
  }
  
  .left {
    width: 15%;
  }
  
  .right {
    width: 10%;
  }
  
  .middle {
    width: 75%;
  }
  
  /* Clear floats after the columns */
  .toolbar:after {
    content: "";
    display: table;
    clear: both;
  }
  
  /* Three dots */
  .dot {
    margin-top: 4px;
    height: 12px;
    width: 12px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
  }
  
  /* Style the input field */
  input[type=text] {
    width: 100%;
    border-radius: 3px;
    border: none;
    background-color: white;
    margin-top: -8px;
    height: 25px;
    color: #666;
    padding: 5px;
  }
  
  /* Three bars (hamburger menu) */
  .bar {
    width: 17px;
    height: 3px;
    background-color: #aaa;
    margin: 3px 0;
    display: block;
  }
  
  /* Page content */
  .content {
    background: #fff;
    padding: 0;
    overflow: hidden;
  }

  #wrap {
    width: 900px;
    height: 440px;
    padding: 0;
    overflow: hidden; 
  }
  
  #frame {
    width: 1200px;
    height: 590px;
    border: 0;
  }

  #frame {
    -ms-zoom: 0.75;
    -moz-transform: scale(0.75);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.75);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.75);
    -webkit-transform-origin: 0 0;
  }

  .panel {
    padding: 2em;
    padding-top: 0;
    text-align: center;
    color: #eee;
    background-color: #222222;
    background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23333333' fill-opacity='1'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  .panel button {
    margin: 0.2em;
  }
</style>