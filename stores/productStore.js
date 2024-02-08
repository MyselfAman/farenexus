import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"
import {useRouter} from "vue-router"
export const useProductStore = defineStore('product', () => {
  const products = ref([]);



  async function fetchAllProducts() {
    const response = await axios.get("https://dummyjson.com/products");
    products.value = response.data.products;
    return products.value;

  }


  return { fetchAllProducts, products  }
})
