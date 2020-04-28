<template>
  <div class="day-by-day-map">
    <iframe
      title="New Jersey Reported Cases By Day"
      aria-label="Interactive line chart"
      src="//datawrapper.dwcdn.net/A6kvz/1/"
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
  name: "DayByDayMap",
  props: {
    msg: String
  }
};
</script>

<style scoped></style>
