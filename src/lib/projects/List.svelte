
<script lang="ts">
  import { onMount } from "svelte";
  import TimeAgo from 'javascript-time-ago'

  import en from 'javascript-time-ago/locale/en'

  TimeAgo.addDefaultLocale(en)

  // Create formatter (English).
  const timeAgo = new TimeAgo('en-US')

  export let records: any

  let showcase = {}
  let showcaseSelected = 'istrav.pro'
  let languageSelected = 'Svelte'
  let languageSelectedIndex = 0
  let libAndFrameSelected = 'fleet-optimizer'
  let libAndFrameSelectedIndex = 0
  let technologies = {
    languages: [
      {
        name: 'Svelte',
        projects: ['istrav.pro', 'istrav-platform-frontend', 'istrav-platform-frontgate', 'istrav.stream', 'istrav-headquarters', 'istrav.com']
      },
      {
        name: 'TypeScript',
        projects: ['pro.istrav.dev', 'fleet-optimizer', 'member-markings', 'family-markings', 'full-stack', 'cosmos', 'istrav-platform-backend']
      },
      {
        name: 'JavaScript',
        projects: ['talent', 'istrav-global', 'istrav-load-balancer', 'jukebox', 'istrav.dev', 'box-and-creature-kite', 'lead-avatar', 'tester-avatar', 'c-u-l8er-avatar', 'map-maker-avatar']
      },
      {
        name: 'HTML',
        projects: ['2016-2021', '2022-now', '2008-2015', 'ATCH']
      },
    ],
    librariesAndFrameworks: [
      {
        name: 'fleet-optimizer',
        projects: ['istrav.pro']
      },
      {
        name: 'materializecss',
        projects: ['istrav.pro', 'istrav-platform-frontend', 'istrav-platform-frontgate', 'istrav.stream', 'istrav-headquarters', 'istrav.com']
      },
      {
        name: 'matterjs',
        projects: ['istrav.stream', 'box-and-creature-kite', 'istrav.com']
      },
      {
        name: 'bower',
        projects: ['talent']
      },
      {
        name: 'gulp',
        projects: ['talent', 'jukebox']
      },
      {
        name: 'express',
        projects: ['talent', 'istrav-platform-backend', 'istrav.dev', 'pro.istrav.dev']
      },
      {
        name: 'http-proxy',
        projects: ['talent', 'istrav-load-balancer']
      },
      {
        name: 'angular',
        projects: ['talent']
      },
      {
        name: 'node.js',
        projects: ['talent', 'istrav-load-balancer', 'istrav-platform-backend', 'istrav.dev', 'pro.istrav.dev']
      },
      {
        name: 'bootstrap',
        projects: ['talent']
      },
      {
        name: 'lodash',
        projects: ['talent']
      },
      {
        name: 'sveltekit',
        projects: ['istrav.pro', 'istrav-platform-frontend', 'istrav-platform-frontend', 'istrav-platform-frontgate', 'istrav.stream', 'istrav-headquarters', 'istrav.com']
      },
      {
        name: 'gridjs',
        projects: ['istrav.pro']
      },
      {
        name: 'leaflet',
        projects: ['istrav.pro', 'istrav.com']
      },
      {
        name: 'leaflet-routing-machine',
        projects: ['istrav.pro']
      },
      {
        name: 'uuid',
        projects: ['istrav.pro', 'istrav-global', 'fleet-optimizer', 'istrav.com']
      },
      {
        name: 'vite',
        projects: ['istrav.pro', 'istrav-platform-frontend', 'istrav-platform-frontend', 'istrav-platform-frontgate', 'istrav.stream', 'istrav-headquarters', 'istrav.com']
      },
      {
        name: 'itty-router',
        projects: ['istrav-global']
      },
      {
        name: 'jsonwebtoken',
        projects: ['istrav-global', 'istrav-platform-backend']
      },
      {
        name: 'lokijs',
        projects: ['istrav-global']
      },
      {
        name: 'pm2',
        projects: ['istrav-load-balancer', 'istrav-platform-backend', 'pro.istrav.dev']
      },
      {
        name: 'nestjs',
        projects: ['pro.istrav.dev', 'istrav-platform-backend']
      },
      {
        name: 'RESTful API',
        projects: ['pro.istrav.dev', 'istrav-platform-backend', 'istrav-global']
      },
      {
        name: 'rxjs',
        projects: ['fleet-optimizer']
      },
      {
        name: 'rxdb',
        projects: ['fleet-optimizer']
      },
      {
        name: 'pouchdb',
        projects: ['fleet-optimizer']
      },
      {
        name: 'reveal.js',
        projects: ['jukebox']
      },
      {
        name: 'pg',
        projects: ['istrav-platform-backend']
      },
      {
        name: 'typeorm',
        projects: ['istrav-platform-backend']
      },
      {
        name: 'websockets',
        projects: ['istrav.dev']
      },
      {
        name: 'casl',
        projects: ['istrav-platform-backend']
      },
      {
        name: 'commander',
        projects: ['istrav.dev']
      },
      {
        name: 'nlp',
        projects: ['istrav.dev']
      },
      {
        name: 'shell',
        projects: ['istrav.dev']
      },
      {
        name: 'http-server',
        projects: ['box-and-creature-kite']
      },
      {
        name: 'codemirror',
        projects: ['istrav.com']
      },
      {
        name: 'firebase',
        projects: ['istrav.com']
      },
      {
        name: 'isomer.js',
        projects: ['lead-avatar', 'tester-avatar', 'c-u-l8er-avatar', 'map-maker-avatar']
      },
      {
        name: 'cloudflare',
        projects: ['istrav-global']
      },
      {
        name: 'github-actions',
        projects: ['fleet-optimizer', 'istrav-global']
      },
      {
        name: 'vercel',
        projects: ['istrav.com', 'istrav-headquarters', '2022-now', '2008-2015', '2016-2021', 'istrav.stream', 'istrav-platform-frontend', 'istrav-platform-frontgate', 'istrav.pro', 'box-and-creature-kite']
      },
      {
        name: 'npm',
        projects: ['fleet-optimizer']
      },
    ],
    stores: []
  }
  
  onMount(() => {
    // nothing
  })
