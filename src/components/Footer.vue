<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h4>About LapTopia</h4>
          <p>Your trusted laptop marketplace for quality products and exceptional service.</p>
          <div class="social-links">
            <a href="#" class="social-link">📘</a>
            <a href="#" class="social-link">📷</a>
            <a href="#" class="social-link">💬</a>
            <a href="#" class="social-link">🎵</a>
            <a href="#" class="social-link">🔗</a>
          </div>
        </div>

        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#" @click.prevent="() => {}">Shop</a></li>
            <li><a href="#" @click.prevent="() => {}">About Us</a></li>
            <li><a href="#" @click.prevent="() => {}">Contact</a></li>
            <li><a href="#" @click.prevent="() => {}">FAQ</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#" @click.prevent="() => {}">Shipping Info</a></li>
            <li><a href="#" @click.prevent="() => {}">Returns</a></li>
            <li><a href="#" @click.prevent="() => {}">Privacy Policy</a></li>
            <li><a href="#" @click.prevent="() => {}">Terms of Service</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Contact Info</h4>
          <p>📞 +62 (123) 456-7890</p>
          <p>📧 support@laptopia.com</p>
          <p>📍 Jakarta, Indonesia</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2024 LapTopia. All rights reserved. | Crafted with ❤️</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #333 0%, #1a1a1a 100%);
  color: #fff;
  padding: 60px 20px 20px;
  margin-top: 60px;
  border-top: 4px solid #ffb800;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
  animation: fadeIn 0.8s ease-out;
}

.footer-section h4 {
  font-size: 16px;
  margin-bottom: 15px;
  color: #ffb800;
  font-weight: 700;
}

.footer-section p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 10px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 14px;
}

.footer-section ul li a:hover {
  color: #ffb800;
  margin-left: 5px;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 15px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.social-link:hover {
  background: #ffb800;
  color: #000;
  transform: translateY(-5px);
  border-color: #fff;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 20px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  animation: fadeIn 1s ease-out;
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
  .footer-content {
    gap: 30px;
    grid-template-columns: 1fr;
  }

  .footer {
    padding: 40px 20px 20px;
  }
}
</style>
