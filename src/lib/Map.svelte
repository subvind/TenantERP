<script>
  import { onMount } from 'svelte';

  onMount(async () => {
    const leaflet = await import('leaflet');

    const map = leaflet.map('map', {
      scrollWheelZoom: false
    }).setView([30.2672, -97.7431], 13);

    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    leaflet.marker([30.2672, -97.7431]).addTo(map)
      .bindPopup('Located in Austin, TX')
      .openPopup();
  });
</script>

<div class="container">
  <h1 class="title">
    Location
  </h1>
</div>
<div class="wrapper">
  <div id="map"></div>
</div>

<style>
  @import 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
  #map {
    height: 800px;
  }
  .wrapper {
    border-top: 1em solid #000;
    border-bottom: 1em solid #000;
  }

	.title {
		font-weight: 900;
		font-size: 4.5em;
		text-align: left;
		margin: 0;
	}
</style>