<template>
  <div class="flex flex-col lg:flex-row min-h-[calc(100vh-60px)]">
    <!-- Left Side: Featured Project -->
    <div class="flex-1 flex justify-center py-8 px-4 md:py-16 md:px-8 bg-yellow border-b-[3px] border-[#0a0a0a] lg:border-b-0 lg:border-r-[3px] border-[#0a0a0a]">
      <div class="max-w-[600px] w-full flex flex-col justify-between">
        <template v-if="isLoading">
          <NeuSkeleton variant="title" class="mb-8" />
          <NeuSkeleton variant="card" class="h-96" />
        </template>
        <template v-else>
          <div v-if="featuredProject">
            <span class="inline-block px-2.5 py-1 font-body text-[11px] font-bold uppercase tracking-wider bg-black text-yellow mb-4">FEATURED PROJECT</span>
            <h1 class="font-display text-4xl md:text-5xl font-bold leading-none mb-4 mt-2 uppercase">{{ featuredProject.title }}</h1>
            <div class="flex flex-wrap gap-2 mb-4">
              <NeuTag v-for="tag in featuredProject.tags" :key="tag" color="default">{{ tag }}</NeuTag>
            </div>
            <p class="text-base font-body leading-relaxed mb-6 max-w-[500px] text-[#333]">
              {{ featuredProject.description }}
            </p>

            <div class="w-full aspect-video border-black-heavy shadow-neu-md bg-white flex flex-col items-center justify-center mb-6 p-4 overflow-hidden relative">
              <img v-if="featuredProject.image_url" :src="featuredProject.image_url" class="absolute inset-0 w-full h-full object-cover" />
              <div :class="{'relative z-10 bg-white/90 p-4 border-2 border-black flex flex-col items-center': featuredProject.image_url, 'flex flex-col items-center': !featuredProject.image_url}">
                <span class="font-display text-2xl font-bold uppercase tracking-wider text-black">{{ featuredProject.title }}</span>
                <span class="font-body text-xs text-[#777] mt-2 uppercase tracking-wide">Category: {{ featuredProject.category }}</span>
              </div>
            </div>

            <div class="flex gap-4">
              <NeuButton v-if="featuredProject.demo_url && featuredProject.demo_url !== '#'" @click="goToUrl(featuredProject.demo_url)" variant="blue">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" class="mr-1.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                LIVE DEMO
              </NeuButton>
              <NeuButton v-if="featuredProject.github_url && featuredProject.github_url !== '#'" @click="goToUrl(featuredProject.github_url)" variant="secondary" class="bg-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mr-1.5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                VIEW CODE
              </NeuButton>
            </div>
          </div>
          <div v-else class="text-center py-16">
            <span class="inline-block px-2.5 py-1 font-body text-[11px] font-bold uppercase tracking-wider bg-black text-yellow mb-4">FEATURED PROJECT</span>
            <p class="font-body text-gray-700 italic">No featured project available. Add one in the Admin portal.</p>
          </div>
        </template>
      </div>
    </div>

    <!-- Right Side: All Projects -->
    <div class="flex-1 flex justify-center py-8 px-4 md:py-16 md:px-8 bg-off-white">
      <div class="max-w-[600px] w-full">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-6 border-b-[3px] border-[#0a0a0a] pb-3">
          <h2 class="font-body text-2xl font-bold text-black uppercase">ALL PROJECTS</h2>
          <div class="flex flex-wrap gap-1.5">
            <button 
              v-for="cat in ['all', 'web', 'mobile', 'other']" 
              :key="cat"
              @click="activeCategory = cat"
              :class="[
                'border-2 border-black px-3 py-1 font-body font-bold text-[10px] uppercase cursor-pointer transition-neu',
                activeCategory === cat ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'
              ]"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <template v-if="isLoading">
            <NeuSkeleton v-for="i in 3" :key="`skel-proj-${i}`" variant="box" class="h-24 w-full" />
          </template>
          <template v-else>
            <div 
              v-for="p in filteredProjects" 
              :key="p.id" 
              class="flex bg-white border-black-heavy shadow-neu-sm p-4 gap-4 items-center"
            >
              <div class="w-16 h-16 border-black-heavy bg-yellow flex items-center justify-center flex-shrink-0 font-body font-bold text-xs uppercase overflow-hidden">
                <img v-if="p.image_url" :src="p.image_url" class="w-full h-full object-cover" />
                <span v-else>{{ p.category }}</span>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="font-body text-base font-bold mb-0.5 text-black truncate">{{ p.title }}</h3>
                <p class="text-xs font-body text-[#555] mb-2 line-clamp-2 leading-normal">{{ p.description }}</p>
                <div class="flex flex-wrap gap-1.5 font-display text-[9px] font-bold text-black uppercase">
                  <span v-for="tag in p.tags" :key="tag" class="underline underline-offset-2">#{{ tag }}</span>
                </div>
              </div>
              <div class="flex-shrink-0">
                <button 
                  @click="goToUrl(p.demo_url || p.github_url)" 
                  class="w-9 h-9 flex items-center justify-center bg-blue border-2 border-black shadow-[2px_2px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-neu cursor-pointer"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </div>
            <div v-if="filteredProjects.length === 0" class="p-8 text-center font-body text-gray-500 italic">
              No projects found in this category.
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import NeuButton from '../components/ui/NeuButton.vue';
import NeuTag from '../components/ui/NeuTag.vue';
import NeuSkeleton from '../components/ui/NeuSkeleton.vue';
import { getProjects } from '../services/supabase';

const projects = ref<any[]>([]);
const activeCategory = ref('all');
const isLoading = ref(true);

onMounted(async () => {
  try {
    projects.value = await getProjects();
  } finally {
    isLoading.value = false;
  }
});

const featuredProject = computed(() => {
  return projects.value.length > 0 ? projects.value[0] : null;
});

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects.value;
  }
  return projects.value.filter(p => p.category?.toLowerCase() === activeCategory.value);
});

function goToUrl(url: string) {
  if (url && url !== '#') {
    window.open(url, '_blank');
  }
}
</script>
