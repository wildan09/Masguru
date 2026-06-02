<template>
  <div 
    :class="[
      'border-black-heavy bg-white shadow-neu-md flex flex-col overflow-hidden transition-neu h-full',
      hoverable ? 'hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neu-lg' : ''
    ]"
  >
    <div 
      v-if="topBarColor" 
      class="h-2 w-full border-b-[3px] border-[#0a0a0a]" 
      :style="{ backgroundColor: topBarColor }"
    ></div>
    <div :class="['p-6 flex flex-col flex-1', contentClass]">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  hoverable: {
    type: Boolean,
    default: true,
  },
  topBarColor: {
    type: String,
    default: '', // Pass a CSS color string like 'var(--color-yellow)' or '#FFE500'
  },
  contentClass: {
    type: String,
    default: '',
  }
});
</script>
