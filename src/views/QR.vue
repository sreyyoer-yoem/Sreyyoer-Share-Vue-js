<template>
  <div class="container py-5">
    <h2 class="mb-4 text-center">Your QR Code</h2>

    <!-- QR Code Display -->
    <div v-if="qrCodeData" class="text-center mt-4">
      <img :src="qrCodeData" alt="QR Code" class="img-fluid" />
    </div>

    <!-- Error Message -->
    <p v-if="error" class="text-danger mt-2">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import QRCode from 'qrcode';
import { useLoginStore } from '@/store/auth.js';

const loginStore = useLoginStore();
const qrCodeData = ref('');
const error = ref('');

const generateQRCode = async () => {
  error.value = '';
  qrCodeData.value = '';

  if (!loginStore.otpauth_url) {
    error.value = 'No URL available to generate QR code.';
    return;
  }

  try {
    qrCodeData.value = await QRCode.toDataURL(loginStore.otpauth_url, {
      width: 250,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#ffffff',
      },
    });
  } catch (err) {
    error.value = 'Failed to generate QR code.';
    console.error(err);
  }
};

// Generate QR code when the page loads
onMounted(() => {
  generateQRCode();
});
</script>

<style scoped>
.container {
  max-width: 400px;
}
</style>
