<template>
<div class="footer">
 <b-container>
   <b-row>
    <b-col cols="5">
        <img class="footer-logo" src="../assets/logo.png">
        <p>At Sycamore, our primary objective is to create more opportunities to get you financially empowered
            Follow us on social media Platforms, as we make this objective a reality.
        </p>
        <b-button class="footer-btn"><a :href="`${publicPath}sycamore.ng-company-brochure-2020.pdf`" download>
  Download our brochure 
</a></b-button>
    </b-col>
    <b-col cols="7">
    <b-row>
       <b-col cols="4">
           <h3>COMPANY</h3>
           <ul>
               <li>About Us</li>
               <li>Contact Us</li>
               <li>FAQs</li>
               <li>Blog</li>
               <li>Food Store</li>
           </ul>
       </b-col>
       <b-col cols="4">
           <h3>LEGALS</h3>
           <ul>
               <li>Privacy Policy</li>
               <li>Terms</li>
           </ul>
       </b-col>
       <b-col cols="4">
           <h3>COMPANY</h3>
           <ul>
               <li> <fa-icon icon="map-marker" class="footer-icons"/> 15, Modupe Johnson Crescent, Surulere, Lagos</li>
               <li><fa-icon icon="phone-alt" class="footer-icons"/> +2348097341810</li>
           </ul>
       </b-col>
    </b-row>
    </b-col>
  </b-row>
</b-container>
</div>

</template>

<script>
export default {
 data: () => ({ publicPath: process.env.BASE_URL })
}
</script>

<style>
.footer {
margin-top: 70px;
height: 293.75px;
left: 0px;
top: 2348px;
background: #E8F2E9;
border: 0.125px solid #A4AE9D;
box-sizing: border-box;
}
.footer-logo {
  /* position: absolute; */
  width: 180px;
  height: 50px;
  margin-top:6.66%;;
}
.footer h3 {
   font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 16.25px;
line-height: 24px;
color: #002D04;
 margin-top:47.66%;
 margin-left: 32px;
}
.footer p {
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 13.75px;
line-height: 21px;
margin-top: 30px;
width: 90%;
}
.footer ul {
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 12.5px;
line-height: 19px;
margin-top: 30px;
color: #6D7766;
list-style: none;

}
.footer-icons {
color: #63C132;

}

.footer-btn {
    background-color: #63C132;
    border: #63C132;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    border-radius: 30px;
    padding: 10px 20px;
}
.footer-btn a {
  text-decoration: none;
  color: #fff !important;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  
}
.footer-btn:hover {
    background-color: #63C132;
}
.footer-btn:active {
    background-color: #63C132 !important;
}
</style>