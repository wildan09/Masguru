<template>
  <section id="skills" class="bg-black section-padding border-bottom border-black">
    <div class="container text-center">
      <h2 class="text-h2 mb-lg text-yellow">Tech Stack & Skills</h2>
      <div class="skills-wrapper">
        <NeuTag color="yellow">HTML</NeuTag>
        <NeuTag color="yellow">CSS</NeuTag>
        <NeuTag color="yellow">JavaScript</NeuTag>
        <NeuTag color="blue">Vue.js</NeuTag>
        <NeuTag color="blue">React</NeuTag>
        <NeuTag color="default">Node.js</NeuTag>
        <NeuTag color="default">PHP</NeuTag>
        <NeuTag color="default">Laravel</NeuTag>
        <NeuTag color="default">MySQL</NeuTag>
        <NeuTag color="default">Git</NeuTag>
        <NeuTag color="default">Tailwind CSS</NeuTag>
        <NeuTag color="default">Figma</NeuTag>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import NeuTag from './ui/NeuTag.vue';
</script>

<style scoped>
.text-center { text-align: center; }
.mb-lg { margin-bottom: var(--space-lg); }
.text-yellow { color: var(--color-yellow); }
.skills-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
}
</style>
