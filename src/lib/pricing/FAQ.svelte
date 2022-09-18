<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
  })
</script>

<div class="wrapper">
  <div class="container">
    <br />
    <br />
    <br />
    <br />
    <h1 class="title">
      Frequently Asked<br /> Questions
    </h1>
    <div class="row">
      <div class="col m6">
        <ul class="collapsible">
          <li>
            <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
          </li>
        </ul>
      </div>
      <div class="col m6">
        <ul class="collapsible">
          <li>
            <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
          </li>
        </ul>
      </div>
    </div>
    <p style="text-align: center; font-size: 1.3em; margin: 0;">Have any questions of your own? <a href="/contact-me">istrav.com/contact-me</a> for so I can help.</p>
    <br />
    <br />
    <br />
    <br />
  </div>
</div>

<style>
  .wrapper {
    box-shadow: 0 0 8px #000;
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