</script>
<h1 id="technologies"class="title">
  Technologies
</h1>
<div class="card">
  <div class="card-content">
    <span class="language">{technologies.languages.length} TOTAL</span> 
    <a href="#technologies" class="name">Languages</a>
    <hr>
    <span class="description">
      {#each technologies.languages as language, index}
        {#if index != 0}, {/if}
        <span on:click={() => {languageSelected = language.name; languageSelectedIndex = index}} class="link" style={languageSelected == language.name ? 'text-decoration: underline;' : ''}>{language.name}</span>
      {/each}
    </span>
  </div>
  <div class="card-content">
    <span class="language">{technologies.librariesAndFrameworks.length} TOTAL</span> 
    <a href="#technologies" class="name">Libraries & Frameworks</a>
    <hr>
    <span class="description">
      {#each technologies.librariesAndFrameworks as libAndFrame, index}
        {#if index != 0}, {/if}
        <span on:click={() => {libAndFrameSelected = libAndFrame.name; libAndFrameSelectedIndex = index}} class="link" style={libAndFrameSelected == libAndFrame.name ? 'text-decoration: underline;' : ''}>{libAndFrame.name}</span>
      {/each}
    </span>
  </div>
  <div class="card-content">
    <span class="language">{technologies.librariesAndFrameworks[libAndFrameSelectedIndex].projects.filter((investment) => {return technologies.languages[languageSelectedIndex].projects.filter((value) => value === investment).length}).length} TOTAL</span> 
    <a href="#technologies" class="name">Investments</a>
    <hr>
    <span class="description">
      {#each technologies.librariesAndFrameworks[libAndFrameSelectedIndex].projects.filter((investment) => {return technologies.languages[languageSelectedIndex].projects.filter((value) => value === investment).length}) as project, index}
        {#if index != 0}, {/if}
        <span class="link" on:click={() => {showcaseSelected = project;}} style={showcaseSelected == project ? 'text-decoration: underline;' : ''}>{project}</span>
      {/each}
    </span>
  </div>
  <div class="card-content">
    <span class="language">{showcaseSelected}</span> 
    <a href="#technologies" class="name">Showcase</a>
    <hr>
    <span class="description">
      {records.filter((r) => {return r.name == showcaseSelected})[0].description}
    </span>
    <br /><span class="date">Latest commit: {timeAgo.format(new Date(records.filter((r) => {return r.name == showcaseSelected})[0].pushed_at))} &#8226; {records.filter((r) => {return r.name == showcaseSelected})[0].stargazers_count} Stars</span>
    <br /><br />
    <a href={records.filter((r) => {return r.name == showcaseSelected})[0].homepage} target="_blank" class="btn btn-large red lighten-2">homepage</a>
    <a href={records.filter((r) => {return r.name == showcaseSelected})[0].html_url} target="_blank" class="btn btn-large red lighten-2">Source Code</a>
  </div>
</div>

<h1 class="title">
  Projects
</h1>
<div class="card">
  {#each records as record}
    <div class="card-content">
      <span class="language">{record.language}</span> 
      <a href={record.html_url} target="_blank" class="name">{record.name}</a>
      <br /><span class="description">{record.description}</span>
      <br /><span class="date">Latest commit: {timeAgo.format(new Date(record.pushed_at))} &#8226; {record.stargazers_count} Stars</span>
    </div>
    <hr>
  {/each}
  <div class="card-content">
    <a href="https://github.com/trabur?tab=repositories" class="btn btn-large red lighten-2 fluid" target="_blank">projects on github</a>
  </div>
</div>

<style>
	.title {
		font-weight: 900;
		font-size: 4.5em;
		text-align: left;
		margin: 0;
	}
  .card {
    border: 1em solid #000;
  }
  .name {
    font-size: 1.5em;
    font-weight: 900;
  }
  .language {
    font-weight: 900;
    float: right;
  }
  .description {
    font-size: 1.5em;
  }
  .card-content {
    padding: 1em;
  }
  .fluid {
    width: 100%;
  }
  .link {
    cursor: pointer;
  }
</style>