<template>
  <section class="hero">
    <div class="hero-wrapper">
      <!-- Top Section: Upgrade Your PC -->
      <div class="upgrade-section">
        <span class="quote">"Upgrade Your</span>
        <span class="highlight-pc">PRODUCTIVITY"</span>
      </div>

      <div class="top-divider"></div>

      <!-- Main Content Box -->
      <div class="content-box">
        <!-- Left: Laptop Image -->
        <div class="laptop-section">
          <div class="laptop-visual">
            <div class="laptop-image">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23e8e8e8' width='300' height='200' rx='10'/%3E%3Crect fill='%231a1a2e' x='20' y='30' width='260' height='120' rx='5'/%3E%3Crect fill='%23ffd700' x='30' y='40' width='70' height='50'/%3E%3Crect fill='%234a4aff' x='110' y='40' width='90' height='50'/%3E%3Crect fill='%23333' x='200' y='40' width='70' height='50'/%3E%3Crect fill='%23666' y='160' width='300' height='30' rx='5'/%3E%3C/svg%3E" alt="Laptop" />
            </div>
            <div class="floating-device phone">📱</div>
            <div class="floating-device tablet">📱</div>
          </div>
        </div>

        <!-- Right: Content -->
        <div class="content-section">
          <div class="typewriter-container">
            <div class="typewriter-text">
              <span class="line line-1">Ultimate</span>
              <span class="line line-2">Performance</span>
              <span class="line line-3">Live Here!</span>
            </div>
          </div>
          <p class="description">LapTopia always good and trusted</p>
        </div>
      </div>

      <!-- Button Section -->
      <div class="button-section">
        <button class="btn-shop-now" @click="goToProducts">
          SHOP NOW!
        </button>
      </div>

      <div class="middle-divider"></div>

      <!-- Features Section -->
      <div class="features-section">
        <div class="feature">
          <span class="feature-icon">📱</span>
          <span class="feature-text">Long Battery Life</span>
        </div>
        <div class="feature-separator">⚡</div>
        <div class="feature">
          <span class="feature-icon">⚡</span>
          <span class="feature-text">High Performance</span>
        </div>
        <div class="feature-separator">📱</div>
        <div class="feature">
          <span class="feature-icon">🖥️</span>
          <span class="feature-text">Stunning Display</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { store } from '../store'

const goToProducts = () => {
  store.currentPage = 'products'
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #f5f5f5 0%, #fff 100%);
  padding: 40px 20px;
  position: relative;
}

.hero-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  border: 4px solid #0066cc;
  border-radius: 8px;
  padding: 25px;
  background: #fff;
  position: relative;
}

/* Top Section */
.upgrade-section {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: 700;
}

.quote {
  color: #000;
  font-size: 32px;
  font-weight: 700;
}

.highlight-pc {
  color: #ffcc00;
  font-size: 40px;
  font-weight: 900;
  text-shadow: 2px 2px 0px #000;
  letter-spacing: 2px;
}

.top-divider {
  border-bottom: none;
  margin: 10px 0 15px 0;
}

/* Main Content Box */
.content-box {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 30px;
  align-items: center;
  padding: 25px;
  border: none;
  border-radius: 6px;
  background: #fafafa;
  min-height: 240px;
}

/* Laptop Section */
.laptop-section {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.laptop-visual {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.laptop-image {
  width: 240px;
  height: 160px;
  background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  position: relative;
}

.laptop-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.floating-device {
  position: absolute;
  font-size: 32px;
  animation: float 3s ease-in-out infinite;
}

.phone {
  top: -15px;
  right: 20px;
  animation-delay: 0s;
}

.tablet {
  bottom: -10px;
  left: 10px;
  font-size: 28px;
  animation-delay: 1s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

/* Content Section */
.content-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.typewriter-container {
  margin-bottom: 15px;
}

.typewriter-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.line {
  display: block;
  font-size: 44px;
  font-weight: 900;
  color: #000;
  line-height: 1.1;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid #000;
  animation: typing 0.6s steps(20, end) forwards, blink 1s infinite;
}

.line-1 {
  animation-delay: 0.1s;
  width: 0;
}

.line-2 {
  animation-delay: 1.2s;
  width: 0;
}

.line-3 {
  animation-delay: 2.5s;
  width: 0;
}

@keyframes typing {
  to {
    width: 100%;
    border-right: 3px solid transparent;
  }
}

@keyframes blink {
  0%, 49% { border-right-color: #000; }
  50%, 100% { border-right-color: transparent; }
}

.description {
  font-size: 14px;
  color: #333;
  margin: 0;
  font-weight: 500;
}

/* Button Section */
.button-section {
  display: flex;
  justify-content: center;
  padding: 20px 0 15px 0;
}

.btn-shop-now {
  background: linear-gradient(180deg, #ffdd00 0%, #ffcc00 100%);
  color: #000;
  border: 3px solid #000;
  padding: 12px 36px;
  font-size: 14px;
  font-weight: 900;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
}

.btn-shop-now:hover {
  transform: translate(1px, 1px);
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
}

.btn-shop-now:active {
  transform: translate(3px, 3px);
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
}

/* Dividers */
.middle-divider {
  border-bottom: none;
  margin: 15px 0;
}

/* Features Section */
.features-section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  padding: 15px 0;
}

.feature {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  color: #333;
  white-space: nowrap;
}

.feature-icon {
  font-size: 16px;
}

.feature-separator {
  font-size: 18px;
  opacity: 0.5;
}

@media (max-width: 1024px) {
  .content-box {
    grid-template-columns: 1fr;
    gap: 20px;
    min-height: auto;
  }

  .line {
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .hero-wrapper {
    padding: 15px;
  }

  .upgrade-section {
    font-size: 24px;
  }

  .highlight-pc {
    font-size: 30px;
  }

  .content-box {
    padding: 15px;
  }

  .line {
    font-size: 28px;
  }

  .features-section {
    gap: 8px;
    padding: 10px 0;
  }

  .feature {
    font-size: 12px;
    padding: 6px 12px;
  }
}
</style>
