import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"
import {useRouter} from "vue-router"
export const useAuthStore = defineStore('auth', () => {
    const router = useRouter();
  const isAuthenticated = ref(false);
  async function authenticateUser(payload) {
    const response = await axios.post("https://dummyjson.com/auth/login", payload);
    if(response.data?.token !== ""){
        console.log(response);
        isAuthenticated.value = true;
        localStorage.setItem("apiKey", response.data.token);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("email", response.data.email);
        router.push("/dashboard")
    }

  }

  return { isAuthenticated, authenticateUser }
})
