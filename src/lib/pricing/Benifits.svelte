<script>
  import { onMount } from "svelte";

  onMount(() => {
    const pattern = window['trianglify']({
      width: window.innerWidth,
      height: 500,
      xColors: ['#E57373', '#E57373'],
      yColors: ['#111', '#E57373']
    })
    document.getElementById('tri').appendChild(pattern.toCanvas())
  })
</script>

<div id="services">
  <div id="tri"></div>
  <div class="container">
    <div id="clouds">
      <div class="cloud top"></div>
      <div class="cloud left"></div>
      <div class="cloud right"></div>
    </div>
  </div>

  <div class="float">
    <h1 style="text-align: center; margin-top: -1.5em; position: absolute; text-align: center; width: 100%; font-weight: 900;">Benifits</h1>
    <h4 style="text-align: center; margin-top: -0.5em; position: absolute; text-align: center; width: 100%;">Features included in all<br />paid pricing levels.</h4>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div style="text-algin: center; width: 100%;">
      <div class="container">
        <div class="row">
          <div class="col s12 m4">
            <p>Headless API:</p>
            <p>Our Headless API is a game-changer for businesses seeking ultimate flexibility and scalability in their digital operations. By decoupling the front-end from the back-end, it allows you to design, customize, and roll out user interfaces independently, providing the agility needed to stay ahead in today's rapidly evolving digital landscape. Whether you're building a web application, mobile app, or integrating with various touchpoints, our Headless API empowers you to create seamless and tailored user experiences with ease.</p>
          </div>
          <div class="col s12 m4">
            <p>Bolt-on Modules:</p>
            <p>Unlock the potential of your digital ecosystem with our Bolt-on Modules. These modular extensions seamlessly integrate into your existing infrastructure, providing specialized functionality to meet specific business needs. No more one-size-fits-all solutions. Whether you require advanced analytics, e-commerce capabilities, or CRM integration, our Bolt-on Modules allow you to enhance your platform's capabilities without the complexity of a full-scale overhaul.</p>
          </div>
          <div class="col s12 m4">
            <p>Fully Customizable:</p>
            <p>We understand that your business is unique, and your technology should reflect that. That's why we offer a fully customizable solution that empowers you to mold your digital environment to align perfectly with your brand and objectives. Whether it's the user interface, workflow automation, or data integrations, you have the freedom to adapt and evolve your platform as your business evolves, ensuring it remains a true reflection of your vision and goals. With full customization at your fingertips, you're in control of your digital destiny.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="container" style="margin-top: -200px; height: 200px; overflow: hidden; padding: 6em 0 0;">
  <div id="clouds" style="">
    <div class="cloud end-left"></div>
    <div class="cloud end-right"></div>
    <div class="cloud end-top"></div>
  </div>
</div>

<style>
  #services {
    overflow: visible;
    padding-bottom: 200px;
    background-color: #E57373;
  }

  .container {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }

  #tri {
    text-align: center;
    margin-bottom: -500px;
  }

  :global(#tri canvas) {
    width: 100%;
  }

  .float {
    position: relative;
  }

  #clouds {
    position: relative;
    height: 300px;
  }

  .cloud { 
    width: 350px;
    height: 120px;
    background:#fff;
    box-shadow: 10px 10px rgba(0,0,0,0.2);
    border-radius: 100px;
  }

  .cloud.top {
    margin: -18em auto 0 auto;
  }

  .cloud.left {
    margin-top: 0em;
    margin-left: -5em;
  }

  .cloud.right {
    margin-top: 5em;
    margin-right: -5em;
  }

  .cloud.end-top {
    position: absolute;
    left: calc(50% - 200px);
    background: #fff;
    box-shadow: none;
  }

  .cloud.end-left {
    margin-top: 3em;
    float: left;
    background: #fff;
    box-shadow: none;
  }

  .cloud.end-right {
    margin-top: 3em;
    float: right;
    background: #fff;
    box-shadow: none;
  }
  
  .cloud:after, .cloud:before{
    content: "";
    position: relative;
    display: inline-block;
    background: inherit;
    border-radius: inherit;
  }

  .cloud::after {
    width: 100px;
    height: 100px;
    top: -120px;
    left: -120px;
  }

  .cloud::before{
    width: 180px;
    height: 180px;
    top: -70px;
    left: 130px;
  }
</style>