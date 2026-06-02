<template>
  <div class="bg-off-white pb-16">
    <div class="container mx-auto py-8 px-4 md:py-16 md:px-8">
      <div class="flex flex-col lg:flex-row lg:items-center gap-4 mb-16">
        <h1 class="font-display text-4xl md:text-5xl font-bold uppercase leading-none">SKILLS & TOOLS</h1>
        <div class="border-black-heavy shadow-neu-sm px-4 py-2 font-body text-sm bg-yellow">
          A breakdown of the technologies and methodologies I use to build and teach.
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-8 mb-16">
        <!-- Programming -->
        <NeuCard :hoverable="false" class="!border-4 !border-blue">
          <h2 class="font-body text-2xl md:text-3xl font-bold mb-6">PROGRAMMING</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="border-black-heavy p-6 flex justify-between items-center bg-white">
              <span class="font-body font-bold text-base">PYTHON</span>
              <span class="font-display font-bold text-2xl text-blue">90%</span>
            </div>
            <div class="border-black-heavy p-6 flex justify-between items-center bg-white">
              <span class="font-body font-bold text-base">JAVASCRIPT</span>
              <span class="font-display font-bold text-2xl text-blue">85%</span>
            </div>
            <div class="border-black-heavy p-6 flex justify-between items-center bg-white">
              <span class="font-body font-bold text-base">TYPESCRIPT</span>
              <span class="font-display font-bold text-2xl text-blue">75%</span>
            </div>
            <div class="border-black-heavy p-6 flex justify-between items-center bg-white">
              <span class="font-body font-bold text-base">SQL</span>
              <span class="font-display font-bold text-2xl text-blue">80%</span>
            </div>
          </div>
        </NeuCard>

        <!-- Frameworks -->
        <NeuCard :hoverable="false" class="bg-yellow !border-4 !border-[#22C55E]" content-class="!bg-yellow">
          <h2 class="font-body text-2xl md:text-3xl font-bold mb-6 flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="mr-3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
            FRAMEWORKS
          </h2>
          <div class="flex flex-col gap-4">
            <div class="border-black-heavy px-4 py-3 flex justify-between items-center bg-white">
              <span class="font-body font-bold text-base">REACT</span>
              <span class="font-display text-sm font-bold px-2 py-1 bg-black text-white">80%</span>
            </div>
            <div class="border-black-heavy px-4 py-3 flex justify-between items-center bg-white">
              <span class="font-body font-bold text-base">NODE.JS</span>
              <span class="font-display text-sm font-bold px-2 py-1 bg-black text-white">70%</span>
            </div>
            <div class="border-black-heavy px-4 py-3 flex justify-between items-center bg-white">
              <span class="font-body font-bold text-base">EXPRESS</span>
              <span class="font-display text-sm font-bold px-2 py-1 bg-black text-white">75%</span>
            </div>
            <div class="border-black-heavy px-4 py-3 flex justify-between items-center bg-white">
              <span class="font-body font-bold text-base">TAILWIND</span>
              <span class="font-display text-sm font-bold px-2 py-1 bg-black text-white">95%</span>
            </div>
          </div>
        </NeuCard>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Teaching Tools -->
        <NeuCard :hoverable="false">
          <h3 class="font-body text-xl font-bold mb-4 flex items-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mr-3"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path></svg>
            TEACHING TOOLS
          </h3>
          <div class="flex flex-wrap gap-2">
            <div class="border-2 border-[#0a0a0a] px-2 py-1 font-body text-[11px] font-bold uppercase bg-white">GOOGLE CLASSROOM</div>
            <div class="border-2 border-[#0a0a0a] px-2 py-1 font-body text-[11px] font-bold uppercase bg-white">CANVAS</div>
            <div class="border-2 border-[#0a0a0a] px-2 py-1 font-body text-[11px] font-bold uppercase bg-white">ZOOM</div>
            <div class="border-2 border-[#0a0a0a] px-2 py-1 font-body text-[11px] font-bold uppercase bg-white">OBS STUDIO</div>
            <div class="border-2 border-[#0a0a0a] px-2 py-1 font-body text-[11px] font-bold uppercase bg-white">FIGMA</div>
          </div>
        </NeuCard>

        <!-- Dev Tools -->
        <NeuCard :hoverable="false">
          <h3 class="font-body text-xl font-bold mb-4 flex items-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mr-3"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
            DEV TOOLS
          </h3>
          <ul class="flex flex-col gap-3 list-none p-0 m-0">
            <li class="flex justify-between items-center font-display text-xs border-b-2 border-dashed border-gray-300 pb-1"><span>GIT/GITHUB</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></li>
            <li class="flex justify-between items-center font-display text-xs border-b-2 border-dashed border-gray-300 pb-1"><span>VS CODE</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></li>
            <li class="flex justify-between items-center font-display text-xs border-b-2 border-dashed border-gray-300 pb-1"><span>DOCKER</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></li>
            <li class="flex justify-between items-center font-display text-xs border-b-2 border-dashed border-gray-300 pb-1"><span>VERCEL</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></li>
          </ul>
        </NeuCard>

        <!-- Soft Skills -->
        <NeuCard :hoverable="false" class="bg-black flex flex-col justify-center text-center" content-class="!bg-black !text-white flex flex-col items-center justify-center h-full">
          <h3 class="font-body text-xl font-bold mb-2 text-white">SOFT SKILLS</h3>
          <p class="font-body text-[11px] font-bold uppercase tracking-wider text-white leading-relaxed">COMMUNICATION, MENTORSHIP, PROBLEM SOLVING, CURRICULUM DESIGN</p>
        </NeuCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NeuCard from '../components/ui/NeuCard.vue';
</script>
