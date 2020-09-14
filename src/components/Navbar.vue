<template>
  <div id="app">
    <div class="container">
      <div id="nav">
        <div>
          <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="/"><img class="logo" src="../assets/logo.png"/></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto" right>
                <b-navbar-nav>
                  <b-nav-item href="#" class="about-us">About Us</b-nav-item>
                  <b-nav-item href="#" class="contact-us">Contact Us</b-nav-item>
                  <b-nav-item href="#" class="food-store">Food Store</b-nav-item>
                  <b-nav-item href="#" class="blog">Blog</b-nav-item>
                </b-navbar-nav>
                <b-button size="sm" class="my-2 my-sm-0 login-text" type="submit">Login </b-button>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#nav {
  position: fixed;
  width: 1440px;
  height: 72px;
  left: 0px;
  top: 0px;
  z-index: 1000;

  background: #ffffff;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.05);
}
.logo {
  position: absolute;
  width: 180px;
  height: 50px;
  left: 109px;
  top: 11px;
}
.bg-info {
  background-color: transparent !important;
}
.navbar-dark .navbar-nav .nav-link {
  color: #020202 !important;
}
.about-us {
  position: absolute;
  width: 150px;
  height: 25px;
  left: 775.67px;
  top: 14.67px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16.6667px;
  line-height: 25px;
}
.contact-us {
  position: absolute;
  height: 25px;
  width: 150px;
  left: 879px;
  top: 14.67px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16.6667px;
  line-height: 25px;
}
.food-store {
  position: absolute;
  width: 150px;
  height: 25px;
  left: 999px;
  top: 14.67px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16.6667px;
  line-height: 25px;
}
.blog {
  position: absolute;
  width: 38.33px;
  height: 25px;
  left: 1115.67px;
  top: 14.67px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16.6667px;
  line-height: 25px;
}
.nav-link:last-child {
  margin-right: 30px;
}
.btn-sm {
  /* border-radius: 1.2rem !important; */
  position: absolute;
  border: #63c132;
  width: 93.33px;
  height: 43.33px;
  left: 1237.33px;
  background: #63c132;
  border-radius: 61.6667px;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
}
.btn-sm:hover {
  background: #63c132 !important;
}
</style>
