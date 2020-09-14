<template>
  <div class="wrapper">
    <h2>Payment per month: ₦ {{ slider }}</h2>
    <custom-slider :values="sliderValues" raising v-model="slider" class="wrapper-input" @change="$emit('change', $event)"/>
  </div>
</template>

<script>
import CustomSlider from "vue-custom-range-slider";
import "vue-custom-range-slider/dist/vue-custom-range-slider.css";

export default {
    components: {
    CustomSlider
  },
  props: {
  values: {
    type: Array,
    required: true,
  }
  },
  created() {
  // console.log(this.values)
  this.slider = this.values[0].amount
  this.sliderValues = this.values.map((value) => {
    return { 
      label: value.months,
      value: value.amount
    }
  })
  },
  data() {
    return {
      slider: "200,000",
      sliderValues: []
    };
  }
}
</script>

<style>
 .wrapper h2 {
   font-size: 15.2537px;
 }
 .slider {
   margin-top: 30px;
 }


</style>