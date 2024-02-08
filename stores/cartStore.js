import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);



  function addToCart(data) {
    console.log(data);
    cart.value.push(data);
    console.log( cart.value);

  }

  function getAllCartData(){
    return cart.value
  }

  return { getAllCartData, addToCart, cart }
})
