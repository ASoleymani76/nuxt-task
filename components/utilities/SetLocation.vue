<template>
  <div id="map" class="w-full rounded-lg"></div>
</template>
<script>
export default {
  emits: ["getGeoLocation"],
  data() {
    return {
      map: null,
      marker: null,
      latitude: null,
      longitude: null,
    };
  },
  props: {
    defaultViewGeoLoc: {
      type: Array,
      required: false,
    },
    defaultMarkerGeoLoc: {
      type: Array,
      required: false,
    },
  },
  watch: {
    defaultViewGeoLoc: {
      handler(val) {
        if (val && val.length > 0) {
          this.map.setView(val, 11);
        }
      },
    },
  },
  async mounted() {
    if (this.map) {
      return
    } else {
      this.map = L.map("map",{zoomControl:false}).setView([35.751128, 51.418679], 14);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap",
      }).addTo(this.map);
      // Leaflet has a known issue with wrong marker address
      // This section is their own provided solution for fixing this issue
      // Please don't touch it or marker won't be shown on the map
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "/marker-icon-2x.png",
        iconUrl: "/marker-icon.png",
        shadowUrl: "/marker-shadow.png",
      });
      // Solution ends here
      if (this.defaultMarkerGeoLoc) {
        this.map.setView(this.defaultMarkerGeoLoc, 14);
        this.marker = L.marker(this.defaultMarkerGeoLoc);
        this.marker.addTo(this.map);
      }
      this.map.on("click", this.handleMapClick);
    }

  },

  methods: {
    async handleMapClick(event) {
      this.latitude = event.latlng.lat;
      this.longitude = event.latlng.lng;
      if (!this.marker) {
        // Check if a marker already exists
        // If not, create a new one
        this.marker = L.marker([event.latlng.lat, event.latlng.lng]);
        this.marker.addTo(this.map);
      } else {
        // If a marker already exists, remove it first,
        // Then add new marker
        await this.marker.removeFrom(this.map);
        this.marker = L.marker([event.latlng.lat, event.latlng.lng]);
        this.marker.addTo(this.map);
      }
      this.$emit("getGeoLocation", this.latitude, this.longitude);
    },
  },
};
</script>
<style>
#map {
  height: 300px !important;
}


</style>
