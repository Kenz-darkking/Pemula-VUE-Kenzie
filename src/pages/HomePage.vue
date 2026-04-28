<template>
  <div class="home-page">
    <Hero />
    <Brands />
    <Categories />
    <BestSellers />
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import Brands from '../components/Brands.vue'
import Categories from '../components/Categories.vue'
import BestSellers from '../components/BestSellers.vue'
</script>

<style scoped>
.home-page {
  flex: 1;
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
