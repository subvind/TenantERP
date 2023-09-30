<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
  })
</script>

<div class="wrapper z-depth-5">
  <div class="container">
    <br />
    <br />
    <br />
    <br />
    <h1 class="title">
      Frequently Asked<br /> Questions
    </h1>
    <div class="row" style="margin: 0 -0.6em;">
      <div class="col m6">
        <ul class="collapsible">
          <li>
            <div class="collapsible-header">How is active users per hour calculated?</div>
            <div class="collapsible-body">We take the total users over a 24 hour period and divide that by 24 to receive an average number of users per hour.</div>
          </li>
          <li>
            <div class="collapsible-header">How do you enforce usage limits?</div>
            <div class="collapsible-body">We don't shut down your website. We send a notification and give you 48 hours to fix your maximum pricing level with us. If you continue to go over that limit for another 48 hours then we start to throttle usage.</div>
          </li>
          <li>
            <div class="collapsible-header">What is branding removal?</div>
            <div class="collapsible-body">We remove the "powered by subvind" branding from the bottom of each page.</div>
          </li>
          <li>
            <div class="collapsible-header">What is an organization?</div>
            <div class="collapsible-body">A single website with one members list. It may have many modules assigned to it.</div>
          </li>
          <li>
            <div class="collapsible-header">What is an module?</div>
            <div class="collapsible-body">A component that plugs in to your website via subdomain.</div>
          </li>
        </ul>
      </div>
      <div class="col m6">
        <ul class="collapsible">
          <li>
            <div class="collapsible-header">How are pricing levels configured?</div>
            <div class="collapsible-body">We allow users to set a maximim and a minimum level that they wish to be billed at.</div>
          </li>
          <li>
            <div class="collapsible-header">When does billing occur?</div>
            <div class="collapsible-body">Once a month.</div>
          </li>
          <li>
            <div class="collapsible-header">What is a pricing level?</div>
            <div class="collapsible-body">It enables branding removal. It allows a certain number of active users per hour and a certain number of views per day & views per month for an organization.</div>
          </li>
          <li>
            <div class="collapsible-header">How many organizations does a pricing level support?</div>
            <div class="collapsible-body">Just one. If you want to subscribe multiple organizations then you will need to purchase multiple pricing levels with us.</div>
          </li>
        </ul>
      </div>
    </div>
    <p style="text-align: center; font-size: 1.3em; margin: 0;">Have any questions of your own? <a href="/contact-me">istrav.com/contact-me</a> so I can help.</p>
    <br />
    <br />
    <br />
    <br />
  </div>
</div>

<style>
  .wrapper {
    position: relative;
    border-top: 1em solid #ccc;
    border-bottom: 1em solid #ccc;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23cccccc' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
  }
  .title {
    font-weight: 900;
    font-size: 4.5em;
    text-align: left;
    margin: 0;
    color: #000;
  }
  .collapsible {
    background: #ccc;
  }
</style>