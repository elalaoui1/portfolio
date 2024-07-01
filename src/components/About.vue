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
    {name: 'CSS', icon: '/assets/icons/css.svg',cpt: 50},
    {name: 'JS', icon: '/assets/icons/js.svg' ,cpt: 100},
    {name: 'JGUERY', icon: '/assets/icons/jquery.svg' ,cpt:150},
    {name: 'BOOTSTRAP 5', icon: '/assets/icons/bootstrap.svg' ,cpt: 200},
    {name: 'TAILWIND CSS', icon: '/assets/icons/tailwind-css.svg' ,cpt: 250},
    {name: 'VUE JS', icon: '/assets/icons/vuejs.svg' ,cpt: 300},
    {name: 'EXPRESS JS', icon: '/assets/icons/express-js.svg' ,cpt: 350},
    {name: 'LARAVEL', icon: '/assets/icons/laravel.svg' ,cpt: 400},
    {name: 'MYSQL', icon: '/assets/icons/mysql.svg' ,cpt: 450},
    {name: 'MONGODB', icon: '/assets/icons/mongodb.svg' ,cpt: 500},
    {name: 'DOCKER', icon: '/assets/icons/docker.svg' ,cpt: 550},
    {name: 'GIT', icon: '/assets/icons/git.svg' ,cpt: 600},
    {name: 'GITHUB', icon: '/assets/icons/github.svg' ,cpt: 650},
    {name: 'STACK OVERFLOW', icon: '/assets/icons/stack-overflow.svg' ,cpt: 700},
    {name: 'LINUX', icon: '/assets/icons/linux.svg',cpt:750},],
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
  background-color: #1f2937;
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

  

}
.topics .card:hover{

  outline: 2px dashed #3b82f6;

}
.topics h1{
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
    width: 100%;
    text-align: start;
    padding-left: 20px;
    background: linear-gradient(to right, #3498db, #9b59b6);
    background-clip: text;
    color: transparent;
    text-transform: capitalize;
  
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