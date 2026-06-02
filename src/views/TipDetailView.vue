<template>
  <div class="min-h-[calc(100vh-60px)] bg-off-white py-12 px-4 md:py-20 border-t-[3px] border-black">
    <div class="container mx-auto max-w-4xl">
      <!-- Loading Skeleton -->
      <template v-if="isLoading">
        <NeuSkeleton variant="title" class="mb-4" />
        <NeuSkeleton variant="text" class="w-32 mb-8" />
        <NeuSkeleton variant="image" class="mb-12 h-64 md:h-96" />
        <NeuSkeleton variant="text" class="w-full mb-4" v-for="i in 5" :key="i" />
      </template>

      <!-- Tip Content -->
      <template v-else-if="tip">
        <!-- Back Button -->
        <button @click="goBack" class="mb-8 font-body font-bold text-sm uppercase tracking-wider flex items-center hover:-translate-x-2 transition-transform cursor-pointer">
          &larr; Back to Tips
        </button>

        <!-- Header -->
        <div class="mb-10 text-center">
          <NeuTag color="blue" class="mb-4 inline-block">{{ tip.category }}</NeuTag>
          <h1 class="font-display text-4xl md:text-6xl font-black leading-tight text-black uppercase">{{ tip.title }}</h1>
          <p class="mt-4 font-body text-xl text-gray-600 max-w-2xl mx-auto italic">{{ tip.description }}</p>
        </div>

        <!-- Hero Image -->
        <div v-if="tip.image_url" class="border-4 border-black shadow-neu-lg bg-yellow w-full h-64 md:h-[500px] mb-12 overflow-hidden relative">
          <img :src="tip.image_url" :alt="tip.title" class="absolute inset-0 w-full h-full object-cover" />
        </div>

        <!-- Article Content -->
        <div class="bg-white border-4 border-black shadow-neu-md p-8 md:p-12 mb-12">
          <div class="font-body text-lg leading-relaxed text-[#222] markdown-body" v-html="parsedContent">
          </div>
        </div>

        <!-- External Link Fallback / Resource -->
        <div v-if="tip.url && tip.url !== '#'" class="text-center">
          <a :href="tip.url" target="_blank" class="inline-block bg-yellow text-black font-display font-bold text-lg uppercase tracking-wider px-8 py-4 border-4 border-black shadow-[6px_6px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-200">
            Read Original Source
          </a>
        </div>
      </template>

      <!-- Not Found -->
      <template v-else>
        <div class="text-center py-20">
          <h2 class="font-display text-4xl font-bold mb-4">Tip Not Found</h2>
          <p class="font-body text-gray-600 mb-8">We couldn't find the article you were looking for.</p>
          <button @click="goBack" class="bg-black text-white px-6 py-3 font-bold border-2 border-black hover:-translate-x-1 hover:-translate-y-1 shadow-[4px_4px_0_#000] transition-transform">Return</button>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { marked } from 'marked';
import { getTipById } from '../services/supabase';
import NeuTag from '../components/ui/NeuTag.vue';
import NeuSkeleton from '../components/ui/NeuSkeleton.vue';

const route = useRoute();
const router = useRouter();
const tip = ref<any>(null);
const isLoading = ref(true);

const parsedContent = computed(() => {
  if (!tip.value) return '';
  const rawText = tip.value.content || tip.value.description || '';
  return marked.parse(rawText);
});

onMounted(async () => {
  try {
    const id = route.params.id as string;
    if (id) {
      tip.value = await getTipById(id);
    }
  } catch (error) {
    console.error('Failed to fetch tip:', error);
  } finally {
    isLoading.value = false;
  }
});

function goBack() {
  router.back();
}
</script>

<style>
/* Markdown Content Styling */
.markdown-body h1 {
  font-family: 'Syne', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #000;
}
.markdown-body h2 {
  font-family: 'Syne', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #000;
}
.markdown-body h3 {
  font-family: 'Syne', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: #000;
}
.markdown-body p {
  margin-bottom: 1.25rem;
}
.markdown-body img {
  max-width: 100%;
  height: auto;
  border: 4px solid #000;
  box-shadow: 6px 6px 0px #ffde59;
  margin: 2rem auto;
  display: block;
}
.markdown-body a {
  color: #3b82f6;
  font-weight: 700;
  text-decoration: underline;
}
.markdown-body ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1.25rem;
}
.markdown-body ol {
  list-style-type: decimal;
  padding-left: 1.5rem;
  margin-bottom: 1.25rem;
}
.markdown-body blockquote {
  border-left: 4px solid #000;
  padding-left: 1rem;
  font-style: italic;
  background-color: #f9f9f9;
  padding: 1rem;
  margin-bottom: 1.25rem;
}
</style>
