<script>
  import { onMount } from "svelte";

  let name = ''
  let subject = ''
  let email = ''
  let message = ''

  function contactMe () {
    alert("Let's talk: travis.burandt@gmail.com ... cheers!")
  }

  function sendEmail(event) {
    event.preventDefault()
    window.open(`mailto:travis.burandt@gmail.com?to=travis.burandt@gmail.com&cc=${email}&subject=${name}: ${subject}&body=${message}`);
  }


  onMount(() => {
    window['M'].updateTextFields();
  })
</script>

<div class="container">
  <h1 class="title">
    Contact
  </h1>
  <img src="bolder.jpeg" class="image" alt="Travis Burandt">
</div>
<div class="card">
  <div class="card-content">
    <p style="font-size:  1.2em;">
      If you like the work I'm doing around here consider <a href="/client-area">subscribing</a> to isTrav <span style="text-decoration: underline;">today</span>. If your looking for talent print out my <a href="/resume">istrav.com/resume</a>, send my <a href="https://github.com/trabur">GitHub</a> to the coding team, and <a href="#" on:click={() => contactMe()}>reach out</a> to me for hire.
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
        <div class="input-field col s12" style="margin-bottom: 0;">
          <textarea placeholder="" id="message" class="materialize-textarea" bind:value={message}></textarea>
          <label for="message">Message</label>
        </div>
      </div>
    </div>
    <div class="card-action">
      <a class="btn red lighten-2" href="#!" on:click={(e) => sendEmail(e)}>Send Message</a>
    </div>
  </form>
</div>

<style>
	.title {
		font-weight: 900;
		font-size: 4.5em;
		text-align: left;
		margin: 0;
	}
  .image {
    width: 100%;
    border: 1em solid #000;
  }
  .card {
		max-width: 500px;
    margin: 0 auto;
    text-align: left;
  }
  
</style>