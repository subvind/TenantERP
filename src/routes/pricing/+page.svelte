<script lang="ts">
	import PricingHeader from "$lib/pricing/Header.svelte";
	import FAQ from "$lib/pricing/FAQ.svelte";
  import Benifits from "$lib/pricing/Benifits.svelte";
  import About from "$lib/About.svelte";
  import ClientArea from "$lib/ClientArea.svelte";
  import CustomWork from "$lib/pricing/CustomWork.svelte";
  import Reason from "$lib/pricing/Reason.svelte";
  import Calculator from "$lib/pricing/Calculator.svelte";
  import Footer from "$lib/pricing/Footer.svelte";

  let level = 2
	let records: any[] = []

  // create 10 levels
  for (let i = 0; i <= 10; i++) {
    records.push({
      number: i,
      price: 0 + i * 19,
      activeUsersPerHour: i * 50 || 25,
      requestsPerDay: i * 100000 || 50000,
      requestsPerMonth: i * 100000 * 25 || 100000 * 25 / 2
    })
  }
</script>

<svelte:head>
	<title>Membership - STARTS AT $19 PER MONTH - isTrav</title>
	<meta name="description" content="Free forever up until you reach the Fair Source 25 (v0.9). license agreement limit. Checkout our Pricing Level slider below to calculate usage limits (active users, requests per day, requests per mounth) with expected costs per month." />
</svelte:head>

<main>
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
  <Footer />
  <br />
  <br />
  <br />
  <br />
  <ClientArea />
  <br />
  <br />
  <br />
  <br />
</main>

<style>
  main {
    padding-top: 4em;
  }
  .wrapper {
    min-height: 100vh;
  }
</style>