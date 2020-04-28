<template>
  <div class="maps">
    <MainMap />
    <br />
    <DayByDayMap />
  </div>
</template>

<script>
import MainMap from "./../components/maps/MainMap";
import DayByDayMap from "./../components/maps/DayByDayMap";

export default {
  name: "Home",
  components: {
    MainMap,
    DayByDayMap
  }
};
</script>
