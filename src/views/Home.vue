<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <hero />
    <Categories />
    <Card />
    <Howitworks />
    
  </div>
</template>

<script>
// @ is an alias to /src
import hero from '../components/hero'
import Categories from '../components/Categories'
import Card from '../components/Card'
import Howitworks from '../components/Howitworks'



export default {
  name: 'Home',
  components: {
    hero,
    Categories,
    Card,
    Howitworks,
   
  }
}
</script>
