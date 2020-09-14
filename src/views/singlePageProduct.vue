<template>
  <b-container v-if="product">
    <b-row class="productRow">
      <b-col cols="6">
        <h2 class="text-center">{{ product.name }}</h2>
        <b-img :src="getImgUrl(product.image)" class="productImage"/></b-col>
      <b-col cols="6">
        <FormVeevalidation :product="product" v-if="product"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import products from "../products";
import FormVeevalidation from '../components/FormVeevalidation'

export default {
  components: {
    FormVeevalidation
  },
  data() {
    return {
      product: null,
    };
  },
  created() {
    const id = this.$route.params.id;
    this.product = products.find((p) => p.id === +id);
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
  },
};
</script>

<style>
 .productRow {
   margin: 100px 0;
 }

 .productImage {
   display: block;
   margin: 0 auto;
 }

</style>
