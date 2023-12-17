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
  import Production from "$lib/Production.svelte";

  let level = 2
	let records: any[] = [
    {
      level: 0,
      price: 0,
      storage: 1,
      requestsPerMonth: 25000
    },
    {
      level: 1,
      price: 19,
      storage: 10,
      requestsPerMonth: 250000
    }
  ]

  // create 10 levels
  for (let i = 1; i <= 9; i++) {
    records.push({
      level: i + 1,
      price: i * 250,
      storage: i * 100,
      requestsPerMonth: i * 3000000
    })
  }
</script>

<svelte:head>
	<title>Membership - STARTS AT $19 PER MONTH - isTrav Subvind</title>
	<meta name="description" content="Free forever up until you reach the Fair Source 25 (v0.9). license agreement limit. Checkout our Pricing Level slider below to calculate usage limits (active users, requests per day, requests per mounth) with expected costs per month." />
</svelte:head>

<main>
  <div class="wrapper">
    <Production />
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