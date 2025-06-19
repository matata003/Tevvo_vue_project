<template>
  <div class="login-page">
    <h1 class="title">Welcome </h1>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <input v-model="email" type="email" placeholder="Enter your email" required />
        <input v-model="password" type="password" placeholder="Enter your password" required />
        <button type="submit">Login</button>
        <p v-if="error" class="error">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = () => {
  const mockEmail = 'test@gmail.com'
  const mockPassword = 'test123'

  if (email.value === mockEmail && password.value === mockPassword) {
    localStorage.setItem('token', 'mock-jwt-token')
    router.push('/home')
  } else {
    error.value = 'Invalid credentials'
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
}

.title {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
}

.login-container {
  width: 100%;
  max-width: 400px;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

form {
  display: flex;
  flex-direction: column;
}

input {
  margin: 10px 0;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

button {
  background-color: #17a2b8;
  color: white;
  border: none;
  padding: 12px;
  font-size: 16px;
  margin-top: 15px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #138496;
}

.error {
  margin-top: 10px;
  color: red;
  font-size: 14px;
}
</style>
