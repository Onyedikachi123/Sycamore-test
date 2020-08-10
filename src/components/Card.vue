<template>
   <b-container>
     <b-row>
       <b-col>
          <div class="laptop">
              <b-row>
                  <b-col cols="8">
                    <h3>Phones, tablets and laptops</h3>
                    <button v-on:click="submit" class="buy-now">Buy Now <fa-icon icon="arrow-right" class="card-icons"/> </button>
                  </b-col>
                  <b-col cols="4">
                      <img src="../assets/laptops.png">
                  </b-col>
              </b-row>
          </div>
       </b-col>
       <b-col>
         <div class="tv">
              <b-row>
                  <b-col cols="8">
                    <h3>Televisions <br>Sets</h3>
                    <button v-on:click="submit" class="buy-now">Buy Now <fa-icon icon="arrow-right" class="card-icons"/> </button>
                  </b-col>
                  <b-col cols="4">
                      <img src="../assets/tv.png">
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
                    <button v-on:click="submit" class="buy-now">Buy Now <fa-icon icon="arrow-right" class="card-icons"/> </button>
                  </b-col>
                  <b-col cols="4">
                      <img src="../assets/freezers.png">
                  </b-col>
              </b-row>
          </div>
       </b-col>
       <b-col>
         <div class="gas">
              <b-row>
                  <b-col cols="8">
                    <h3>Gas <br>Cookers</h3>
                    <button v-on:click="submit" class="buy-now">Buy Now <fa-icon icon="arrow-right" class="card-icons"/> </button>
                  </b-col>
                  <b-col cols="4">
                      <img src="../assets/gas.png">
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
                    <button v-on:click="submit" class="buy-now">Buy Now <fa-icon icon="arrow-right" class="card-icons"/> </button>
                  </b-col>
                  <b-col cols="4">
                      <img src="../assets/gen.png">
                  </b-col>
              </b-row>
          </div>
       </b-col>
       <b-col>
         <div class="ac">
            <b-row>
                  <b-col cols="8">
                    <h3>Air <br>Conditioners</h3>
                    <button v-on:click="submit" class="buy-now">Buy Now <fa-icon icon="arrow-right" class="card-icons"/> </button>
                  </b-col>
                  <b-col cols="4">
                      <img src="../assets/ac.png">
                  </b-col>
              </b-row>
         </div>
       </b-col>
     </b-row>
   
  <button v-on:click="submit" class="center">See all product</button>

    </b-container>

</template>

<script>
export default {

}
</script>

<style>
  .laptop {
   /* position: absolute; */
width: 500.58px;
height: 251.95px;
color: #fff;

background: #BD1E4A;
border-radius: 17.1174px;
  }

  .tv {
    /* position: absolute; */
width: 500.58px;
height: 251.95px;
background: #1B1333;
border-radius: 17.1174px;
  }
  .freezers {
/* position: absolute; */
width: 500.58px;
height: 251.95px;
background: #747C98;
border-radius: 17.1174px;
  }
  .gas {
/* position: absolute; */
width: 500.58px;
height: 251.95px;
background: #303030;
border-radius: 17.1174px;
  }
  .gen {
/* position: absolute; */
width: 500.58px;
height: 251.95px;
background: #532010;
border-radius: 17.1174px;
  }
  .ac {
    /* position: absolute; */
 width: 500.58px;
height: 251.95px;


background: #EEF0FF;
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
color: #FFFFFF;
}

.laptop button {

border: 1.65188px solid #FFFFFF;
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
color: #FFFFFF;
}
.tv button {
border: 1.65188px solid #FFFFFF;
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
color: #FFFFFF;
}
.freezers button {
  border: 1.65188px solid #FFFFFF;
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
color: #FFFFFF;
}
.gas button {
  border: 1.65188px solid #FFFFFF;
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
color: #FFFFFF;
}
.gen button {
    border: 1.65188px solid #FFFFFF;
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
</style>