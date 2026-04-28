<template>
  <div class="cart-page">
    <div class="cart-container">
      <h1>Shopping Cart</h1>

      <div v-if="store.cartItems.length === 0" class="empty-cart">
        <div class="empty-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Start shopping to add items to your cart</p>
        <button class="btn-continue-shopping" @click="store.currentPage = 'products'">
          Continue Shopping
        </button>
      </div>

      <div v-else class="cart-content">
        <div class="cart-items">
          <table class="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in store.cartItems" :key="item.id" class="cart-item">
                <td class="product-name">
                  <span class="emoji">{{ item.image }}</span>
                  {{ item.name }}
                </td>
                <td>Rp {{ formatPrice(item.price) }}</td>
                <td>
                  <div class="quantity-control">
                    <button @click="store.updateQuantity(item.id, item.quantity - 1)">−</button>
                    <input v-model.number="item.quantity" type="number" min="1">
                    <button @click="store.updateQuantity(item.id, item.quantity + 1)">+</button>
                  </div>
                </td>
                <td class="total">Rp {{ formatPrice(item.price * item.quantity) }}</td>
                <td>
                  <button class="btn-remove" @click="store.removeFromCart(item.id)">
                    🗑️ Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="cart-summary">
          <div class="summary-box">
            <h2>Order Summary</h2>
            
            <div class="summary-row">
              <span>Subtotal</span>
              <span>Rp {{ formatPrice(store.getCartTotal()) }}</span>
            </div>

            <div class="summary-row">
              <span>Shipping</span>
              <span>Rp {{ formatPrice(50000) }}</span>
            </div>

            <div class="summary-row">
              <span>Tax (10%)</span>
              <span>Rp {{ formatPrice(Math.floor(store.getCartTotal() * 0.1)) }}</span>
            </div>

            <div class="summary-divider"></div>

            <div class="summary-total">
              <span>Total</span>
              <span>Rp {{ formatPrice(store.getCartTotal() + 50000 + Math.floor(store.getCartTotal() * 0.1)) }}</span>
            </div>

            <button class="btn-checkout">
              💳 Proceed to Checkout
            </button>

            <button class="btn-continue" @click="store.currentPage = 'products'">
              Continue Shopping
            </button>

            <button class="btn-clear" @click="confirmClear">
              Clear Cart
            </button>
          </div>

          <div class="promo-section">
            <h3>Promo Code</h3>
            <div class="promo-input">
              <input v-model="promoCode" type="text" placeholder="Enter promo code">
              <button @click="applyPromo">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { store } from '../store.js'

const promoCode = ref('')

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID').format(price)
}

const confirmClear = () => {
  if (confirm('Are you sure you want to clear your cart?')) {
    store.clearCart()
  }
}

const applyPromo = () => {
  alert(`Promo code "${promoCode.value}" applied!`)
  promoCode.value = ''
}
</script>

<style scoped>
.cart-page {
  flex: 1;
  padding: 40px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  animation: fadeIn 0.6s ease-in-out;
}

.cart-container {
  max-width: 1200px;
  margin: 0 auto;
}

.cart-container h1 {
  font-size: 32px;
  margin-bottom: 30px;
  color: #333;
}

.empty-cart {
  text-align: center;
  background: #fff;
  padding: 60px 40px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.empty-icon {
  font-size: 80px;
  margin-bottom: 20px;
}

.empty-cart h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.empty-cart p {
  color: #666;
  margin-bottom: 30px;
}

.btn-continue-shopping {
  background: #ffb800;
  color: #000;
  border: none;
  padding: 12px 40px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-continue-shopping:hover {
  background: #ff9900;
  transform: translateY(-3px);
}

.cart-content {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 30px;
}

.cart-items {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
}

.cart-table thead {
  background: #f8f9fa;
  border-bottom: 2px solid #ffb800;
}

.cart-table th {
  padding: 15px;
  text-align: left;
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

.cart-table td {
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.product-name {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
}

.emoji {
  font-size: 24px;
}

.quantity-control {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 6px;
  width: fit-content;
}

.quantity-control button {
  background: #f0f0f0;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
}

.quantity-control button:hover {
  background: #ffb800;
  color: #fff;
}

.quantity-control input {
  border: none;
  outline: none;
  width: 40px;
  text-align: center;
  font-weight: 600;
}

.total {
  font-weight: 600;
  color: #ffb800;
}

.btn-remove {
  background: #fee;
  border: none;
  color: #c33;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s ease;
}

.btn-remove:hover {
  background: #c33;
  color: #fff;
}

.cart-summary {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.summary-box {
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.summary-box h2 {
  font-size: 18px;
  margin-bottom: 20px;
  color: #333;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  color: #666;
  font-size: 14px;
}

.summary-divider {
  border-top: 2px solid #eee;
  margin: 15px 0;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
  color: #ffb800;
  margin-bottom: 20px;
}

.btn-checkout {
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 10px;
}

.btn-checkout:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

.btn-continue {
  width: 100%;
  background: #f0f0f0;
  color: #333;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 10px;
}

.btn-continue:hover {
  background: #e0e0e0;
}

.btn-clear {
  width: 100%;
  background: #fee;
  color: #c33;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-clear:hover {
  background: #c33;
  color: #fff;
}

.promo-section {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.promo-section h3 {
  margin-bottom: 15px;
  color: #333;
}

.promo-input {
  display: flex;
  gap: 10px;
}

.promo-input input {
  flex: 1;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 6px;
  font-size: 14px;
}

.promo-input button {
  background: #ffb800;
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.promo-input button:hover {
  background: #ff9900;
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
  .cart-content {
    grid-template-columns: 1fr;
  }

  .cart-table {
    font-size: 12px;
  }

  .cart-table th,
  .cart-table td {
    padding: 10px;
  }
}
</style>
