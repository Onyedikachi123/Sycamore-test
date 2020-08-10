<template>
<div id="App">
<Navbar />
<hero />
<Categories />
<Card />
<Howitworks />
<Footer />
<Footer2 />
</div>
</template>

<script>
import Navbar from './components/Navbar';
import hero from './components/hero';
import Categories from './components/Categories';
import Card from './components/Card';
import Howitworks from './components/Howitworks';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';


export default {
  name: 'App',
  components: {
    Navbar,
    hero,
    Categories,
    Card,
    Howitworks,
    Footer,
    Footer2
  }
};
</script>


