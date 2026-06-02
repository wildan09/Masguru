<template>
  <div :class="[
    'animate-pulse bg-gray-200 border-[3px] border-black',
    variant === 'card' ? 'shadow-neu-sm p-4 h-full' : '',
    variant === 'text' ? 'h-4 w-full rounded' : '',
    variant === 'title' ? 'h-8 w-3/4 mb-4' : '',
    variant === 'image' ? 'aspect-video w-full' : '',
    variant === 'button' ? 'h-10 w-32 shadow-[2px_2px_0px_#000]' : '',
    customClass
  ]">
    <!-- Skeleton layout for card variant -->
    <div v-if="variant === 'card'" class="flex flex-col h-full gap-3">
      <div class="h-6 w-1/3 bg-gray-300 border border-black mb-2"></div>
      <div class="h-5 w-3/4 bg-gray-300 border border-black"></div>
      <div class="h-4 w-full bg-gray-300 border border-black"></div>
      <div class="h-4 w-5/6 bg-gray-300 border border-black"></div>
      <div class="h-4 w-full bg-gray-300 border border-black mb-4"></div>
      <div class="mt-auto flex gap-2">
        <div class="h-8 w-24 bg-gray-300 border border-black"></div>
        <div class="h-8 w-24 bg-gray-300 border border-black"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  variant?: 'card' | 'text' | 'title' | 'image' | 'button' | 'box';
  customClass?: string;
}>(), {
  variant: 'box',
  customClass: ''
});
</script>
