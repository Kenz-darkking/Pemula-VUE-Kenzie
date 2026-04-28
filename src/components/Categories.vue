<template>
  <section class="categories">
    <div class="categories-container">
      <h2 class="categories-title">Select Categories</h2>
      <p class="categories-subtitle">Find the perfect laptop for your needs</p>
      
      <div class="categories-grid">
        <div 
          class="category-card" 
          v-for="(category, index) in categories"
          :key="category.name"
          @click="selectCategory(category)"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="category-icon">{{ category.icon }}</div>
          <h3>{{ category.name }}</h3>
          <p class="category-desc">{{ category.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { store } from '../store'

const categories = [
  { name: 'For Gaming', icon: '🎮', desc: 'High performance for gaming' },
  { name: 'For Work', icon: '💼', desc: 'Professional productivity' },
  { name: 'For Student', icon: '🎓', desc: 'Budget-friendly options' },
  { name: 'Content Creator', icon: '🎬', desc: 'Creative professionals' }
]

const selectCategory = (category) => {
  store.currentPage = 'categories'
}
</script>

<style scoped>
.categories {
  padding: 80px 20px;
  background: #fff;
}

.categories-container {
  max-width: 1200px;
  margin: 0 auto;
}

.categories-title {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 10px 0;
  color: #333;
  animation: fadeIn 0.6s ease-in-out;
}

.categories-subtitle {
  text-align: center;
  font-size: 16px;
  color: #666;
  margin-bottom: 50px;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.category-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px 25px;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #fff;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.2);
  animation: slideUp 0.6s ease-out both;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.category-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.category-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(102, 126, 234, 0.4);
  border-color: #ffb800;
}

.category-card:hover::before {
  opacity: 1;
}

.category-icon {
  font-size: 56px;
  margin-bottom: 15px;
  display: block;
  animation: bounce 2s ease-in-out infinite;
}

.category-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin: 0 0 8px 0;
  position: relative;
  z-index: 1;
}

.category-desc {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  position: relative;
  z-index: 1;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@media (max-width: 768px) {
  .categories {
    padding: 60px 20px;
  }

  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .category-card {
    padding: 30px 15px;
  }

  .category-icon {
    font-size: 40px;
  }

  .category-card h3 {
    font-size: 16px;
  }

  .categories-title {
    font-size: 24px;
  }
}
</style>
