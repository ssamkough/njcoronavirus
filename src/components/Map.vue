<template>
  <div class="map">
    <iframe
      title="New Jersey Coronavirus Cases"
      aria-label="USA new jersey counties choropleth map"
      src="//datawrapper.dwcdn.net/d7N4u/2/"
      scrolling="no"
      frameborder="1"
      style="width: 0; min-width: 90% !important; padding: 10px;"
      width="1000"
      height="800"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Map",
  props: {
    msg: String
  }
};
</script>

<style scoped></style>
