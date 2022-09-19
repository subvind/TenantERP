<div class="row">
  <div class="col s12 m1"></div>
  <div class="col s12 m10">
    <div class="container" style="position: relative;">
      <div class="powered-by">
        <h1 class="ribbon">
          <div class="ribbon-content">The Official isTrav</div>
        </h1>
        <div class="padded">
          <br />
          <div class="names">Manifesto, Strategy, Vision, Values, Status, Contribute, Target</div>
          <br />
        </div>
      </div>
      <div class="slanted">
        <div class="slanted-left"></div>
        <div class="slanted-right"></div>
      </div>
    </div>
  </div>
  <div class="col s12 m1"></div>
</div>

<style>
  .container {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
  }

  .powered-by {
    /* padding: 1em; */
    background: #000;
  }

  .padded {
    padding: 0 2em;
    position: relative;
    z-index: 1;
    color: #ccc;
    text-align: left;
  }

  .names {
    text-align: center;
    font-size: 2em;
    font-weight: 900;
  }

  /**
   * ribbon
   */
  .ribbon {
    font-size: 1.5em;
    /* This ribbon is based on a 16px font side and a 24px vertical rhythm. I've used em's to position each element for scalability. If you want to use a different font size you may have to play with the position of the ribbon elements */

    width: 100%;
      
    z-index: 0;
    position: relative;
    background: #ba89b6;
    color: #fff;
    text-align: center;
    margin: 2em auto 3em; /* Based on 24px vertical rhythm. 48px bottom margin - normally 24 but the ribbon 'graphics' take up 24px themselves so we double it. */
  }
  .ribbon-content {
    z-index: 100;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #444;

    padding: 1em 0 2em 0;
    margin-top: -3em;
  }
  .ribbon:before, .ribbon:after {
    content: "";
    position: absolute;
    display: block;
    bottom: -1em;
    border: 1.5em solid #333;
    z-index: -1;
  }
  .ribbon:before {
    left: -2em;
    border-right-width: 1.5em;
    border-left-color: transparent;
  }
  .ribbon:after {
    right: -2em;
    border-left-width: 1.5em;
    border-right-color: transparent;
  }
  .ribbon .ribbon-content:before, .ribbon .ribbon-content:after {
    content: "";
    position: absolute;
    display: block;
    border-style: solid;
    border-color: #111 transparent transparent transparent;
    bottom: -1em;
    z-index: 4;
  }
  .ribbon .ribbon-content:before {
    left: 0;
    border-width: 1em 0 0 1em;
  }
  .ribbon .ribbon-content:after {
    right: 0;
    border-width: 1em 1em 0 0;
  }

  /**
   * end of powered by
   */
  .slanted {
    /* width: 100%; */
    display: flex;
    left: 0;
    right: 0;
    position: absolute;
    z-index: 0;
  }

  .slanted-left {
    margin-top: -75px;
    flex: 1;
    height: 100px;
    -webkit-transform: skewy(-6deg);
    transform: skewy(-6deg);
    background-color: #000;
  }

  .slanted-right {
    margin-top: -75px;
    flex: 1;
    height: 100px;
    -webkit-transform: skewy(6deg);
    transform: skewy(6deg);
    background-color: #000;
  }
</style>