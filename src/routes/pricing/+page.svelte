<script lang="ts">
	import PricingHeader from "$lib/pricing/Header.svelte";
	import FAQ from "$lib/pricing/FAQ.svelte";
  import Benifits from "$lib/pricing/Benifits.svelte";
  import About from "$lib/About.svelte";
  import ClientArea from "$lib/ClientArea.svelte";
  import CustomWork from "$lib/pricing/CustomWork.svelte";
  import Reason from "$lib/pricing/Reason.svelte";
  import Calculator from "$lib/pricing/Calculator.svelte";

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
	<title>Membership Pricing - isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<div class="wrapper">
  <PricingHeader />
  <br />
  <br />
  <br />
  <br />
  <Calculator level={level} records={records} />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <Benifits />
  <Reason />
  <FAQ />
</div>
<br />
<br />
<br />
<br />
<br />
<CustomWork />
<br />
<br />
<br />
<br />
<About />
<br />
<br />
<br />
<ClientArea />
<br />
<br />
<br />
<br />

<style>
  .wrapper {
    min-height: 100vh;
  }
</style>