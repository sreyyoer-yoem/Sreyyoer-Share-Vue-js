<template>
  <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div class="card shadow-sm p-4" style="width: 350px;">
      <h4 class="text-center mb-4">Login</h4>
      <form @submit.prevent="handleLogin">
        <!-- Email -->
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="form-control"
            placeholder="Enter email"
            required
          />
        </div>

        <!-- Password -->
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control"
            placeholder="Enter password"
            required
          />
        </div>

        <!-- Error message -->
        <div v-if="errorMessage" class="alert alert-danger p-2">
          {{ errorMessage }}
        </div>

        <!-- Submit -->
        <button type="submit" class="btn btn-primary w-100" :disabled="loading">
          <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import api from '@/services/api.js';
import { useRouter } from 'vue-router'; 
import { useLoginStore} from "@/store/auth.js";
const loginStore = useLoginStore();

const router = useRouter(); // <-- initialize
const email = ref('');
const password = ref('');
const loading = ref(false);
const errorMessage = ref('');

const handleLogin = async () => {
  loading.value = true;
  errorMessage.value = '';

  try {
    const formData = {email: email.value, password: password.value};
    const res = await  api.post('/api/auth/login', formData);
    console.log(res);
  
    // Store token or redirect here
  } catch (err) {
    console.log(err.response);
    loginStore.otpauth_url = err.response.data.data.otpauth_url
    console.log(loginStore.otpauth_url);
    router.push('/qr'); // <-- redirect to 
    // /qr

    
    errorMessage.value =
      err.response?.data?.message || 'Login failed. Please try again.';
  } finally {
    loading.value = false;
  }
};
</script>
