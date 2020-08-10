<template>
  <div class="footer2" right>
    <b-container>
         <b-row>
            <b-col cols="8">
                <p class="footer2-text">Sycamore is authorized and regulated by Money Lenders Act Cap 52. The Sycamore
                    brand is a property of Sycamore integrated Solutions Limited.
                    &copy; Copyrights, All right reserved by Sycamore.
                </p>
            </b-col>
            <b-col cols="4">
             <div class="brand-icon">
                <fa-icon :icon="['fab', 'linkedin']" />
                <fa-icon :icon="['fab', 'facebook-square']" />
                <fa-icon :icon="['fab', 'instagram']" />
                <fa-icon :icon="['fab', 'whatsapp']" />
                <fa-icon :icon="['fab', 'twitter']" />
             </div>
              
            </b-col>
          </b-row>
    </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer2 {
    height: 66.75px;
    background: #4D4D4D;
}
.footer2-text {
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 10px;
margin-top: 20px;
line-height: 15px;
color: #FFFFFF;
}
.footer2 .brand-icon {
    float: right;
    margin-top: 20px;
    color: #fff;
}
.footer2 .brand-icon svg {
    margin: 0 10px;
}
</style>