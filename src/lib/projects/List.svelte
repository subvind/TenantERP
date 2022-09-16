
<script lang="ts">
  import { onMount } from "svelte";
  import TimeAgo from 'javascript-time-ago'

  import en from 'javascript-time-ago/locale/en'
  import { useDeviceLanguage } from "firebase/auth";

  TimeAgo.addDefaultLocale(en)

  // Create formatter (English).
  const timeAgo = new TimeAgo('en-US')

  export let records: any

  let technologies = {
    languages: [
      {
        name: 'TypeScript',
        projects: ['pro.istrav.dev', 'fleet-optimizer', 'member-markings', 'family-markings', 'full-stack', 'cosmos', 'istrav-platform-backend']
      },
      {
        name: 'JavaScript',
        projects: ['talent', 'istrav-global', 'istrav-load-balancer', 'jukebox', 'istrav.dev', 'box-and-creature-kite', 'lead-avatar', 'tester-avatar', 'c-u-l8er-avatar', 'map-maker-avatar']
      },
      {
        name: 'Svelte',
        projects: ['istrav.pro', 'istrav-platform-frontend', 'istrav-platform-frontgate', 'istrav.stream', 'istrav-headquarters', 'istrav.com']
      },
      {
        name: 'HTML',
        projects: ['2016-2021', '2022-now', '2008-2015', 'ATCH']
      },
    ],
    librariesAndFrameworks: [
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
        projects: ['talent', 'istrav-platform-backend']
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
        projects: ['talent', 'istrav-load-balancer', 'istrav-platform-backend', 'istrav.dev']
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
        name: 'fleet-optimizer',
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
        projects: ['istrav-load-balancer']
      },
      {
        name: 'nestjs',
        projects: ['pro.istrav.dev']
      },
      {
        name: 'RESTful API',
        projects: ['pro.istrav.dev']
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
        projects: ['istrav-platform-backend']
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
    ],
    stores: []
  }
  
  onMount(() => {
    // nothing
  })
</script>
<h1 class="title">
  Technologies
</h1>
<div class="card">
  <div class="card-content">
    <span class="language">{technologies.languages.length} TOTAL</span> 
    <a href="" class="name">Languages</a>
    <hr>
    <span class="description">
      {#each technologies.languages as language, index}
        {#if index != 0}, {/if}{language.name}
      {/each}
    </span>
  </div>
  <div class="card-content">
    <span class="language">{technologies.librariesAndFrameworks.length} TOTAL</span> 
    <a href="" class="name">Libraries & Frameworks</a>
    <hr>
    <span class="description">
      {#each technologies.librariesAndFrameworks as libAndFrame, index}
        {#if index != 0}, {/if}{libAndFrame.name}
      {/each}
    </span>
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
      <br /><span class="date">Updated: {timeAgo.format(new Date(record.updated_at))}</span>
    </div>
    <hr>
  {/each}
  <div class="card-content">
    <a href="https://github.com/trabur?tab=repositories" class="btn btn-large red lighten-2 fluid" target="_blank">all projects</a>
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
</style>