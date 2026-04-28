<template>
  <section class="brands">
    <div class="brands-container">
      <h2 class="brands-title">OUR BRAND</h2>
      
      <div class="brands-grid">
        <div class="brand-logo lenovo">Lenovo</div>
        <div class="brand-logo asus">ASUS</div>
        <div class="brand-logo huawei">HUAWEI</div>
        <div class="brand-logo acer">Acer</div>
        <div class="brand-logo hp">HP</div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.brands {
  background-color: #f9f9f9;
  padding: 60px 20px;
}

.brands-container {
  max-width: 1200px;
  margin: 0 auto;
}

.brands-title {
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 50px 0;
  color: #333;
}

.brands-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

.brand-logo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}

.brand-logo:hover {
  transform: scale(1.1);
}

.lenovo {
  background-color: #d30c0c;
  color: white;
}

.asus {
  background-color: #000;
  color: white;
}

.huawei {
  background-color: #ff0000;
  color: white;
}

.acer {
  background-color: #00aa00;
  color: white;
}

.hp {
  background-color: #0066cc;
  color: white;
}

@media (max-width: 768px) {
  .brands-grid {
    gap: 20px;
  }

  .brand-logo {
    width: 90px;
    height: 90px;
    font-size: 12px;
  }
}
</style>
