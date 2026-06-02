<template>
  <section id="projects" class="bg-white section-padding border-bottom border-black">
    <div class="container">
      <h2 class="text-h2 mb-lg">Selected Projects</h2>
      <div class="projects-grid">
        <NeuCard topBarColor="var(--color-yellow)" v-for="i in 3" :key="i">
          <h3 class="text-h3 mb-sm">E-Learning Platform</h3>
          <div class="tags-row mb-md">
            <NeuTag>Vue.js</NeuTag>
            <NeuTag>Laravel</NeuTag>
          </div>
          <p class="text-body mb-lg flex-1">
            A comprehensive learning management system built for vocational high school students to track assignments and grades.
          </p>
          <div class="card-actions">
            <NeuButton variant="primary" size="sm">Demo</NeuButton>
            <NeuButton variant="secondary" size="sm">GitHub</NeuButton>
          </div>
        </NeuCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import NeuCard from './ui/NeuCard.vue';
import NeuButton from './ui/NeuButton.vue';
import NeuTag from './ui/NeuTag.vue';
</script>

<style scoped>
.mb-sm { margin-bottom: var(--space-sm); }
.mb-md { margin-bottom: var(--space-md); }
.mb-lg { margin-bottom: var(--space-lg); }
.flex-1 { flex: 1; }
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
}
@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.tags-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.card-actions {
  display: flex;
  gap: 12px;
}
</style>
