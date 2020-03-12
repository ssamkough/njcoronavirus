<template>
  <div id="app">
    <v-app id="inspire">
      <div id="nav">
        <router-link to="/">Map</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <v-content>
        <router-view />
      </v-content>
      <v-footer>
        <Footer />
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Footer
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 5px;
  font-size: large;
}

#nav a.router-link-exact-active {
  color: #b95042;
}
</style>
