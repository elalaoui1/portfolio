<template>
  
  
    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio section-bg">
      <h2 class="section_title"> # projects</h2>

      <div class="project_container container grid">
        <article v-for="(work, index) in works" :key="index" class="projects_cards" data-aos="fade-up" :data-aos-delay="work.cpt">
          <a :href="work.link" target="_blank" class="project_image">
            <img :src="work.img" alt="image" class="project_img">
          </a>
          <div class="projects_data">
            <h3 class="projects_name">{{work.name}}</h3>
            <p class="projects_description">{{ work.description }}</p>
            <div class="projects_skills">
              <img v-for="(skill, index) in work.skills" :key="index" :src="skill" alt="image" class="projects_skill">
            </div>
            <a :href="work.link" target="_blank" class="projects_button">
              <i class='bx bx-link-alt'></i>
              <span>Visit Project</span>
            </a>
          </div>
        </article>

      </div>
    </section><!-- End Portfolio Section -->


</template>

<script>
export default {
  data() {
    return {
      works: [
        {
          id: 1,
          img: '/assets/img/project_Img/defp.jpg',
          name: 'D-EFP SaaS',
          description: 'Manage your school effortlessly with tools for schedules, rooms, and trainers...',
          skills: ['/assets/img/icons/laravel.svg', '/assets/img/icons/bootstrap.svg','/assets/icons/jquery.svg','/assets/icons/mysql.svg'],
          link: 'https://etabhub.com/',
          cpt: 10
        },
        {
          id: 2,
          img: '/assets/img/project_Img/moroccoglimpsee.png',
          name: 'Morocco Glimpse',
          description: 'Explore Morocco’s hidden gems with unique, unforgettable tours. and landscapes.',
          skills: ['/assets/img/icons/laravel.svg', '/assets/img/icons/Livewire.svg', '/assets/img/icons/bootstrap.svg','/assets/icons/mysql.svg'],
          link: 'https://www.moroccoglimpse.com/',
          cpt:50
        },
        {
          id: 3,
          img: '/assets/img/project_Img/medicareplusee.png',
          name: 'MedicarePlus',
          description: 'MedicarePlus: Your all-in-one solution for efficient, secure healthcare management.',
          skills: ['/assets/img/icons/laravel.svg', '/assets/icons/jquery.svg', '/assets/img/icons/bootstrap.svg','/assets/icons/mysql.svg'],
          link: 'https://medicareplus.ma/',
          cpt:100
        },
        {
          id: 3,
          img: '/assets/img/project_Img/iFoods.png',
          name: 'iFoods',
          description: 'Your ultimate restaurant website for a seamless, modern, and engaging dining experience.',
          skills: ['/assets/icons/wordpress.svg','/assets/icons/elementor.svg','/assets/icons/mysql.svg'],
          link: 'http://ifoods.atwebpages.com/',
          cpt:100
        },
      ]
    }
  }
}
</script>

<style>

</style>