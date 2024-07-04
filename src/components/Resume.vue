<template>
  
  
    <!-- ======= Resume Section ======= -->
    <section id="resume" class="resume">
      <div class="container" data-aos="fade-up">
    <h1># Resume</h1>

        <div v-for="s in study" :key="s" class="card" :class="s.class" data-aos="fade-up"
        data-aos-anchor-placement="center-bottom" :data-aos-delay="s.cpt">
          <div class="head">
            <div class="logo"><img :src="s.img" alt=""></div>
            <div class="title">{{ s.title }}</div>
          </div>
          <div class="content">
            <p>{{ s.place }}</p>
          </div>
        </div>

      </div>
    </section><!-- End Resume Section -->


</template>

<script>
export default {
data(){
  return{
    study:[
    {title:"Développement Digitale",img:'/assets/img/ofppt.jpg',place:'ISTA Ouarzazate (2022 - 2024)',class:'left',cpt:50},
      {title:"Bachelor's degree in physical sciences",img:'/assets/img/school.png',place:' Lycée Qualifiant Bouzeroual (2020 - 2021)',class:'right',cpt:150},
    
    ]
  }
}
}
</script>

<style>
#main{
  width: 1000px;
}

.resume .container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.resume .container h1{
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
    width: 100%;
    text-align: start;
    background: linear-gradient(to top,#9b59b6 , #3498db);
    background-clip: text;
    color: transparent;
    text-transform: capitalize;
  
  }
.resume .container .card {
  width: auto;
  max-width: 45%; 
  /* width:45%; */
  background: linear-gradient(135deg, #2b1e4d 50%, #1F2937 50%);
  border-radius: 10px;
  padding: 25px 15px 15px 15px;
  margin-bottom: 10px;
  clip-path: polygon(4% 7%, 100% 5%, 100% 0, 100% 100%, 80% 100%, 20% 100%, 0 100%, 0 0);
  position: relative;
  
}

.resume .container .card.right {
  align-self: flex-end;
}

.resume .container .card .head{
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  gap: 10px;

}
.resume .container .card .head .title{
    color: white;
    font-weight: 900;
    font-size: 17px;
    text-transform: capitalize;
    
}
.resume .container .card .head .logo img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.resume .container .card .content{
  color: rgb(161, 161, 161);
  font-size: 16px;
  text-align: start;
  padding: 15px 0px 0px 20px;
  text-transform: capitalize;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  #main{
  width: 800px;
}
}
@media screen and (max-width: 768px) {
.resume .container .card.right {
    align-self:flex-start;
}
  .resume .container .card {
    max-width: 100%;
  }
  #main{
  width: 350px;
}
}
</style>