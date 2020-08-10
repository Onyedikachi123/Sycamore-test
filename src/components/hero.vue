<template>
  <b-container class="hero">
   <b-jumbotron>
   
  <b-row>
    <b-col>
     <h1>You deserve the very <br>best!</h1>
     <p class="jumbo-text">you can get it just now, then pay later</p>
    </b-col>
    <b-col>
       <b-row>
        <b-col cols="8" sm="6"><img src="../assets/fridge.png"></b-col>
        <b-col cols="4" sm="6"><img  class="washing-machine" src="../assets/washing-machine.png"></b-col>
      </b-row>
        
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


.jumbotron .washing-machine{
        width: 60%;
    position: absolute;
    top: 120px;
}
</style>