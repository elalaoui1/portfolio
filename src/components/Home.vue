<template>
  <section id="hero-all" class="hero-all">
  <section id="hero" class="d-flex flex-row">
    <div class="container" data-aos="zoom-in" data-aos-delay="50">
      <p>Hi, I'm <span> ELALAOUI Abdelkarim </span> <br>I’m a web developer who designs web applications with optimized efficiency and user experience, solving problems in the back end.</p>
     
     
      <div class="social-links">
        <a href="https://x.com/Karimelalaoui6" target="_new" class="twitter"><i class="bi bi-twitter-x"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100073965961534" target="_new" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="https://www.instagram.com/a._.elalaoui/" target="_new" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="https://www.linkedin.com/in/elalaoui-abdelkarim-5b1600252/" target="_new" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        <a href="https://github.com/elalaoui1" target="_new" class="github"><i class="bx bxl-github"></i></a>
        <button class="btn-my-cv" @click="downloadCV"><span class="btn-text">Get My CV</span></button>
      </div>
    </div>
  </section>
  <div class="wrapper" data-aos="zoom-in" data-aos-delay="50">
    <div class="circle"></div>

      <img src="/assets/img/im/home-perfil.png" alt="" width="300">
    </div>
  </section>
</template>

<script>
export default {    
  data() {
    return {
     
    };
  },
  components: {
   
  },
  mounted() {
    const slider = document.querySelector(".slider input");
      const img = document.querySelector(".images .img-2");
      const dragLine = document.querySelector(".slider .drag-line");
      slider.oninput = ()=>{
        let sliderVal = slider.value;
        dragLine.style.left = sliderVal + "%";
        img.style.width = sliderVal + "%";
      }
      
  },
  methods: {
    downloadCV(){
        const link = document.createElement('a');
        link.href = '/assets/ELALAOUI_ABDELKARIM_EN.pdf'; 
        link.download = 'ELALAOUI_ABDELKARIM_CV.pdf'; 
        link.click();
      
  }
}
}
</script>

<style>

.btn-my-cv{
  position: relative;
  top: -15px;
  right: 20px;
  float: right;
  padding: 10px;
  font-weight: 700;
  color: #0563bb;
  border: 2px solid #0563bb;
  border-radius: 10px;
  /* width: 110px; */
}
.btn-my-cv:hover{
  border: 2px dashed #0563bb;
}

.wrapper {
  position: relative;
  display: inline-block;
}

.circle {
  position: absolute;
  top: 60%;
  left: 50%;
  width: 400px;
  height:400px;
  background-color: #838383ea; /* Adjust the color as needed */
  border-radius: 50%;
  z-index: -1; /* Ensure the circle is behind the image */
  transform: translate(-50%, -50%);
}

</style>