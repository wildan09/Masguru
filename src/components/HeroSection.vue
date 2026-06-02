<template>
  <section id="home" class="hero bg-yellow section-padding border-black border-bottom">
    <div class="container hero-container">
      <div class="hero-content">
        <h1 class="text-hero mb-md">RPL Teacher. Programmer. Always Learning.</h1>
        <p class="text-body mb-lg">Hi, I'm masguru.dev! Welcome to my digital classroom and portfolio. Let's build cool things together.</p>
        <div class="hero-actions">
          <NeuButton variant="primary" @click="scrollToProjects">View Projects</NeuButton>
          <NeuButton variant="secondary" @click="scrollToContact">Contact Me</NeuButton>
        </div>
      </div>
      <div class="hero-avatar">
        <div class="avatar-box">MG</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import NeuButton from './ui/NeuButton.vue';

const scrollToProjects = () => {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
}
const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}
</script>

<style scoped>
.hero {
  border-bottom: var(--border);
}
.hero-container {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: var(--space-xl);
}
@media (min-width: 768px) {
  .hero-container {
    flex-direction: row;
    justify-content: space-between;
  }
}
.hero-content {
  flex: 1;
}
.mb-md { margin-bottom: var(--space-md); }
.mb-lg { margin-bottom: var(--space-lg); }
.hero-actions {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
}
.avatar-box {
  width: 160px;
  height: 160px;
  background-color: var(--color-black);
  color: var(--color-yellow);
  border: var(--border);
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 64px;
  font-weight: 700;
}
@media (min-width: 768px) {
  .avatar-box {
    width: 240px;
    height: 240px;
    font-size: 96px;
  }
}
</style>
