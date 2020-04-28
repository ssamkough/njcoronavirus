<template>
  <v-app id="inspire">
    <Header />
    <nav id="nav">
      <router-link to="/covid-19">Covid-19</router-link>|
      <router-link to="/">Maps</router-link>|
      <router-link to="/about">About</router-link>
    </nav>
    <v-content>
      <router-view />
    </v-content>
    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
@import "./styles/styles.css";
#inspire {
  font-family: Arial;
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
  margin: 10px;
  font-size: large;
}

#nav a.router-link-exact-active {
  color: #6e859c;
}
</style>
