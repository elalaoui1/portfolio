<template>
   <!-- ======= Header ======= -->
<header id="header" class="d-flex flex-column justify-content-center">

<nav id="navbar" class="navbar nav-menu">
  <ul>
    <li><router-link class="nav-link scrollto" :class="{'active':activeLink==='/'}" @click="setActuve('/')" to="/"><i class="bx bx-home"></i> <span>Home</span></router-link></li>
    <li><router-link class="nav-link scrollto" :class="{'active':activeLink==='/about'}" @click="setActuve('/about')"  to="/about"><i class="bx bx-user"></i> <span>About</span></router-link></li>
    <li><router-link class="nav-link scrollto" :class="{'active':activeLink==='/resume'}" @click="setActuve('/resume')" to="/resume"><i class="bx bx-file-blank"></i><span>Resume</span></router-link></li>
    <li><router-link class="nav-link scrollto" :class="{'active':activeLink==='/works'}" @click="setActuve('/works')" to="/works"><i class="bx bx-book-content"></i> <span>Works</span></router-link></li>
    <!-- <li><router-link class="nav-link scrollto" :class="{'active':activeLink==='/services'}" @click="setActuve('/services')" to="/services"><i class="bx bx-server"></i><span>Services</span></router-link></li> -->
    <li><router-link class="nav-link scrollto" :class="{'active':activeLink==='/contact'}" @click="setActuve('/contact')" to="/contact"><i class="bx bx-envelope"></i><span>Contact</span></router-link></li>
    <!-- <li><a class="nav-link scrollto" @click="toggleDarkMode"  ><i class='bx bxs-moon'></i><span>Mode</span></a></li> -->
  </ul>
</nav><!-- .nav-menu -->

</header><!-- End Header -->
</template>

<script>
export default {

data(){
  return{
    activeLink:"/"
  }
},
  methods:{
    setActuve(url){
      this.activeLink = url;
      
    }
    
  }
}
</script>

<style scoped>
@media screen and (max-width: 991px) {
  
  #header{
    align-items: center !important;
    justify-content: start !important;
    /* flex-direction: row !important;  */
    background-color:transparent;
    height: 150px !important;
    width: 100% !important;
    position: fixed !important;
    top: 90% !important;
  }
  .nav-menu * {
    display: flex !important;
    gap:10px;
  }

  .nav-menu a span {
    display: none !important;

  }
}


</style>