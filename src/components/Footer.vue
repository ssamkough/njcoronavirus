<template>
  <v-container>
    <v-row>
      <v-col md="4">
        <span>Last Updated March 12, 2020</span>
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
  props: {
    msg: String
  }
};
</script>

<style scoped></style>
