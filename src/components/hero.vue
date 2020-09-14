<template>
  <b-container class="hero">
   <b-jumbotron>
   
  <b-row>
    <b-col cols="6">
     <h1>You deserve the very <br>best!</h1>
     <p class="jumbo-text">you can get it just now, then pay later</p>
    </b-col>
    <b-col cols="6">
    <div id="hero-image">
     <div id="wrapper"><img src="../assets/Layer 2 1.png" ></div> 
    </div>
        
    </b-col>
  </b-row>
    
  </b-jumbotron>
  </b-container>
</template>

<script>
  export default {

  }
</script>

<style>

.jumbotron{
   margin-top: 80px;
   padding-bottom: 0rem !important;
   height: 350px;
}
#hero-image {
   background-image: url('../assets/Ellipse 1.png');
  background-repeat: repeat-x;
   overflow-y: hidden;
  margin: 56px -30px;
  position: relative;
 
 
 }


 h1{
     /* position: absolute; */
width: 553.99px;
height: 136.4px;
left: 148.17px;
top: 262.8px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 45.4667px;
line-height: 68px;
 }
.jumbotron .jumbo-text {
width: 354.64px;
height: 25.58px;
left: 148.17px;
top: 403.94px;

font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 15.05px;
line-height: 26px;
 }

.hero img {
  width: 400px;
  float: right;
}
/* 
.jumbotron .washing-machine{
        width: 60%;
    position: absolute;
    top: 120px;
} */
</style>