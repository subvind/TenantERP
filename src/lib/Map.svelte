<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/env';

  onMount(async () => {
    if (browser) {
      const leaflet = await import('leaflet');

      const map = leaflet.map('map', {
        scrollWheelZoom: false
      }).setView([30.2672, -97.7431], 13);

      leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      leaflet.marker([30.2672, -97.7431]).addTo(map)
        .bindPopup('Located out of Austin, TX')
        .openPopup();
    }
  });
</script>

<main>
  <div id="map"></div>
</main>

<style>
  @import 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
  main #map {
    height: 800px;
  }
</style>