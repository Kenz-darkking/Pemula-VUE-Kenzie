import { reactive } from 'vue'

export const store = reactive({
  cartItems: [],
  currentPage: 'home',
  searchQuery: '',

  addToCart(product) {
    const existingItem = this.cartItems.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      this.cartItems.push({
        ...product,
        quantity: 1
      })
    }
  },

  removeFromCart(productId) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId)
  },

  updateQuantity(productId, quantity) {
    const item = this.cartItems.find(item => item.id === productId)
    if (item) {
      item.quantity = Math.max(1, quantity)
    }
  },

  clearCart() {
    this.cartItems = []
  },

  getCartTotal() {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  },

  getCartCount() {
    return this.cartItems.reduce((count, item) => count + item.quantity, 0)
  },

  performSearch(query) {
    this.searchQuery = query
    this.currentPage = 'search'
  }
})
