<template>
  
  
    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="topics">
    <h1># Skills</h1>
      <Topics :data="data"/>

  </div>
    </section><!-- End Skills Section -->


</template>

<script>
import Topics from './Topics.vue'
export default {
  components:{
    Topics

  },
data() {
  return {
    data: [{name: 'HTML', icon: '/assets/icons/html.svg',cpt: 5},
    {name: 'CSS', icon: '/assets/icons/css.svg',cpt: 10},
    {name: 'JS', icon: '/assets/icons/js.svg' ,cpt: 20},
    {name: 'JGUERY', icon: '/assets/icons/jquery.svg' ,cpt:30},
    {name: 'BOOTSTRAP 5', icon: '/assets/icons/bootstrap.svg' ,cpt: 40},
    {name: 'TAILWIND CSS', icon: '/assets/icons/tailwind-css.svg' ,cpt: 50},
    {name: 'VUE JS', icon: '/assets/icons/vuejs.svg' ,cpt: 60},
    {name: 'REACT JS', icon: '/assets/icons/reactjs.svg' ,cpt: 60},
    {name: 'EXPRESS JS', icon: '/assets/icons/express-js.svg' ,cpt: 70},
    {name: 'LARAVEL', icon: '/assets/icons/laravel.svg' ,cpt: 80},
    {name: 'MYSQL', icon: '/assets/icons/mysql.svg' ,cpt: 90},
    {name: 'MONGODB', icon: '/assets/icons/mongodb.svg' ,cpt: 100},
    {name: 'DOCKER', icon: '/assets/icons/docker.svg' ,cpt: 110},
    {name: 'GIT', icon: '/assets/icons/git.svg' ,cpt: 120},
    {name: 'GITHUB', icon: '/assets/icons/github.svg' ,cpt: 130},
    {name: 'STACK OVERFLOW', icon: '/assets/icons/stack-overflow.svg' ,cpt: 140},
    {name: 'LINUX', icon: '/assets/icons/linux.svg',cpt:150},
    {name: 'WORDPRESS', icon: '/assets/icons/wordpress.svg',cpt:160},
    {name: 'ELEMENTOR', icon: '/assets/icons/elementor.svg',cpt:170},
  ],
  };
},
}
</script>

<style>

/* topics */

.topics {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  /* background-color: #111827; */
  color: white;
}
.topics .card{
  flex: 1 calc(25% - 20px);
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #00010de5;
  border-radius: 8px;
  text-align: start;
  height: 70px;
  outline: 2px dashed transparent;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* gap: 10px; */
     


}
.topics .card .title{
  font-size: 17px;
  font-weight: 600;
  text-transform: capitalize;
  transition: all 0.3s ease-in-out 0.1s;
}

.topics .card .icon{
  transition: all 0.3s ease-in-out 0.1s;

}
.topics .card:hover{

  outline: 2px dashed #3b82f6;
}
.topics .card:hover .icon{
  transform: scale(1.5) translateY(-20px);

}
.topics .card:hover .icon img{
  animation: bouncing 0.5s .3s; 

}
.topics .card:hover .title{
  letter-spacing: 2px;
}
.topics .card .icon img{
  object-fit: contain;

}
.topics h1{
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
  @keyframes bouncing {
  from, to { transform: scale(1, 1); }
  25% { transform: scale(0.9, 1.1); }
  50% { transform: scale(1.1, 0.9); }
  75% { transform: scale(0.95, 1.05); }
}

  @media screen and (max-width: 970px) {
  :is(.topics) .card {
    flex: 0 1 calc(50% - 20px); 
  }
}

@media screen and (max-width: 600px) {
  :is(.topics) .card {
    flex: 0 1 calc(90% - 20px); 
  }
}
</style>