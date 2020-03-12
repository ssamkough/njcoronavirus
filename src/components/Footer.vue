<template>
  <v-container>
    <v-row>
      <v-col md="4"><span>Last Updated March 12, 2020</span></v-col>
      <v-col md="4" offset-md="4">
        <span>Made By&nbsp;</span>
        <a
          href="http://sammysamkough.com/"
          target="_blank"
          rel="noopener noreferrer"
          >Sammy Samkough</a
        >
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
