<template>
  <b-container>
    <b-row>
      <b-col>
        <div class="laptop">
          <b-row>
            <b-col cols="8">
              <h3>Phones, tablets and laptops</h3>
              <button
                v-on:click="view('phones, tablets and laptops')"
                class="buy-now"
                v-b-modal.modal-with-popover
              >
                Buy Now <fa-icon icon="arrow-right" class="card-icons" />
              </button>
            </b-col>
            <b-col cols="4">
              <img src="../assets/laptops.png" />
            </b-col>
          </b-row>
        </div>
      </b-col>
      <b-col>
        <div class="tv">
          <b-row>
            <b-col cols="8">
              <h3>Televisions <br />Sets</h3>
              <button v-on:click="view('audio visual')" class="buy-now">
                Buy Now <fa-icon icon="arrow-right" class="card-icons" />
              </button>
            </b-col>
            <b-col cols="4">
              <img src="../assets/tv.png" />
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col>
        <div class="freezers">
          <b-row>
            <b-col cols="8">
              <h3>Refridgerators & Freezers</h3>
              <button v-on:click="view('refrigators')" class="buy-now">
                Buy Now <fa-icon icon="arrow-right" class="card-icons" />
              </button>
            </b-col>
            <b-col cols="4">
              <img src="../assets/freezers.png" />
            </b-col>
          </b-row>
        </div>
      </b-col>
      <b-col>
        <div class="gas">
          <b-row>
            <b-col cols="8">
              <h3>Gas <br />Cookers</h3>
              <button v-on:click="view('gas cookers')" class="buy-now">
                Buy Now <fa-icon icon="arrow-right" class="card-icons" />
              </button>
            </b-col>
            <b-col cols="4">
              <img src="../assets/gas.png" />
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col>
        <div class="gen">
          <b-row>
            <b-col cols="8">
              <h3>Generators</h3>
              <button v-on:click="view('power generation')" class="buy-now">
                Buy Now <fa-icon icon="arrow-right" class="card-icons" />
              </button>
            </b-col>
            <b-col cols="4">
              <img src="../assets/gen.png" />
            </b-col>
          </b-row>
        </div>
      </b-col>
      <b-col>
        <div class="ac">
          <b-row>
            <b-col cols="8">
              <h3>Air <br />Conditioners</h3>
              <button
                v-on:click="view('domestic air conditioners')"
                class="buy-now"
              >
                Buy Now <fa-icon icon="arrow-right" class="card-icons" />
              </button>
            </b-col>
            <b-col cols="4">
              <img src="../assets/ac.png" />
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>

    <button v-on:click="view()" class="center">See all product</button>

    <!-- <Modal v-if="name" :name = "name"/> -->

    <b-modal
      :title="name"
      :visible="!!products.length"
      :hide-footer="true"
      @close="close()"
    >
      <h4 class="text-center mb-5 card-modal-title"> {{ selected }} </h4>
      <template v-if="products.length">
        <p
          v-for="(product, i) in products"
          :key="i"
          class="text-center modal-styling"
        >
          <router-link :to="`/product/${product.id}`">{{
            product.name
          }}</router-link>
        </p>
      </template>
    </b-modal>
  </b-container>
</template>

<script>
import products from "../products";

export default {
  components: {},
  data() {
    return {
      name: null,
      products: [],
      // categories: [
      //   { id: 1, name: "" },
      //   { id: 1, name: "" },
      // ],
      selected: null
    };
  },
  methods: {
    view(catergory) {
      this.products = products.filter(
        (product) => product.catergory === catergory
      );
      if(this.products.length) {
        this.selected = catergory
      }
    },
    close() {
      this.products = [];
      this.selected = null
    },
  },
};
</script>

<style>
.card-modal-title {
  background-color: #e23939;
  color: #fff;
  text-transform: uppercase;
  padding: 20px;
  margin: 0 56px;
  font-size: 18px;
  border-radius: 10px;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);

}
.laptop {
  /* position: absolute; */
 width: 538.58px;
  height: 251.95px;
  color: #fff;

  background: #bd1e4a;
  border-radius: 17.1174px;
}

.tv {
  /* position: absolute; */
 width: 538.58px;
  height: 251.95px ;
  background: #1b1333;
  border-radius: 17.1174px;
}
.freezers {
  /* position: absolute; */
 width: 538.58px;
  height: 251.95px;
  background: #747c98;
  border-radius: 17.1174px;
}
.gas {
  /* position: absolute; */
  width: 538.58px;
  height: 251.95px;
  background: #303030;
  border-radius: 17.1174px;
}
.gen {
  /* position: absolute; */
 width: 538.58px;
  height: 251.95px;
  background: #532010;
  border-radius: 17.1174px;
}
.ac {
  /* position: absolute; */
 width: 538.58px;
  height: 251.95px;

  background: #eef0ff;
  border-radius: 17.1174px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  margin: 84px auto;
  top: 1853px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #fff;
  font-family: Poppins;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
}
.laptop img {
  width: 265px;
  height: 265px;
  margin-left: -105px;
  padding: 50px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.laptop h3 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 35.6923px;
  line-height: 54px;
  padding: 20px;
  color: #ffffff;
}

.laptop button {
  border: 1.65188px solid #ffffff;
  box-sizing: border-box;
  margin: 20px;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  font-weight: 300;
}
.tv img {
  width: 265px;
  height: 265px;
  margin-left: -105px;
  padding: 26px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.tv h3 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 35.6923px;
  line-height: 54px;
  padding: 20px;
  color: #ffffff;
}
.tv button {
  border: 1.65188px solid #ffffff;
  box-sizing: border-box;
  margin: 20px;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  font-weight: 300;
}
.freezers img {
  width: 265px;
  height: 265px;
  margin-left: -105px;
  padding: 26px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.freezers h3 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 35.6923px;
  line-height: 54px;
  padding: 20px;
  color: #ffffff;
}
.freezers button {
  border: 1.65188px solid #ffffff;
  box-sizing: border-box;
  margin: 20px;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  font-weight: 300;
}
/* Gas Cooker */
.gas img {
  width: 265px;
  height: 265px;
  margin-left: -105px;
  padding: 26px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.gas h3 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 35.6923px;
  line-height: 54px;
  padding: 20px;
  color: #ffffff;
}
.gas button {
  border: 1.65188px solid #ffffff;
  box-sizing: border-box;
  margin: 20px;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  font-weight: 300;
}
.gen img {
  width: 265px;
  height: 265px;
  margin-left: -105px;
  padding: 26px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.gen h3 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 35.6923px;
  line-height: 54px;
  padding: 20px;
  color: #ffffff;
}
.gen button {
  border: 1.65188px solid #ffffff;
  box-sizing: border-box;
  margin: 20px;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  font-weight: 300;
}
.ac img {
  width: 265px;
  height: 265px;
  margin-left: -105px;
  padding: 26px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.ac h3 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 35.6923px;
  line-height: 54px;
  padding: 20px;
  color: #000;
}
.ac button {
  border: 1.65188px solid #000;
  box-sizing: border-box;
  margin: 20px;
  cursor: pointer;
  background-color: transparent;
  color: #000;
  font-weight: 300;
}

.modal-header {
  border: none;
}
.modal-footer {
  border: none;
}

.modal-styling {
  background-color: #367d00;
  padding: 10px;
  margin: 20px 50px;
  border-radius: 7px;
}
.modal-styling a {
  color: #fff !important;
  text-decoration: none !important;
  font-weight: bold;
}
img {
  max-width: 265px !important;
}
</style>
