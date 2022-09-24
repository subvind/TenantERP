<div class="banner">
  <div class="map"></div>
  <br />
  <br />
  <br />
  <br />
  <div class="content">
    <div class="description">
      Mahatma Gandhi
    </div>
    <div class="quote">"Be the change you wish to see in the world."</div>
  </div>
  <br />
  <br />
  <br />
  <br />
</div>

<style>
  .banner {
    color: #ccc;
    background: #000;
    text-align: center;
    overflow: hidden;
    position: relative;
    padding: 2em 0;
  }

  .banner .map {
    background-image: url('/graphics/map.jpg');
    opacity: 0.2;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-position: center;
    background-size: cover;
    margin: -8em;
    z-index: 0;
  }

  .banner .content {
    z-index: 1;
    position: relative;
  }

  .quote {
    margin: 0 auto;
    text-align: center;
    font-size: 4.5em;
    color: #fff;
    font-weight: 900;
    max-width: 600px;
  }
  .description {
    /* font-size: 1em; */
    margin: 0 auto;
    text-align: center;
    font-size: 1.5em;
  }
</style>