<script>
  let folder = 'meta'
  let url = `https://erpnomy.com`
  let active = ''
</script>

<div class="header">
  <br />
  <br />
  <br />
  <br />
  <h1 class="title">Launch Today</h1>
  <div class="description" style="color: #000;">Enterprise Resource Planning (ERP)</div>
  <br />
  <div style="max-width: 500px; margin: 0 auto;">
    <div class="description" style="color: #333;">It contains CRM, HR, Purchases, Orders, Payments, Invoices, Quotes, Inventory, Supply Chain, Expenses, Reports, Accounting.</div>
  </div>
  <br />
  <br />
  <div class="browser z-depth-5">
    <div class="toolbar">
      <div class="column left">
        <span class="dot" style="background:#ED594A;"></span>
        <span class="dot" style="background:#FDD800;"></span>
        <span class="dot" style="background:#5AC05A;"></span>
      </div>
      <div class="column middle">
        <input type="text" value={url}>
      </div>
      <div class="column right">
        <div style="float:right">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </div>
  
    <div class="content">
      <div id="wrap">
        <iframe id="frame" title="demo" src={url} frameborder="0"></iframe>
      </div>
    </div>
  </div>
</div>

<div class="panel">
  <div class="container">
    <a href="#" class="btn-floating btn-large waves-effect waves-light red lighten-2 platform-btn"><i class="material-icons">arrow_upward</i></a>
    <div class="line"></div>
    <a href="/about">
      <img src="/anchor.png" alt="about" style="width: 100px; margin-bottom: -2em;">
    </a>
    <div class="line"></div>
    <h3 class="demo-title">nomy.ERP</h3>
    <button class="waves-effect waves-light btn grey" class:active={active === 'information'} on:click={() => active = `information`}>information</button>
    <button class="waves-effect waves-light btn grey" class:active={active === `materials`} on:click={() => active = `materials`}>materials</button>
    <button class="waves-effect waves-light btn grey" class:active={active === `cash`} on:click={() => active = `cash`}>cash</button>
    {#if active === 'information'}
      <p>In addition to cash and materials, ERP systems play a pivotal role in managing the information flows between suppliers, employees, and customers within an organization. These systems serve as a centralized hub for storing and processing data related to supplier relationships, employee details, and customer interactions. ERP facilitates seamless communication between suppliers and the organization by managing procurement, order processing, and inventory levels. It enhances employee management through features like HR records, payroll, and performance tracking. Moreover, ERP systems enable a comprehensive view of customer interactions, supporting functions such as sales, marketing, and customer service. By efficiently managing these information flows, ERP enhances collaboration, data accuracy, and customer satisfaction, contributing to a more agile and responsive organization.</p>
    {/if}
    {#if active === 'materials'}
      <p>Materials within an Enterprise Resource Planning (ERP) system refer to the tangible resources that a company requires to conduct its operations and fulfill its business objectives. These resources can encompass a wide range of items, including raw materials, components, finished products, equipment, and supplies. In an ERP context, materials are managed through integrated modules that handle various aspects of their lifecycle, such as procurement, inventory management, production planning, and distribution. Effective material management within an ERP system allows organizations to optimize their supply chain, streamline processes, maintain accurate inventory levels, and make informed decisions based on real-time data, contributing to increased operational efficiency and improved resource utilization.</p>
    {/if}
    {#if active === 'cash'}
      <p>Cash management is a crucial aspect of Enterprise Resource Planning (ERP) systems. Within an ERP framework, cash-related processes are meticulously tracked and managed, encompassing areas like accounts payable, accounts receivable, financial forecasting, budgeting, and cash flow analysis. By integrating cash management into the ERP ecosystem, organizations can gain real-time visibility into their financial health, monitor inflows and outflows, automate payment processes, and optimize cash utilization. This comprehensive approach to cash management ensures accurate financial reporting, aids in making informed decisions, and contributes to overall fiscal discipline and stability within the organization.</p>
    {/if}
    <br />
    <br />
  </div>
</div>

<style>
  .platform-btn {
    margin: -1.9em;
    position: absolute;
  }

  .active {
    background: #fff !important;
    color: #000 !important;
  }

  .header {    
    background-color: #cccccc;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23bbbbbb' fill-opacity='1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  .title {
    font-weight: 900;
    color: #000;
		font-size: 4.5em;
    margin: 0;
    text-align: center;
  }

  .description {
    color: #ccc;
    font-size: 1.5em;
    margin: 0;
    text-align: center;
  }

  .demo-title {
    font-weight: 900;
    color: #eee;
    margin: 0;
    text-align: center;
    margin-bottom: 0.2em;
    border: 0.2em solid #ee6e73;
  }

  .line {
    border-left: 1em solid #ee6e73;
    height: 4em;
    margin: 0 auto;
    width: 0;
  }

  /* The browser window */
  .browser {
    background: #eee;
    border: 3px solid #f1f1f1;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom: 0;
    max-width: 900px;
    margin: 0 auto;
  }
  
  /* Container for columns and the top "toolbar" */
  .toolbar {
    padding: 12px 10px 0 10px;
    background: #f1f1f1;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  
  /* Create three unequal columns that floats next to each other */
  .column {
    float: left;
  }
  
  .left {
    width: 15%;
  }
  
  .right {
    width: 10%;
  }
  
  .middle {
    width: 75%;
  }
  
  /* Clear floats after the columns */
  .toolbar:after {
    content: "";
    display: table;
    clear: both;
  }
  
  /* Three dots */
  .dot {
    margin-top: 4px;
    height: 12px;
    width: 12px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
  }
  
  /* Style the input field */
  input[type=text] {
    width: 100%;
    border-radius: 3px;
    border: none;
    background-color: white;
    margin-top: -8px;
    height: 25px;
    color: #666;
    padding: 5px;
  }
  
  /* Three bars (hamburger menu) */
  .bar {
    width: 17px;
    height: 3px;
    background-color: #aaa;
    margin: 3px 0;
    display: block;
  }
  
  /* Page content */
  .content {
    background: #fff;
    padding: 0;
    overflow: hidden;
  }

  #wrap {
    width: 900px;
    height: 490px;
    padding: 0;
    overflow: hidden; 
  }
  
  #frame {
    width: 1200px;
    height: 660px;
    border: 0;
  }

  #frame {
    -ms-zoom: 0.75;
    -moz-transform: scale(0.75);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.75);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.75);
    -webkit-transform-origin: 0 0;
  }

  .panel {
    padding: 2em;
    padding-top: 0;
    text-align: center;
    color: #eee;
    background-color: #222222;
    background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23333333' fill-opacity='1'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  .panel button {
    margin: 0.2em;
  }
</style>