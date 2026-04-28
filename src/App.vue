<script setup>
import { ref } from 'vue'
import { store } from './store'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HomePage from './pages/HomePage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'
import CartPage from './pages/CartPage.vue'
import CategoriesPage from './pages/CategoriesPage.vue'
import SearchPage from './pages/SearchPage.vue'
</script>

<template>
  <div id="app">
    <Header />
    
    <!-- Home Page -->
    <HomePage v-if="store.currentPage === 'home'" />
    
    <!-- Products Page -->
    <ProductsPage v-else-if="store.currentPage === 'products'" />
    
    <!-- Product Details -->
    <ProductDetailPage v-else-if="store.currentPage === 'product-detail'" />
    
    <!-- Cart Page -->
    <CartPage v-else-if="store.currentPage === 'cart'" />
    
    <!-- Categories Page -->
    <CategoriesPage v-else-if="store.currentPage === 'categories'" />
    
    <!-- Search Page -->
    <SearchPage v-else-if="store.currentPage === 'search'" />
    
    <Footer />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8f9fa;
  color: #333;
  line-height: 1.6;
}

#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #ffb800;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ff9900;
}

/* Global Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
