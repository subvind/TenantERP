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
    <p>Welcome to my website! Feel free to take a look around. Scramble is an Enigma Machine replica except built in the browser. Consensus is the Raft Algorithm running in the cloud/serverless. AI Bot is my assistant. Community or /community_folder/, is a social groups application which is software that I'm selling over at communityfolder.com. I have lots of projects and stuff to do I guess :)</p>
  </div>
  <div class="card-action">
    <a href="#" on:click={() => contactMe()}>contact me</a>
  </div>
</div>

<style>
  .card {
    width: 400px;
    margin: 0 auto;
    text-align: left;
  }
  .card .card-title {
    color: #fff;
    text-shadow: 0 0 0.2em #000;
  }
</style>