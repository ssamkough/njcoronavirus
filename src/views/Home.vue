<template>
  <div class="maps">
    Website has ceased operations since May 2021. For more information regarding the Coronavirus/Covid-19, please visit the <a
            href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >Centers for Disease Control and Prevention</a>.
    <br />
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
