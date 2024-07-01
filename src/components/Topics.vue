<template>
  
  <div v-for="d in data" :key="d" class="card">
    <span class="icon"><img :src="d.icon" :alt="d.name"></span>
    <span class="title">{{d.name}}</span>
  </div>
</template>

<script>
export default {
   props:['data'],
   
}
</script>

<style>

</style>