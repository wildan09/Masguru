<template>
  <section id="contact" class="bg-yellow py-16 px-4 md:py-24 border-b-[3px] border-[#0a0a0a]">
    <div class="container mx-auto text-center flex flex-col items-center">
      <h2 class="font-body text-3xl md:text-4xl font-bold leading-tight mb-4">Let's Work Together</h2>
      <p class="text-base font-body mb-8 text-[#333]">Have a question or want to collaborate? Feel free to reach out.</p>
      <div class="flex gap-4 flex-wrap justify-center">
        <NeuButton variant="primary" size="lg">Send Email</NeuButton>
        <NeuButton variant="secondary" size="lg">LinkedIn</NeuButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import NeuButton from './ui/NeuButton.vue';
</script>
