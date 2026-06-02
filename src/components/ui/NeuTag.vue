<template>
  <span 
    :class="[
      'inline-block border-2 border-[#0a0a0a] px-2.5 py-1 font-body text-[11px] font-bold uppercase tracking-wider transition-neu whitespace-nowrap',
      colorClasses[color] || colorClasses.default
    ]"
  >
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
interface ColorMap {
  [key: string]: string;
}

defineProps({
  color: {
    type: String,
    default: 'default', // default, blue
  }
});

const colorClasses: ColorMap = {
  default: 'bg-white text-[#0a0a0a] hover:bg-yellow',
  blue: 'bg-blue text-white hover:bg-black'
};
</script>
