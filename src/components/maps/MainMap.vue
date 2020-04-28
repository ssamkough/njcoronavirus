<template>
  <div class="main-map">
    <iframe
      title="New Jersey Coronavirus Cases"
      aria-label="USA new jersey counties choropleth map"
      src="//datawrapper.dwcdn.net/d7N4u/2/"
      scrolling="no"
      frameborder="1"
      class="map"
      width="1000"
      height="800"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "MainMap",
  props: {
    msg: String
  }
};
</script>

<style scoped></style>
