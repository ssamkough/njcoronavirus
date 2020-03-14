<template>
  <v-container>
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
