<template>
  <section id="hero-all">
  <section id="hero" class="d-flex flex-row">
    <div class="container" data-aos="zoom-in" data-aos-delay="100">
      <p>Hi, I'm <span> ELALAOUI Abdelkarim </span> <br>I’m a web developer who designs web applications with optimized efficiency and user experience, solving problems in the back end.</p>
     
     
      <div class="social-links">
        <a href="https://x.com/Karimelalaoui6" target="_new" class="twitter"><i class="bi bi-twitter-x"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100073965961534" target="_new" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="https://www.instagram.com/a._.elalaoui/" target="_new" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="https://www.linkedin.com/in/elalaoui-abdelkarim-5b1600252/" target="_new" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        <a href="https://github.com/karim2251" target="_new" class="github"><i class="bx bxl-github"></i></a>
      </div>
    </div>
  </section>
  <div class="wrapper">
      <div class="images">
        <div class="img-1"></div>
        <div class="img-2"></div>
      </div>
      <div class="slider">
        <div class="drag-line">
          <span></span>
        </div>
        <input type="range" min="0" max="100" value="50">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
     
    };
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
  
  }
}
</script>

<style>


</style>