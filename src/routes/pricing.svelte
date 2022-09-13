<script lang="ts">
	
	import Header from "$lib/Header.svelte";
	import Header2 from "$lib/platforms/Header.svelte";
	import ClientArea from "$lib/ClientArea.svelte";

  let level = 2
	let records: any[] = []

  // create 10 levels
  for (let i = 0; i <= 10; i++) {
    records.push({
      number: i,
      price: 0 + i * 25,
      activeUsersPerHour: i * 50 || 25,
      requestsPerDay: i * 100000 || 100000,
      requestsPerMonth: i * 100000 * 25 || 100000 * 25
    })
  }
</script>

<svelte:head>
	<title>Pricing - isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<Header />
<div class="wrapper">
  <Header2 />
  <br />
  <br />
  <br />
  <br />
  <div class="container">
    <h1 class="title">Pricing</h1>
    <h2 class="description">Level: {level}</h2>
    <form action="#">
      <p class="range-field">
        <input type="range" id="pricing-slider" min="0" max="10" bind:value={level} />
      </p>
    </form>
    <div>At this pricing level platforms will be allowed to process {records[level].activeUsersPerHour} active users per hour with {records[level].requestsPerDay.toLocaleString("en-US")} requests per day and {records[level].requestsPerMonth.toLocaleString("en-US")} requests per month; all of which will cost the owner ${(records[level].price).toLocaleString("en-US")} per month per platform.</div>
    <br />
    <br />
    <div class="card">
      <div class="row" style="margin: 0;">
        <div class="col s6">
          <div class="card-content">
            <div class="card-title">Start a Trial:</div>
            Test every feature in /istrav/ free forever. Some usage limits apply.
            <br /><br />
            <a href="/client-area" class="btn transparent black-text">Start Your Trial</a>
            <br /><div style="margin-top: 1em; color: #888;">No credit card required.</div>
          </div>
        </div>
        <div class="col s6 demo">
          <div class="card-content">
            <div class="card-title">Grab a Demo:</div>
            Get a one-on-one walk-through of /istrav/ with an in-house expert. 
            <br />
            <br />
            <a href="/contact-me" class="btn red lighten-2">Grab Your Demo</a>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <div class="card-action">
        <div class="row" style="margin: 0;">
          <div class="col s4">
            <ul class="collection">
              <li class="collection-item"><i class="material-icons">check</i> Unlimited users</li>
              <li class="collection-item"><i class="material-icons">check</i> Unlimited topics & posts</li>
              <li class="collection-item"><i class="material-icons">check</i> Unlimited chats</li>
              <li class="collection-item"><i class="material-icons">check</i> Unlimited DB records</li>
            </ul>
          </div>
          <div class="col s4">
            <ul class="collection">
              <li class="collection-item"><i class="material-icons">check</i> SSL encryption for security</li>
              <li class="collection-item"><i class="material-icons">check</i> 3rd Party Integrations</li>
              <li class="collection-item"><i class="material-icons">check</i> Headless API</li>
              <li class="collection-item"><i class="material-icons">check</i> Multiple Websites</li>
            </ul>
          </div>
          <div class="col s4">
            <ul class="collection">
              <li class="collection-item"><i class="material-icons">check</i> Web & Mobile Apps</li>
              <li class="collection-item"><i class="material-icons">check</i> Monolithic Back-End</li>
              <li class="collection-item"><i class="material-icons">check</i> White Labeled</li>
              <li class="collection-item"><i class="material-icons">check</i> Fully Customizable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
  <ClientArea />
</div>
<br />
<br />
<br />
<br />

<style>

  .wrapper {
    min-height: 100vh;
  }

	.title {
		font-weight: 900;
		font-size: 4.5em;
		text-align: left;
		margin: 0;
	}

  .description {
    color: #000;
    font-size: 2.5em;
    margin: 0;
  }

  #pricing-slider {
    border: 0;
  }
	.demo {
		background: #26a69a;
    color: #fff;
	}

  .card-action {
    background: #eee;
    padding: 0.5em 0 0;
  }

  .collection {
    border: 1px solid #aaa;
    border-bottom: 0;
  }
  .collection .collection-item {
    border-bottom: 1px solid #aaa;
    background: #ddd;
    display: flex;
    align-items: center;
  }
  .collection .collection-item i {
    color: #26a69a;
  }
</style>