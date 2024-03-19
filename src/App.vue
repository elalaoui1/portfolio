<template>
  <Headervue />

  <!-- views -->
  <main id="main">
    <router-view />
  </main>

</template>

<script>
import Headervue from './components/Header.vue'

export default {
components:{
    Headervue
}
}
</script>

<style>

</style>