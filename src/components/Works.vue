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
          name: 'D-DEF SaaS',
          description: 'Manage your school effortlessly with tools for schedules, rooms, and trainers...',
          skills: ['/assets/img/icons/laravel.svg', '/assets/img/icons/bootstrap.svg',],
          link: 'https://etabhub.com/',
          cpt: 10
        },
        {
          id: 2,
          img: '/assets/img/project_Img/moroccoglimpsee.png',
          name: 'Morocco Glimpse',
          description: 'Explore Morocco’s hidden gems with unique, unforgettable tours. and landscapes.',
          skills: ['/assets/img/icons/laravel.svg', '/assets/img/icons/Livewire.svg', '/assets/img/icons/bootstrap.svg'],
          link: 'https://www.moroccoglimpse.com/',
          cpt:50
        },
      ]
    }
  }
}
</script>

<style>

</style>