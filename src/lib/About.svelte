<script>
  import Branding from "./Branding.svelte";
</script>

<div class="top">
  <img class="evolution" src="/graphics/evolution.png" width="50%" alt="">
</div>
<div class="wrapper">
  <div id="honeycomb">
    <div class="container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style="text-align: center;">
        <a href="/about">
          <img src="/anchor.png" alt="isTrav" style="width: 200px; -webkit-filter: invert(1); filter: invert(1);">
        </a>
        <br />
        <br />
        <Branding />
        <br />
        <a href="/about" class="btn btn-large black white-text">view details</a>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</div>

<style>
  .wrapper {
    margin: 0;
    background: linear-gradient(#26a69a, #000);
    border-top: 1em solid #26a69a;
    border-bottom: 1em solid #000;
  }

  #honeycomb {
    width: 100%;
    height: 100%;
    background: center url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgb(38,166,154)' viewBox='0 0 100 169.5'%3E%3Cpolygon points='50,34.75 93.5,59.75 93.5,109.75 50,134.75 6.5,109.75 6.5,59.75'%3E%3C/polygon%3E%3Cpolygon points='0,-50 43.5,-25 43.5,25 0,50 -43.5,25 -43.5,-25'%3E%3C/polygon%3E%3Cpolygon points='100,-50 143.5,-25 143.5,25 100,50 56.5,25 56.5,-25'%3E%3C/polygon%3E%3Cpolygon points='0,119.5 43.5,144.5 43.5,194.5 0,219.5 -43.5,194.5 -43.5,144.5'%3E%3C/polygon%3E%3Cpolygon points='100,119.5 143.5,144.5 143.5,194.5 100,219.5 56.5,194.5 56.5,144.5'%3E%3C/polygon%3E%3C/svg%3E");
    background-size: 30px;
  }
  
  .top {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  .evolution {
    width: 50%;
    margin-bottom: -0.5em;;
  }

  .title {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    color: #000;
    font-size: 3em;
    background: #26a69a;
    padding: 0.5em;
    border: 5px solid #000;
  }
</style>