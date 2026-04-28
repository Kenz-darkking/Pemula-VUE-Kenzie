<template>
  <section class="best-sellers">
    <div class="best-sellers-container">
      <h2 class="best-sellers-title">BEST SELLER</h2>
      <p class="best-sellers-subtitle">Check out our most popular products</p>
      
      <div class="products-grid">
        <div 
          class="product-card" 
          v-for="(product, index) in products"
          :key="product.id"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="product-image">
            <div class="laptop-image">{{ product.image }}</div>
            <div class="discount-badge">-15%</div>
          </div>
          
          <div class="product-body">
            <h3 class="product-name">{{ product.name }}</h3>
            
            <div class="product-rating">
              <span v-for="i in 5" :key="i" class="star">⭐</span>
              <span class="rating-count">({{ product.reviews }})</span>
            </div>
            
            <p class="product-code">{{ product.code }}</p>
            
            <div class="price-section">
              <span class="current-price">Rp {{ formatPrice(product.price) }}</span>
              <span class="original-price">Rp {{ formatPrice(Math.floor(product.price * 1.18)) }}</span>
            </div>
            
            <div class="product-actions">
              <button class="btn-details" @click="viewDetails(product)">👁️ View Details</button>
              <button class="btn-add-cart" @click="addToCart(product)">🛒 Add Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { store } from '../store'
import { products } from '../products'

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID').format(price)
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
.best-sellers {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 80px 20px;
}

.best-sellers-container {
  max-width: 1200px;
  margin: 0 auto;
}

.best-sellers-title {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 10px 0;
  color: #333;
  animation: fadeIn 0.6s ease-in-out;
}

.best-sellers-subtitle {
  text-align: center;
  font-size: 16px;
  color: #666;
  margin-bottom: 50px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.product-card {
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  transition: all 0.4s ease;
  border: 2px solid transparent;
  animation: fadeInUp 0.6s ease-out both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.product-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.15);
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
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 0.3; }
}

.laptop-image {
  font-size: 90px;
  position: relative;
  z-index: 1;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.discount-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #ffb800;
  color: #000;
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(255, 184, 0, 0.3);
}

.product-body {
  padding: 20px;
}

.product-name {
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin: 0 0 10px 0;
  line-height: 1.3;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 10px;
}

.star {
  font-size: 14px;
}

.rating-count {
  font-size: 12px;
  color: #666;
}

.product-code {
  font-size: 12px;
  color: #999;
  margin: 8px 0;
}

.price-section {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 12px 0 15px 0;
}

.current-price {
  font-size: 18px;
  font-weight: 700;
  color: #ffb800;
}

.original-price {
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
}

.product-actions {
  display: flex;
  gap: 10px;
}

.btn-details,
.btn-add-cart {
  flex: 1;
  padding: 11px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.btn-details {
  background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
  color: #333;
  border: 1px solid #ddd;
}

.btn-details:hover {
  background: linear-gradient(135deg, #e0e0e0 0%, #d0d0d0 100%);
  transform: translateX(-3px);
}

.btn-add-cart {
  background: linear-gradient(135deg, #ffb800 0%, #ff9900 100%);
  color: #000;
}

.btn-add-cart:hover {
  background: linear-gradient(135deg, #ff9900 0%, #ff7700 100%);
  transform: translateX(3px);
  box-shadow: 0 8px 20px rgba(255, 184, 0, 0.3);
}

@media (max-width: 768px) {
  .best-sellers {
    padding: 60px 20px;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }

  .best-sellers-title {
    font-size: 24px;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
