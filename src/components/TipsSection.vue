<template>
  <section id="tips" class="bg-off-white py-16 px-4 md:py-24 border-b-[3px] border-[#0a0a0a]">
    <div class="container mx-auto">
      <h2 class="font-body text-3xl md:text-4xl font-bold mb-8 text-black">Tips & Tricks</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <template v-if="isLoading">
          <NeuSkeleton v-for="i in 3" :key="`skel-tip-${i}`" variant="card" />
        </template>
        <template v-else>
          <NeuCard v-for="tip in tips" :key="tip.id" content-class="!p-0 flex flex-col h-full">
            <div v-if="tip.image_url" class="border-b-[3px] border-black h-40 overflow-hidden w-full">
              <img :src="tip.image_url" :alt="tip.title" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div class="p-6 flex flex-col flex-1">
              <NeuTag color="blue" class="mb-3 w-fit">{{ tip.category }}</NeuTag>
              <h3 class="font-body text-lg md:text-xl font-bold mb-2 text-black">{{ tip.title }}</h3>
              <p class="text-sm font-body text-[#555] mb-4 flex-1 leading-relaxed">
                {{ tip.description }}
              </p>
              <router-link :to="`/tips/${tip.id}`" class="font-body font-bold text-blue hover:underline mt-auto">Read More &rarr;</router-link>
            </div>
          </NeuCard>
          <div v-if="tips.length === 0" class="col-span-full text-center text-gray-500 py-12">
            No tips & tricks found. Add some in the Admin panel!
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import NeuCard from './ui/NeuCard.vue';
import NeuTag from './ui/NeuTag.vue';
import NeuSkeleton from './ui/NeuSkeleton.vue';
import { getTips } from '../services/supabase';

const tips = ref<any[]>([]);
const isLoading = ref(true);

onMounted(async () => {
  try {
    tips.value = await getTips();
  } finally {
    isLoading.value = false;
  }
});
</script>
