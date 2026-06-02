<template>
  <div class="app-wrapper">
    <NavBar v-if="!isAuthOrAdminRoute" />
    <router-view />
    <FooterSection v-if="!isAuthOrAdminRoute" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue';
import FooterSection from './components/FooterSection.vue';

const route = useRoute();

// Hide navbar and footer on login, admin, and not-found pages
const isAuthOrAdminRoute = computed(() => {
  return ['login', 'admin', 'not-found'].includes(route.name as string);
});

// Activity tracker for session timeout
let lastActivityUpdate = 0;
const throttleMs = 60000; // 1 minute

function updateActivity() {
  const now = Date.now();
  if (now - lastActivityUpdate > throttleMs) {
    localStorage.setItem('last_activity', now.toString());
    lastActivityUpdate = now;
  }
}

onMounted(() => {
  // Update activity on load
  updateActivity();
  
  // Add listeners
  window.addEventListener('mousemove', updateActivity);
  window.addEventListener('keydown', updateActivity);
  window.addEventListener('click', updateActivity);
  window.addEventListener('touchstart', updateActivity);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateActivity);
  window.removeEventListener('keydown', updateActivity);
  window.removeEventListener('click', updateActivity);
  window.removeEventListener('touchstart', updateActivity);
});
</script>
