<template>
  <section id="materials" class="bg-white section-padding border-bottom border-black">
    <div class="container">
      <h2 class="text-h2 mb-lg text-center">Download Materials</h2>
      <div class="materials-grid">
        <NeuCard topBarColor="var(--color-blue)" v-for="i in 2" :key="'x-'+i">
          <h3 class="text-h3 mb-xs">Basic Web Programming</h3>
          <p class="text-body text-gray mb-xs">Class X RPL</p>
          <p class="text-body mb-md flex-1">Semester 1, 2024</p>
          <NeuButton variant="blue" size="sm">Download PDF</NeuButton>
        </NeuCard>
        
        <NeuCard topBarColor="var(--color-success)" v-for="i in 2" :key="'xi-'+i">
          <h3 class="text-h3 mb-xs">Database Systems</h3>
          <p class="text-body text-gray mb-xs">Class XI RPL</p>
          <p class="text-body mb-md flex-1">Semester 1, 2024</p>
          <NeuButton variant="primary" size="sm">Download PDF</NeuButton>
        </NeuCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import NeuCard from './ui/NeuCard.vue';
import NeuButton from './ui/NeuButton.vue';
</script>

<style scoped>
.text-center { text-align: center; }
.mb-xs { margin-bottom: var(--space-xs); }
.mb-md { margin-bottom: var(--space-md); }
.mb-lg { margin-bottom: var(--space-lg); }
.flex-1 { flex: 1; }
.text-gray { color: #666; }
.materials-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
}
@media (min-width: 768px) {
  .materials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .materials-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
