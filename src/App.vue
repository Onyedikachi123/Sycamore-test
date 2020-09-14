<template>
  <div id="app">
    <div id="nav">
      <Navbar />
    </div>
    <!-- <router-link to="">About</router-link> -->
    <router-view />
    <Footer />
    <Footer2/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
export default {
  components: {
    Navbar,
    Footer,
    Footer2,
  },
};
</script>
<style>
#app {
  font-family: Poppins;
}
#app a {
  text-decoration: none !important;
  color: #000;
}
</style>
