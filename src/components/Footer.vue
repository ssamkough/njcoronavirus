<template>
  <v-container>
    <v-row>
      <v-col>
        <blockquote class="custom-blockquote">
          Have general questions about COVID-19?
          <span class="font-weight-bold">Call the NJ COVID-19</span> &
          Poison Center Public Hotline at
          <span class="font-weight-bold">
            <a href="tel:18009621253">1-800-962-1253</a>
          </span> or
          <a href="tel:18002221222">1-800-222-1222</a>!
        </blockquote>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4">
        <span>Last Updated: {{date}}</span>
      </v-col>
      <v-col md="4" offset-md="4">
        <span>Code on&nbsp;</span>
        <a
          href="https://github.com/ssamkough/njcoronavirus"
          target="_blank"
          rel="noopener noreferrer"
        >GitHub</a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Footer",
  data() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    return {
      date: today
    };
  }
};
</script>

<style scoped></style>
