<template>
  <nav class="bg-[#0a0a0a] border-b-[3px] border-yellow sticky top-0 z-50">
    <div class="h-[60px] container mx-auto flex justify-between items-center px-4">
      <div class="logo">
        <router-link to="/" class="font-display font-bold text-white text-lg">@masguru.dev</router-link>
      </div>
      
      <!-- Desktop Menu -->
      <div class="hidden lg:flex gap-4 items-center">
        <router-link to="/" exact-active-class="!text-yellow" class="font-body font-bold text-[11px] uppercase tracking-wider text-white px-2 py-2 hover:text-yellow transition-neu">HOME</router-link>
        <router-link to="/about" active-class="!text-yellow" class="font-body font-bold text-[11px] uppercase tracking-wider text-white px-2 py-2 hover:text-yellow transition-neu">ABOUT</router-link>
        <router-link to="/skills" active-class="!text-yellow" class="font-body font-bold text-[11px] uppercase tracking-wider text-white px-2 py-2 hover:text-yellow transition-neu">SKILLS</router-link>
        <router-link to="/projects" active-class="!text-yellow" class="font-body font-bold text-[11px] uppercase tracking-wider text-white px-2 py-2 hover:text-yellow transition-neu">PROJECTS</router-link>
        <router-link to="/tips" active-class="!text-yellow" class="font-body font-bold text-[11px] uppercase tracking-wider text-white px-2 py-2 hover:text-yellow transition-neu">TIPS & TRICKS</router-link>
        <router-link to="/submission" active-class="!text-yellow" class="font-body font-bold text-[11px] uppercase tracking-wider text-white px-2 py-2 hover:text-yellow transition-neu">SUBMISSION</router-link>
        <a href="https://wa.me/6285647359433" target="_blank" rel="noopener noreferrer" class="font-body font-bold text-[11px] uppercase tracking-wider bg-yellow text-black px-4 py-2 border-2 border-[#0a0a0a] shadow-[2px_2px_0px_#ffffff] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#ffffff] transition-neu">CONTACT</a>
      </div>

      <!-- Mobile Hamburger Button -->
      <div class="lg:hidden">
        <button @click="isOpen = !isOpen" class="text-white hover:text-yellow focus:outline-none">
          <svg v-if="!isOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div v-if="isOpen" class="lg:hidden border-t-[3px] border-yellow bg-[#0a0a0a] flex flex-col px-4 pt-2 pb-4 gap-2">
      <router-link @click="isOpen = false" to="/" exact-active-class="!text-yellow" class="font-body font-bold text-xs uppercase tracking-wider text-white py-2 hover:text-yellow transition-neu">HOME</router-link>
      <router-link @click="isOpen = false" to="/about" active-class="!text-yellow" class="font-body font-bold text-xs uppercase tracking-wider text-white py-2 hover:text-yellow transition-neu">ABOUT</router-link>
      <router-link @click="isOpen = false" to="/skills" active-class="!text-yellow" class="font-body font-bold text-xs uppercase tracking-wider text-white py-2 hover:text-yellow transition-neu">SKILLS</router-link>
      <router-link @click="isOpen = false" to="/projects" active-class="!text-yellow" class="font-body font-bold text-xs uppercase tracking-wider text-white py-2 hover:text-yellow transition-neu">PROJECTS</router-link>
      <router-link @click="isOpen = false" to="/tips" active-class="!text-yellow" class="font-body font-bold text-xs uppercase tracking-wider text-white py-2 hover:text-yellow transition-neu">TIPS & TRICKS</router-link>
      <router-link @click="isOpen = false" to="/submission" active-class="!text-yellow" class="font-body font-bold text-xs uppercase tracking-wider text-white py-2 hover:text-yellow transition-neu">SUBMISSION</router-link>
      <a href="https://wa.me/6285647359433" target="_blank" rel="noopener noreferrer" @click="isOpen = false" class="font-body font-bold text-xs uppercase tracking-wider bg-yellow text-black px-4 py-2 mt-2 w-fit border-2 border-transparent hover:bg-white transition-neu">CONTACT</a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isOpen = ref(false);
</script>
