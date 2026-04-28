<template>
  <div class="categories-page">
    <h1>Shop by Category</h1>

    <div class="categories-grid">
      <div 
        v-for="cat in categoryList" 
        :key="cat.name"
        class="category-card"
        @click="selectCategory(cat)"
        :style="{ animationDelay: `${categoryList.indexOf(cat) * 0.1}s` }"
      >
        <div class="category-icon">{{ cat.icon }}</div>
        <h3>{{ cat.name }}</h3>
        <p>{{ cat.count }} Products</p>
      </div>
    </div>

    <div v-if="selectedCat" class="category-products">
      <div class="back-btn" @click="selectedCat = null">← Back to Categories</div>
      <h2>{{ selectedCat.name }} Products</h2>
      
      <div class="products-list">
        <div 
          v-for="product in categoryProducts" 
          :key="product.id"
          class="category-product-card"
        >
          <div class="product-image">{{ product.image }}</div>
          <h4>{{ product.name }}</h4>
          <p class="price">Rp {{ formatPrice(product.price) }}</p>
          <div class="card-actions">
            <button class="btn-view" @click="viewDetails(product)">View</button>
            <button class="btn-add" @click="addToCart(product)">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { store } from '../store.js'
import { products } from '../products.js'

const selectedCat = ref(null)

const categoryList = [
  { name: 'Gaming', icon: '🎮', count: 2 },
  { name: 'Work', icon: '💼', count: 2 },
  { name: 'Student', icon: '🎓', count: 1 },
  { name: 'Creator', icon: '🎬', count: 2 }
]

const categoryProducts = computed(() => {
  if (!selectedCat.value) return []
  return products.filter(p => p.category === selectedCat.value.name)
})

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID').format(price)
}

const selectCategory = (cat) => {
  selectedCat.value = cat
}

const viewDetails = (product) => {
  store.selectedProduct = product
  store.currentPage = 'product-detail'
}

const addToCart = (product) => {
  store.addToCart(product)
  alert(`${product.name} ditambahkan ke keranjang!`)
}
</script>

<style scoped>
.categories-page {
  flex: 1;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  animation: fadeIn 0.6s ease-in-out;
}

.categories-page h1 {
  font-size: 32px;
  margin-bottom: 40px;
  color: #333;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
}

.category-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 40px 20px;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: slideInUp 0.6s ease-out both;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 32px rgba(102, 126, 234, 0.4);
}

.category-icon {
  font-size: 60px;
  margin-bottom: 15px;
}

.category-card h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.category-card p {
  font-size: 14px;
  opacity: 0.9;
}

.category-products {
  animation: fadeIn 0.6s ease-in-out;
}

.back-btn {
  display: inline-block;
  background: #fff;
  border: 2px solid #ffb800;
  color: #ffb800;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: #ffb800;
  color: #fff;
}

.category-products h2 {
  font-size: 28px;
  margin-bottom: 30px;
  color: #333;
}

.products-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.category-product-card {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.category-product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}

.product-image {
  font-size: 60px;
  margin-bottom: 15px;
}

.category-product-card h4 {
  font-size: 14px;
  margin-bottom: 10px;
}

.price {
  font-size: 16px;
  font-weight: 700;
  color: #ffb800;
  margin-bottom: 15px;
}

.card-actions {
  display: flex;
  gap: 10px;
}

.btn-view,
.btn-add {
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  transition: all 0.3s ease;
}

.btn-view {
  background: #f0f0f0;
  color: #333;
}

.btn-view:hover {
  background: #e0e0e0;
}

.btn-add {
  background: #ffb800;
  color: #000;
}

.btn-add:hover {
  background: #ff9900;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .products-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
