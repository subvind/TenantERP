<script>
  import ClientArea from "$lib/ClientArea.svelte";
	import ReadMe from "$lib/ReadMe.svelte";
	import Map from "$lib/Map.svelte";
	import ContactMe from "$lib/ContactMe.svelte";
	import Welcome from "$lib/Welcome.svelte";
</script>

<svelte:head>
	<title>About - isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>

<Welcome />
<br />
<br />
<ReadMe />
<br />
<br />
<br />
<br />
<Map />
<br />
<br />
<br />
<br />
<div class="container">
  <div class="row">
    <div class="col m8">
      <h1 class="title">About</h1>
      <div class="card box">
        <div class="card-content">
          <h3 style="margin-top: 0;">Manifesto</h3>
          isTrav's goal is to solve problems using the right solutions, turn ideas into apps that spark joy to the end user, and then to keep production live with what works best.

          <br />
          <br />
          <h4>Software as a Service:</h4>
          Consider using isTrav for solving your next big idea. Checkout our client area, go through our getting started process, and we'll help you get the code that you need running on your own servers! 
          
          <h5>Fair Source 25 (v0.9).</h5>
          <quote>
            Not open source. Not closed source. The Fair Source License allows everyone to see the source code and makes the software free to use for a limited number of users in your organization. It offers some of the benefits of open source while preserving the ability to charge for the software. https://fair.io
          </quote>
          <h5>Code Limits & Pricing</h5>
          In order for a programmer to be rightfuly compensated for their work isTrav limits code usage to clients by the number of requests the code processes daily, the number of requests the code processes monthly, and the number of active users in the past hour the code has had. It is the clients resposibility to leave our reporting code alone and keep usage stats legit. It is our resposibility to manage, collect, save, bill, and keep clients up to date on code usage permission.


          <h5>Activation License Key</h5>
          So there is a reports collecting process that we do on our side. We then generate and verify product activation license keys for every platform (more about platforms later) which reveals whos code is genuine or whos is not and to what extent. Remember keys and locks are really just for show. It is mearly a way of saying and telling someone we don't want you here. After all anyone with bolt cutters could bypass that lock if they really wanted to. Fortunately, our cort systems treat that act of UI as fact and then use it against you with terms like "willing, knowingly, and premeditated" ... not to mention the evidence left behind. If an attacker persists then I guess nature would take over and it would come down to survival of the fitest // or perhaps, "2001: A Deep Space Odyssey"; monkey with the only stick situation. 

          <ul class="bullets">
            <li>
              <a href="https://www.youtube.com/watch?v=zmX7K8noikE">https://www.youtube.com/watch?v=zmX7K8noikE</a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=esnMDtMysHo">https://www.youtube.com/watch?v=esnMDtMysHo</a>
            </li>
          </ul>

          Anyways ... the code we are selling on istrav.com is a monolithic platform called /community_folder/ which integrates with other websites and mobile apps.

          <h5>What is a platform?</h5>
          In order to sell this code we'll need some sort of Key Management Service or KMS and that's partly what istrav-global does under the hood. The other part is integration with a payment processor called Stripe so code may be billed in a monthly subscription like model. Then lastly is integration with the code we are selling itself; referred to as platforms.

          <h5>Pricing Levels</h5>
          These platforms have levels and each level has a limit to how many active users it may hold, the number of daily requests, and monthly requests it may process. These platforms are also containers or nestjs driven and are fairly stable as they may also run in the cloud. So we'll need an even more redundant system for our base and that's serverless CloudFlare Workers! 

          <h5>Global Workers</h5>
          These Workers are used with an equally powerful Key Value or KV database. The workers themselves are javascript isolates that have a 0ms cold start and the code runs in over 250 strategic locations around the globe. This istrav-global along with a Single Page App or SPA that runs in a Content Delivery Network or CDN makes isTrav one crazy scalable, performant, and highly available application for client area and business operations. Thus ensuring our clients recieve no downtime.

          <h5>Back-End Server</h5>
          So why not code and deploy every thing to the cloud as Workers? Well, isTrav's monolithic platform or /community_folder/ is deployable to heroku, kubernetes, and bare metal; it is not as redundant as 250 serverless locations however it's much more cost effective.

          <h5>
            Subscription Management
          </h5>
          "Stripe Billing is the fastest way for your business to bill customers with subscriptions or invoices. Capture more revenue, support new products or business models, and accept recurring payments globally." - Stripe

          <h5>
            Key Management Service (KMS)
          </h5>
          "Key management refers to management of cryptographic keys in a cryptosystem. This includes dealing with the generation, exchange, storage, use, crypto-shredding and replacement of keys. It includes cryptographic protocol design, key servers, user procedures, and other relevant protocols." - Wikipedia

          <h5>License Key Workflow</h5>
          <ul class="bullets">
            <li>
              isTrav triggers a usage report once per 1 minute
            </li>
            <li>
              isTrav keeps a platform's current level that represents what is being charged at this moment
            </li>
            <li>
              isTrav keeps a platform's max level that represents what the client is willing to be charged
            </li>
            <li>
              clients will be warned if a platforms current level is near the max level at their discretion
            </li>
            <li>
              isTrav generates new license keys for platforms once per 1 day or on a change of level status
            </li>
            <li>
              platforms know which license keys are legit and which are not legit because they are signed and verifiable by isTrav
            </li>
            <li>
              platform's task scheduling runs a cron once per 1 minute to update the platform's config with the authentic license key from isTrav
            </li>
            <li>
              if platforms are unable to connect with isTrav 
            </li>
            <li>
              then they remain disabled if they were disable and remain active if they were active
            </li>
            <li>
              after a platform's license key is applied if the current level is over the max level then it should disable
            </li>
            <li>
              because inside the platform's license key the data says {`{ valid: false }`} so the platform disables
            </li>
            <li>
              because platforms in-memory cache returns {`{ isActive: false }`} and every request to the API checks on this value before doing anything means platforms are disabled immediately
            </li>
            <li>
              becuase isTrav triggers usage reports run every 1 minute therefor means platforms shouldn't take any longer than 1 minute, plus or minus a few seconds, to shutdown after surpassing the max level of requests per day or max level of requests per month or max level of active users per hour allowances
            </li>
            <li>
              because everyone can publicly verify a platfrom anyone can know if a platform is running genuine or not
            </li>
            <li>
              meaning platforms that [return illegitimate or no license key at all, return {`{ isActive: true }`} when it should not, or return fake reports] are noticed and handled acordingly.
            </li>
          </ul>
          <br /><br />
          <h4>Full Stack Developer:</h4>
          <h5>What does Full Stack Developer or FSD mean?</h5>
          Most people would probably tell you that it has something to do with the Front End and Back End of an application. As in the conversation between a client (smart phone, browser) and a server (data center). For me FSD means any source code that needs to be written or maintained; which most modern companies provide direct programming language level API's to interact with their business. This has added a lot of surface area for all FSDs to explore and code. There are many videos about this on YouTube. So Full Stack Developer could mean a lot of things. It just depends on what problems you are trying to solve and with what <a href="/solutions">Solutions</a>. In this about page I'll be talking about the area that I have explored and the path that I have taken through the land of Full Stack Development.
          <h5>What language is ideal for this position?</h5>
          Because FSDs need to have expertise in all of the areas where software has taken ahold of in businesses; including, internet of things (IoT), desktop, mobile, website, server, etc. therefor means not all FSDs are the same and a lot of these <a href="/solutions">Solutions</a> may be achieved in multiple ways or in different programming languages. Now, I have always been a fan of standards and consistancy so naturally I will try to write and use as much code done in JavaScript/TypeScript and node.js which are all pretty much the same language and, in my opinion as a FSD, cover the entire stack and can be used for 99% of today's Applications. I think it's best to be a master of one language here rather than a jack of all trades. Especially when that 1 language covers that much ground. So naturally JS and TS are really the only option. Check out <a href="/apps">Apps</a> for examples on what I have done. Today a lot of companies hire an entire team of people and put them into categories by job title. Then to make things complex each position speaks a different language with the computer to the point where no 1 person at the company could possibly understand the entire codebase. Not ideal. 
          <h5>How is their workstation different than other positions?</h5>
          You would be supprised how much faster one can go on a bicycle with gears/shifting and aerodynamics. The same is true with FSDs because they must jump from one role/context to another (marketer, UI/UXer, tester, developer, stager, productioner) and still be performant. A good full stack developer has experience in each area and a desktop setup that gives them more real estate than what a fronty or backy might have. For instance, I have multiple dedicated machines, and a keyboard-video-mouse switch to jump between each machine, then I leave workspaces open inside each machine for each role/context in a FSDs lifecycle. With a single 27 inch monitor and a 4 button switch that can toggle between 4 machines ... I can jump between workspaces and more space is available for other things. 
          <h5>Why would someone hire a single FSD over a devops, fronty, and backy?</h5>
          Start ups are in demand of FSDs because they need not hire extra people. Big companies want to hire talented FSDs so atleast 1 person can explain the entire codebase. Other companies want FSDs because when a team of like minded people get together amazing things can be achievied.
        </div>
      </div>
    </div>
    <div class="col m4">
      <div class="card">
        <img src="./travis.jpeg" alt="travis in canada" width="100%" style="padding-bottom: 0.5em; margin-bottom: -1em;" />
        <div class="card-content">
          <div class="card-title">Travis Burandt</div>
          is a successful cyclist. At one point he was the youngest and only cat 1 racer in the United States. He has podiumed at states, nationals, and internationally. That was a long time ago though. He has sense then dropped out of racing competatively and now focuses on his own mental health and his own personal coding projects. Lately he has been getting into training an AI bot that will be his <a href="/my-assistant">My Assistant</a>; look out for his profile in the Community for more info.
        </div>
      </div>
    </div>
  </div>
</div>
<br />
<br />
<ContactMe />
<br />
<br />
<br />
<br />
<ClientArea />
<br />
<br />
<br />
<br />

<style>
  .box {
    border: 1em solid #000;
  }
  
	.title {
		font-weight: 900;
		font-size: 4.5em;
		text-align: left;
		margin: 0;
    color: #000;
	}

  .bullets li {
    list-style-type: circle;
  }
</style>