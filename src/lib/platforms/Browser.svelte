<script>
  let folder = 'istrav'
  let url = `https://communityfolder.com`
</script>

<div class="header">
  <br />
  <br />
  <br />
  <h1 class="title">Launch Today</h1>
  <h2 class="description">A simple multi-tenant platform<br /> for the modern web.</h2>
  <br />
  <div style="text-align: center;">
    <a href="/pricing-levels" class="btn btn-large blue lighten-2">view pricing levels</a>
  </div>
  <br />
  <br />
  <br />
  <div class="browser">
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
  <br />
  <br />
  <br />
  <br />
  <div class="container">
    <div style="max-width: 600px; margin: 0 auto;">
      <h3 class="demo-title">Bulletin Board System</h3>
      <h2 class="description" style="color: #aaa;">Community software that is online, conversing, and interactive.</h2>
    </div>
    <br />
    <button class="waves-effect waves-light btn grey" class:active={url === 'https://communityfolder.com'} on:click={() => url = `https://communityfolder.com`}>home</button>
    <button class="waves-effect waves-light btn grey" class:active={url === `https://${folder}.communityfolder.com`} on:click={() => url = `https://${folder}.communityfolder.com`}>activity feed</button>
    <button class="waves-effect waves-light btn grey" class:active={url === `https://${folder}.communityfolder.com/forums`} on:click={() => url = `https://${folder}.communityfolder.com/forums`}>forums</button>
    <button class="waves-effect waves-light btn grey" class:active={url === `https://${folder}.communityfolder.com/blogs`} on:click={() => url = `https://${folder}.communityfolder.com/blogs`}>blogs</button>
    <button class="waves-effect waves-light btn grey" class:active={url === `https://${folder}.communityfolder.com/calendars`} on:click={() => url = `https://${folder}.communityfolder.com/calendars`}>calendars</button>
    <button class="waves-effect waves-light btn grey" class:active={url === `https://${folder}.communityfolder.com/downloads`} on:click={() => url = `https://${folder}.communityfolder.com/downloads`}>downloads</button>
    <button class="waves-effect waves-light btn grey" class:active={url === `https://${folder}.communityfolder.com/storefronts`} on:click={() => url = `https://${folder}.communityfolder.com/storefronts`}>storefronts</button>
    <button class="waves-effect waves-light btn grey" class:active={url === `https://${folder}.communityfolder.com/leaderboards`} on:click={() => url = `https://${folder}.communityfolder.com/leaderboards`}>leaderboards</button>
    <button class="waves-effect waves-light btn grey" class:active={url === `https://${folder}.communityfolder.com/referrals`} on:click={() => url = `https://${folder}.communityfolder.com/referrals`}>referrals</button>
    <button class="waves-effect waves-light btn grey" class:active={url === `https://${folder}.communityfolder.com/rules`} on:click={() => url = `https://${folder}.communityfolder.com/rules`}>rules</button>
  </div>
  <br />
  <br />
  <br />
  <br />
</div>

<style>
  .active {
    background: #fff !important;
    color: #000 !important;
  }

  .header {
    background-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23cccccc' fill-opacity='1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  .title {
    font-weight: 900;
    color: #000;
    font-size: 3em;
    margin: 0;
    text-align: center;
  }

  .description {
    color: #000;
    font-size: 2.5em;
    margin: 0;
    text-align: center;
  }

  .demo-title {
    font-weight: 900;
    color: #eee;
    font-size: 3em;
    margin: 0;
    text-align: center;
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
    box-shadow: 0 0 1em #666;
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
    height: 490px;
    padding: 0;
    overflow: hidden; 
  }
  
  #frame {
    width: 1200px;
    height: 660px;
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
    text-align: center;
    background: #000;
  }

  .panel button {
    margin: 0.2em;
  }
</style>