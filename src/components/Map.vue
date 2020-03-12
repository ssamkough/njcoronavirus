<template>
  <div class="map">
    <iframe
      title="New Jersey Coronavirus Cases"
      aria-label="USA new jersey counties Symbol map"
      id="datawrapper-chart-mVRAC"
      src="//datawrapper.dwcdn.net/mVRAC/4/"
      scrolling="no"
      frameborder="1"
      style="width: 0; min-width: 90% !important; padding: 10px;"
      height="800"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  }
};
</script>

<style scoped></style>
