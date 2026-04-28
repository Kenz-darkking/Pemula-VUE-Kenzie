<template>
  <div class="search-page">
    <div class="search-container">
      <div class="search-header">
        <button class="btn-back" @click="goBack">← Back</button>
        <h1>Search Results</h1>
        <p v-if="searchQuery" class="search-query">Results for: <strong>"{{ searchQuery }}"</strong></p>
      </div>

      <div v-if="searchResults.length === 0" class="no-results">
        <div class="no-results-icon">🔍</div>
        <h2>No products found</h2>
        <p>Try searching with different keywords</p>
        <button class="btn-browse" @click="goToProducts">Browse All Products</button>
      </div>

      <div v-else class="search-results">
        <p class="results-count">Found {{ searchResults.length }} product(s)</p>
        
        <div class="products-grid">
          <div 
            class="product-card" 
            v-for="product in searchResults"
            :key="product.id"
            style="animation: fadeIn 0.6s ease-in-out"
          >
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
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { store } from '../store.js'
import { products } from '../products.js'

const searchQuery = computed(() => store.searchQuery)

const searchResults = computed(() => {
  if (!searchQuery.value) return []
  
  const query = searchQuery.value.toLowerCase().trim()
  return products.filter(product => {
    const name = product.name.toLowerCase()
    const category = product.category.toLowerCase()
    const code = product.code.toLowerCase()
    const description = product.description.toLowerCase()
    
    return (
      name.includes(query) ||
      category.includes(query) ||
      code.includes(query) ||
      description.includes(query)
    )
  })
})

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID').format(price)
}

const goBack = () => {
  store.currentPage = 'home'
  store.searchQuery = ''
}

const goToProducts = () => {
  store.currentPage = 'products'
}

const addToCart = (product) => {
  store.addToCart(product)
}

const viewDetails = (product) => {
  store.selectedProduct = product
  store.currentPage = 'product-detail'
}
</script>

<style scoped>
.search-page {
  flex: 1;
  padding: 40px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  animation: fadeIn 0.6s ease-in-out;
}

.search-container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.search-header {
  margin-bottom: 40px;
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.btn-back {
  background: #f0f0f0;
  border: 2px solid #ffb800;
  color: #ffb800;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 15px;
  transition: all 0.3s ease;
}

.btn-back:hover {
  background: #ffb800;
  color: #fff;
  transform: translateX(-5px);
}

.search-header h1 {
  font-size: 32px;
  margin: 15px 0 10px 0;
  color: #333;
}

.search-query {
  color: #666;
  font-size: 16px;
  margin: 0;
}

.search-query strong {
  color: #ffb800;
}

.no-results {
  text-align: center;
  background: #fff;
  padding: 80px 40px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.no-results-icon {
  font-size: 80px;
  margin-bottom: 20px;
}

.no-results h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

.no-results p {
  color: #666;
  margin-bottom: 30px;
}

.btn-browse {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-browse:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.search-results {
  animation: fadeIn 0.6s ease-in-out;
}

.results-count {
  background: #fff;
  padding: 15px 20px;
  border-radius: 8px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.3;
  }
}

@media (max-width: 768px) {
  .search-page {
    padding: 20px;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
  }

  .search-header {
    padding: 20px;
  }

  .search-header h1 {
    font-size: 24px;
  }
}
</style>