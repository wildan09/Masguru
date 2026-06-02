<template>
  <div
    class="min-h-[calc(100vh-60px)] bg-yellow flex flex-col items-center justify-center p-4"
  >
    <div class="max-w-2xl w-full text-center">
      <!-- Glitch effect container -->
      <div class="relative inline-block mb-8">
        <h1
          class="font-display font-black text-9xl md:text-[150px] leading-none text-black drop-shadow-[8px_8px_0_#fff]"
        >
          404
        </h1>
      </div>
      <div
        class="bg-white border-4 border-black shadow-neu-lg p-8 md:p-12 rotate-1 hover:rotate-0 transition-transform duration-300"
      >
        <h2
          class="font-display font-bold text-3xl md:text-5xl uppercase mb-4 text-black"
        >
          Page Not Found!
        </h2>
        <p class="font-body text-lg md:text-xl text-[#333] mb-8 font-medium">
          Whoops! It looks like you took a wrong turn. The page you're looking
          for doesn't exist or has been moved.
        </p>

        <button
          @click="goHome"
          class="bg-black text-yellow font-display font-bold text-xl uppercase tracking-widest px-8 py-4 border-4 border-black shadow-[6px_6px_0px_#fff] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_#fff] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function goHome() {
  router.push("/");
}
</script>
