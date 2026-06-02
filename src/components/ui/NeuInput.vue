<template>
  <div class="neu-input-wrapper">
    <label v-if="label" class="neu-label">{{ label }} <span v-if="required" class="text-danger">*</span></label>
    
    <textarea 
      v-if="type === 'textarea'"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
      :placeholder="placeholder"
      :required="required"
      class="neu-input"
      rows="4"
    ></textarea>
    
    <select 
      v-else-if="type === 'select'"
      :value="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      :required="required"
      class="neu-input"
    >
      <option value="" disabled v-if="placeholder">{{ placeholder }}</option>
      <option v-for="opt in options" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
    </select>
    
    <input 
      v-else
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :placeholder="placeholder"
      :required="required"
      class="neu-input"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text' // text, email, url, textarea, select
  },
  placeholder: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array as () => Array<{label: string, value: string}>,
    default: () => []
  }
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
.neu-input-wrapper {
  margin-bottom: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.neu-label {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 14px;
}

.text-danger {
  color: var(--color-danger);
}
</style>
