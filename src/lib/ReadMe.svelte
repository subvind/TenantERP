<script>
  function contactMe () {
    alert("Let's talk: travis.burandt@gmail.com ... thank you!")
  }
</script>

<div class="card">
  <div class="card-image">
    <img src="travis.jpeg">
    <span class="card-title">Travis Burandt</span>
  </div>
  <div class="card-content">
    <p>
      <span style="font-weight: bold;">
        Hello There!
        <br />My name is Travis. I am a full stack developer. This place is my personal portfolio and ground base for launching <a href="/solutions">Solutions</a> to <a href="/production">Production</a> that will install in just 1-click or chat with <a href="/my-assistant">My Assistant</a> who is an AI bot.
      </span>
      <br /><br /><i>My goal is to establish a single monolithic database or <a href="/platforms">Platform</a> that all my <a href="/projects">Projects</a> use and connect to. Like Supabase and a CMS except for applications. Which entails quite a bit of things so look further into <a href="/about">About</a> for more information on that.</i>
      <br /><br />These applications or <a href="/apps">Apps</a> are targeted for either a mobile phone, a frontend website, or a backend server. Some applications may target all or multiple devices. Because everything is multi-tenant all apps are compatible with each other under a single platform.
      <br /><br />This website, <a href="//istrav.com">isTrav</a> runs 100% cloud/serverless using CloudFlare's wrangler repository and it's frontend is served by Vercel. So it has amazing uptime, expensive, and less likely to have code rot.
      <br /><br />My platform, <a href="//communityfolder.com" target="_blank">/community_folder/</a> runs 100% on the server and can deploy to Heroku or Kubernetes. It is fully customizable and white-labeled so any developer may fork it. It has a Fair Source 25 (v0.9) license so it's free up until you have 25 active users.
      <br /><br />Your platform, <a href="#">/for_example/</a> runs just like my <a href="/platforms">Platform</a> except you have complete access to run it as you wish for as long as you follow the license agreement.
      <br /><br /><i>My long term goal is work with OpenAI and build a bot that knows how to code and write programs. It will be able to look at a platform's mono database and know how to use it. Essentially a programmer's assistant. </i>
      <br /><br />If you like the work I'm doing around here <span style="text-decoration: underline;">consider becoming an isTrav <a href="/partners/join">Partner</a> today</span>. If your looking for talent print out my <a href="/resume">Resume</a>, send my <a href="https://github.com/trabur">GitHub</a> to the coding team, and <a href="#" on:click={() => contactMe()}>Contact Me</a> for hire.
      <br /><br />Anyways, lots of things todo!
      <br /> // i'll see you in the <a href="//community.istrav.com">Community</a> :)
      <br />~/README.md
    </p>
  </div>
  <div class="card-action">
    <a href="#" on:click={() => contactMe()}>contact me</a>
  </div>
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
</style>