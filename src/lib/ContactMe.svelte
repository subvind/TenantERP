<script>
  import { onMount } from "svelte";

  let name = ''
  let subject = ''
  let email = ''
  let message = ''

  function contactMe () {
    alert("Let's talk: travis.burandt@gmail.com ... thank you!")
  }

  function sendEmail(event) {
    event.preventDefault()
    window.open(`mailto:test@example.com?to=travis.burandt@gmail.com&cc=${email}&subject=${name}: ${subject}&body=${message}`);
  }


  onMount(() => {
    window['M'].updateTextFields();
  })
</script>

<div class="card">
  <div class="card-image">
    <img src="bolder.jpeg">
    <span class="card-title">Contact Me</span>
  </div>
  <div class="card-content">
    <p>
      If you like the work I'm doing around here <span style="text-decoration: underline;">consider becoming an isTrav <a href="/clients/join">Client</a> today</span>. If your looking for talent print out my <a href="/resume">Resume</a>, send my <a href="https://github.com/trabur">GitHub</a> to the coding team, and <a href="#" on:click={() => contactMe()}>contact me</a> for hire.
    </p>
  </div>
  <form>
    <div class="card-action" style="padding: 1em;">
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="John Smith" id="name" type="text" class="validate" bind:value={name}>
          <label for="name">Name</label>
        </div>
        <div class="input-field col s6">
          <input id="email" type="email" class="validate" bind:value={email}>
          <label for="email">Email Address</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input placeholder="" id="subject" type="text" class="validate" bind:value={subject}>
          <label for="subject">Subject</label>
        </div>
      </div>
      <div class="row" style="margin-bottom: 0;">
        <div class="input-field col s12">
          <textarea placeholder="" id="message" class="materialize-textarea" bind:value={message}></textarea>
          <label for="message">Message</label>
        </div>
      </div>
    </div>
    <div class="card-action">
      <a href="#" on:click={(e) => sendEmail(e)}>Send Message</a>
    </div>
  </form>
</div>

<style>
  .card {
		max-width: 500px;
    margin: 0 auto;
    text-align: left;
  }
  .card .card-title {
    color: #fff;
    text-shadow: 0 0 0.2em #000;
  }

  .signature {
    max-width: 50%;
  }
</style>