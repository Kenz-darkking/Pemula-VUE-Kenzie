<template>
  <header class="header">
    <div class="header-container">
      <div class="logo" @click="goHome" style="cursor: pointer;">
        <img :src="logoImage" alt="LapTopia logo" class="logo-icon" />
        <span class="logo-text">LapTopia</span>
      </div>
      
      <nav class="nav">
        <button @click="goPage('home')" :class="{ active: store.currentPage === 'home' }" class="nav-link">🏠 Home</button>
        <button @click="goPage('products')" :class="{ active: store.currentPage === 'products' }" class="nav-link">📦 Products</button>
        <button @click="goPage('categories')" :class="{ active: store.currentPage === 'categories' }" class="nav-link">🏷️ Categories</button>
      </nav>

      <div class="header-actions">
        <div class="search-box">
          <input 
            v-model="searchInput"
            type="text"
            placeholder="Search laptops..."
            @keyup.enter="performSearch"
            @focus="showSearchPlaceholder = true"
            @blur="showSearchPlaceholder = false"
            class="search-input"
          >
          <button @click="performSearch" class="btn-search-icon">🔍</button>
        </div>
        
        <button class="btn-cart" @click="goPage('cart')">
          🛒 Cart
          <span v-if="store.getCartCount() > 0" class="cart-badge">{{ store.getCartCount() }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { store } from '../store'
import logoImage from '../assets/logo.png'

const searchInput = ref('')
const showSearchPlaceholder = ref(false)

const goPage = (page) => {
  store.currentPage = page
}

const goHome = () => {
  store.currentPage = 'home'
  store.searchQuery = ''
}

const performSearch = () => {
  const query = searchInput.value.trim()
  if (query.length > 0) {
    store.performSearch(query)
    searchInput.value = ''
  }
}
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 15px 0;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
  position: sticky;
  top: 0;
  z-index: 100;
  animation: slideDown 0.5s ease-out;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  gap: 40px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.logo-text {
  background: linear-gradient(90deg, #fff 0%, #e0e0e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
}

.nav {
  display: flex;
  gap: 20px;
  flex: 1;
}

.nav-link {
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid transparent;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  white-space: nowrap;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.nav-link.active {
  background: #ffb800;
  color: #000;
  border-color: #fff;
}

.header-actions {
  display: flex;
  gap: 15px;
  align-items: center;
}

.search-box {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  padding: 8px 15px;
  transition: all 0.3s ease;
  min-width: 250px;
}

.search-box:focus-within {
  background: rgba(255, 255, 255, 0.25);
  border-color: #ffb800;
  box-shadow: 0 0 20px rgba(255, 184, 0, 0.3);
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  padding: 0;
  placeholder-shown: rgba(255, 255, 255, 0.8);
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.search-input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.btn-search-icon {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  margin-left: 10px;
}

.btn-search-icon:hover {
  transform: scale(1.2);
  color: #ffb800;
}

.btn-cart {
  padding: 10px 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  color: #fff;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
}

.btn-cart:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: #ffb800;
  transform: translateY(-3px);
}

.cart-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffb800;
  color: #000;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 700;
  margin-left: 5px;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

@media (max-width: 1024px) {
  .header-container {
    gap: 20px;
  }

  .search-box {
    min-width: 180px;
  }

  .nav-link {
    font-size: 13px;
    padding: 8px 15px;
  }
}

@media (max-width: 768px) {
  .header-container {
    flex-wrap: wrap;
    gap: 15px;
  }

  .nav {
    order: 3;
    width: 100%;
    gap: 10px;
  }

  .nav-link {
    padding: 8px 12px;
    font-size: 12px;
    flex: 1;
  }

  .search-box {
    min-width: auto;
    flex: 1;
    order: 2;
  }

  .header-actions {
    order: 1;
    width: 100%;
  }
}
</style>
