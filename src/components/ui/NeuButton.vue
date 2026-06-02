<template>
  <button 
    :class="[
      'inline-flex items-center justify-center gap-2 border-black-heavy font-body font-bold uppercase tracking-wider cursor-pointer outline-none shadow-neu-sm transition-neu hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neu-md active:translate-x-0.5 active:translate-y-0.5 active:shadow-none',
      variantClasses[variant] || variantClasses.primary,
      sizeClasses[size] || sizeClasses.md
    ]" 
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface VariantMap {
  [key: string]: string;
}

defineProps({
  variant: {
    type: String,
    default: 'primary', // primary, secondary, yellow, blue
  },
  size: {
    type: String,
    default: 'md', // sm, md, lg
  }
});

defineEmits(['click']);

const sizeClasses: VariantMap = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base'
};

const variantClasses: VariantMap = {
  primary: 'bg-black text-yellow hover:bg-blue hover:text-white',
  secondary: 'bg-transparent text-black hover:bg-black hover:text-yellow',
  yellow: 'bg-yellow text-black hover:bg-black hover:text-yellow',
  blue: 'bg-blue text-white hover:bg-black hover:text-white'
};
</script>
