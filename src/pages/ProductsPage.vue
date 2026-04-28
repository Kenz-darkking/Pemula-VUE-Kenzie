<template>
  <div class="products-page">
    <div class="products-header">
      <h1>All Products</h1>
      <div class="products-filter">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="selectedCategory = category"
          :class="{ active: selectedCategory === category }"
          class="filter-btn"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <div class="products-container">
      <div class="products-grid">
        <div class="product-card" v-for="product in filteredProducts" :key="product.id" style="animation: fadeIn 0.6s ease-in-out">
          <div class="product-image">
            <div class="image-emoji">{{ product.image }}</div>
          </div>
          
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p class="price">Rp {{ formatPrice(product.price) }}</p>
            
            <div class="rating">
              <span v-for="i in 5" :key="i" class="star">⭐</span>
              <span class="reviews">({{ product.reviews }})</span>
            </div>
            
            <p class="code">SKU: {{ product.code }}</p>
            
            <div class="product-actions">
              <button class="btn-details" @click="viewDetails(product)">View Details</button>
              <button class="btn-cart" @click="addToCart(product)">Add to Cart</button>
            </div>
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

const selectedCategory = ref('All')
const selectedProduct = ref(null)

const categories = computed(() => ['All', ...new Set(products.map(p => p.category))])

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'All') {
    return products
  }
  return products.filter(p => p.category === selectedCategory.value)
})

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID').format(price)
}

const addToCart = (product) => {
  store.addToCart(product)
  alert(`${product.name} ditambahkan ke keranjang!`)
}

const viewDetails = (product) => {
  store.selectedProduct = product
  store.currentPage = 'product-detail'
}
</script>

<style scoped>
.products-page {
  flex: 1;
  padding: 40px 20px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  animation: fadeIn 0.6s ease-in-out;
}

.products-header {
  margin-bottom: 40px;
}

.products-header h1 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
}

.products-filter {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 10px 20px;
  border: 2px solid #ddd;
  border-radius: 25px;
  background: #fff;
  color: #333;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: #ffb800;
  color: #ffb800;
}

.filter-btn.active {
  background: #ffb800;
  border-color: #ffb800;
  color: #fff;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
}

.product-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
  border-color: #ffb800;
}

.product-image {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 30px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  position: relative;
  overflow: hidden;
}

.product-image::before {
  content: '';
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(255, 184, 0, 0.1);
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite;
}

.image-emoji {
  font-size: 100px;
  position: relative;
  z-index: 1;
}

.product-info {
  padding: 20px;
}

.product-info h3 {
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
  line-height: 1.3;
}

.price {
  font-size: 18px;
  font-weight: 700;
  color: #ffb800;
  margin-bottom: 10px;
}

.rating {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
}

.star {
  font-size: 12px;
}

.reviews {
  font-size: 12px;
  color: #666;
}

.code {
  font-size: 11px;
  color: #999;
  margin-bottom: 15px;
}

.product-actions {
  display: flex;
  gap: 10px;
}

.btn-details,
.btn-cart {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-details {
  background: #f0f0f0;
  color: #333;
}

.btn-details:hover {
  background: #e0e0e0;
}

.btn-cart {
  background: #ffb800;
  color: #000;
}

.btn-cart:hover {
  background: #ff9900;
  transform: scale(1.05);
}

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

@media (max-width: 768px) {
  .products-page {
    padding: 20px;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
  }
}
</style>
