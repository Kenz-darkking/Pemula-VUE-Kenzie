<template>
  <div class="product-detail-page">
    <div v-if="store.selectedProduct" class="detail-container">
      <button class="btn-back" @click="goBack">← Back</button>

      <div class="detail-content">
        <div class="detail-image">
          <div class="image-section">
            <div class="image-emoji">{{ store.selectedProduct.image }}</div>
          </div>
        </div>

        <div class="detail-info">
          <h1>{{ store.selectedProduct.name }}</h1>
          
          <div class="category-badge">{{ store.selectedProduct.category }}</div>

          <div class="price-section">
            <p class="current-price">Rp {{ formatPrice(store.selectedProduct.price) }}</p>
          </div>

          <div class="rating-section">
            <div class="stars">
              <span v-for="i in 5" :key="i">⭐</span>
            </div>
            <span class="reviews-count">({{ store.selectedProduct.reviews }} reviews)</span>
          </div>

          <div class="description">
            <h3>Description</h3>
            <p>{{ store.selectedProduct.description }}</p>
          </div>

          <div class="specifications">
            <h3>Specifications</h3>
            <ul>
              <li>✓ Processor: Latest Gen Intel Core i7</li>
              <li>✓ RAM: 16GB DDR5</li>
              <li>✓ Storage: 512GB NVMe SSD</li>
              <li>✓ Display: 15.6" FHD 144Hz</li>
              <li>✓ Battery: Up to 8 hours</li>
              <li>✓ Weight: 1.8kg</li>
            </ul>
          </div>

          <div class="actions">
            <div class="quantity-selector">
              <button @click="quantity > 1 && quantity--">−</button>
              <input v-model="quantity" type="number" min="1">
              <button @click="quantity++">+</button>
            </div>
            <button class="btn-add-cart" @click="addToCart">
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { store } from '../store.js'

const quantity = ref(1)

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID').format(price)
}

const goBack = () => {
  store.currentPage = 'products'
}

const addToCart = () => {
  for (let i = 0; i < quantity.value; i++) {
    store.addToCart(store.selectedProduct)
  }
  alert(`${quantity.value}x ${store.selectedProduct.name} ditambahkan ke keranjang!`)
  quantity.value = 1
}
</script>

<style scoped>
.product-detail-page {
  flex: 1;
  padding: 40px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  animation: fadeIn 0.6s ease-in-out;
}

.detail-container {
  max-width: 1200px;
  margin: 0 auto;
}

.btn-back {
  background: #fff;
  border: 2px solid #ffb800;
  color: #ffb800;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 30px;
  transition: all 0.3s ease;
}

.btn-back:hover {
  background: #ffb800;
  color: #fff;
  transform: translateX(-5px);
}

.detail-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  background: #fff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  animation: slideInUp 0.6s ease-out;
}

.image-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.image-emoji {
  font-size: 150px;
  animation: float 3s ease-in-out infinite;
}

.detail-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.detail-info h1 {
  font-size: 32px;
  margin-bottom: 15px;
  color: #333;
}

.category-badge {
  display: inline-block;
  background: #ffb800;
  color: #fff;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 20px;
  width: fit-content;
}

.price-section {
  margin-bottom: 20px;
}

.current-price {
  font-size: 32px;
  font-weight: 700;
  color: #ffb800;
}

.rating-section {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
}

.stars {
  display: flex;
  gap: 5px;
}

.stars span {
  font-size: 16px;
}

.reviews-count {
  color: #666;
  font-size: 14px;
}

.description {
  margin-bottom: 30px;
}

.description h3,
.specifications h3 {
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
}

.description p {
  color: #666;
  line-height: 1.6;
}

.specifications ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.specifications li {
  padding: 8px 0;
  color: #555;
  border-bottom: 1px solid #eee;
}

.specifications li:last-child {
  border-bottom: none;
}

.actions {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.quantity-selector {
  display: flex;
  border: 2px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.quantity-selector button {
  background: #f0f0f0;
  border: none;
  padding: 12px 18px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.quantity-selector button:hover {
  background: #ffb800;
  color: #fff;
}

.quantity-selector input {
  border: none;
  outline: none;
  width: 50px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
}

.btn-add-cart {
  flex: 1;
  background: #ffb800;
  color: #000;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-add-cart:hover {
  background: #ff9900;
  transform: scale(1.05);
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

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 768px) {
  .detail-content {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 20px;
  }

  .detail-info h1 {
    font-size: 24px;
  }

  .current-price {
    font-size: 24px;
  }
}
</style>
