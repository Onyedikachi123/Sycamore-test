<template>
  <b-container>
    <b-card-group deck>
      <b-card>
           <b-row class="procard select">
              <b-col cols="4">
                <div class="select-icon">
                      <fa-icon icon="hand-pointer" class="icons"/>
                </div>
              </b-col>
              <b-col cols="8">
                <p class="icon-text">
                   Select product
                </p>
              </b-col>
           </b-row>
      </b-card>

      <b-card >
         <b-row class="procard upload">
              <b-col cols="4">
                <div class="upload-icon">
                   <fa-icon icon="download" class="icons"/>
                </div>
              </b-col>
              <b-col cols="8">
                <p class="icon-text">
                  Upload document
                </p>
              </b-col>
           </b-row>
      </b-card>

      <b-card >
         <b-row class="procard upfront">
              <b-col cols="4">
                <div class="upfront-icon">
                 <fa-icon icon="chart-pie" class="icons"/>   
                </div>
              </b-col>
              <b-col cols="8">
                <p class="icon-text">
                  Pay 30% Upfront
                </p>
              </b-col>
           </b-row>
      </b-card>

       <b-card >
         <b-row class="procard delivery">
              <b-col cols="4">
                <div class="delivery-icon">
                   <fa-icon icon="truck" class="icons"/> 
                </div>
              </b-col>
              <b-col cols="8">
                <p class="icon-text">
                  Get delivery in 2 days
                </p>
              </b-col>
           </b-row>
      </b-card>
    </b-card-group>
    <h2 class="decorated"><span> Product Category </span></h2>
  </b-container>
</template>

<script>
export default {};
</script>

<style>
  .card {
      height: 50px;
  }

/* headlines with lines */
.decorated{
     overflow: hidden;
     text-align: center;
 }
.decorated > span{
    position: relative;
    display: inline-block;
    font-family: Poppins;
}
.decorated > span:before, .decorated > span:after{
    content: '';
    position: absolute;
    top: 50%;
    border-bottom: 1px solid;
    width: 100vw;
    margin: 0 20px;
}
.decorated > span:before{
    right: 100%;
}
.decorated > span:after{
    left: 100%;
}
span {
    font-size: 15.2537px;;
}
.procard {
  margin-top: -10px;
}
.select-icon {
   width: 36.03px;
    height: 36.03px;
    background: #D99837;
    border-radius: 50%;
    margin-top: -4px;
}
.upload-icon {
    width: 36.03px;
    height: 36.03px;
    border-radius: 50%;
    margin-top: -4px;
    background: #D9D337;
}
.upfront-icon {
    width: 36.03px;
    height: 36.03px;
    border-radius: 50%;
    margin-top: -4px;
    background: #D93739;
}
.delivery-icon {
    width: 36.03px;
    height: 36.03px;
    border-radius: 50%;
    margin-top: -4px;
    background: #45A103;
}
.icon-text {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    margin-left: -30px;
    line-height: 27px;
    color: #000000;
}
.icons {
  margin: 10px;
  color: #fff;
}
</style>
