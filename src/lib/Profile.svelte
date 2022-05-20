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
    <p>Welcome to isTrav! <br />My name is Travis. Feel free to take a look around. The backend for this website is running in the cloud/serverless. Scramble is inspired by the Enigma Machine except I fixed it's flaw and added more rotors. Geo is for managing networks of scramblers in a geospatial way. Consensus is the Raft Consensus Algorithm running over a geo scrambled network. Chains is where I'm building Markov Chains for fake content generation and process flows. AI Bot is my assistant. Community or /community_folder/ is a social groups application which is software that I'm selling over at communityfolder.com and it's free for communities up until 25 active users. Outside of that I don't do social media. <br /><br />Anyways, I have lots of projects and<br/> stuff to do I guess :)</p>
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