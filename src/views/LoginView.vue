<template>
  <div class="min-h-[calc(100vh-60px)] flex items-center justify-center bg-yellow px-4 py-12 border-b-[4px] border-[#0a0a0a]">
    <div class="max-w-[400px] w-full bg-white border-black-heavy shadow-neu-lg p-8 relative">
      <div class="absolute -top-4 -left-4 bg-black text-yellow font-display font-bold text-[14px] px-3 py-2 leading-tight">
        ADMIN<br>PORTAL
      </div>
      
      <h1 class="font-display text-4xl font-bold leading-none mb-2 mt-4 text-black uppercase">LOGIN</h1>
      <p class="text-sm font-body leading-relaxed mb-8 text-[#555]">
        Enter your credentials to manage the portfolio dashboard.
      </p>

      <form @submit.prevent="handleLogin" class="flex flex-col gap-4">
        <div v-if="errorMsg" class="bg-[#ff4d4d] border-2 border-black p-3 mb-2">
          <p class="font-body text-xs font-bold text-white uppercase">{{ errorMsg }}</p>
        </div>

        <div>
          <label class="font-body text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 block">EMAIL ADDRESS</label>
          <input 
            v-model="email" 
            type="email" 
            required 
            class="px-4 py-3 font-body text-base outline-none bg-white border-black-heavy w-full shadow-none transition-neu focus:-translate-x-0.5 focus:-translate-y-0.5 focus:shadow-neu-sm" 
            placeholder="admin@admin.com"
          >
        </div>

        <div>
          <label class="font-body text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 block">PASSWORD</label>
          <input 
            v-model="password" 
            type="password" 
            required 
            class="px-4 py-3 font-body text-base outline-none bg-white border-black-heavy w-full shadow-none transition-neu focus:-translate-x-0.5 focus:-translate-y-0.5 focus:shadow-neu-sm" 
            placeholder="••••••••"
          >
        </div>

        <button 
          type="submit" 
          :disabled="isLoading"
          class="w-full mt-4 bg-blue text-white font-display font-bold border-[3px] border-[#0a0a0a] p-4 cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#0a0a0a] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-neu text-base uppercase disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isLoading ? 'AUTHENTICATING...' : 'SIGN IN' }}
        </button>
      </form>

      <div class="mt-6 text-center border-t-2 border-dashed border-gray-300 pt-4">
        <p class="text-xs text-gray-500 mb-2">Supabase connection error?</p>
        <button 
          @click="resetConfig" 
          class="text-xs font-bold text-red-500 hover:underline cursor-pointer uppercase tracking-wider"
        >
          Reset Connection Config
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '../services/supabase';

const router = useRouter();
const email = ref('');
const password = ref('');
const isLoading = ref(false);
const errorMsg = ref('');

async function handleLogin() {
  isLoading.value = true;
  errorMsg.value = '';
  
  try {
    await login(email.value, password.value);
    router.push('/admin');
  } catch (err: any) {
    console.error('Login error:', err);
    errorMsg.value = err.message || 'Authentication failed. Please check your credentials.';
  } finally {
    isLoading.value = false;
  }
}

function resetConfig() {
  if (confirm('Are you sure you want to reset your Supabase connection settings? This will revert to default/fallback mode.')) {
    localStorage.removeItem('supabase_url');
    localStorage.removeItem('supabase_anon_key');
    window.location.reload();
  }
}
</script>
