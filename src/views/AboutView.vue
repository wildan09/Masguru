<template>
  <div class="bg-off-white pb-8">
    <div class="container mx-auto py-8 px-4 md:py-16 md:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-[2fr_1.5fr] gap-8 mb-16">
        <NeuCard :hoverable="false" class="p-0" content-class="!p-6 flex flex-col h-full">
          <NeuTag color="yellow" class="mb-4 w-fit">ABOUT ME</NeuTag>
          <h1 class="font-display text-4xl md:text-5xl font-bold uppercase leading-tight mb-4">MAS GURU</h1>
          <p class="text-base font-body leading-relaxed mb-6 max-w-[500px] text-[#333]">
            I'm a Frontend Developer, RPL Teacher, and UI/UX enthusiast obsessed with building accessible, high-performance web applications. My journey started with a simple HTML page, and now I architect complex Vue and Laravel ecosystems.
          </p>
          <div class="flex gap-4 mt-auto">
            <NeuButton variant="yellow">RESUME</NeuButton>
            <NeuButton variant="secondary" class="bg-white">LET'S CHAT</NeuButton>
          </div>
        </NeuCard>

        <div class="flex flex-col">
          <div class="grid grid-cols-2 gap-4">
            <div class="border-black-heavy shadow-neu-sm flex items-center justify-center aspect-square bg-[#d1d5db]">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <div class="border-black-heavy shadow-neu-sm flex flex-col items-center justify-center aspect-square bg-blue text-white">
              <h2 class="font-display text-4xl md:text-5xl font-bold leading-tight mb-2">5+</h2>
              <p class="font-body text-[11px] font-bold uppercase tracking-wider text-white">YEARS EXP.</p>
            </div>
          </div>
          <NeuCard :hoverable="false" class="mt-4 flex-1">
            <h3 class="font-body text-xl font-bold mb-1">Education</h3>
            <p class="text-base font-body text-[#555]">My academic foundation.</p>
          </NeuCard>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <NeuCard :hoverable="false" class="bg-black" content-class="!p-6">
          <div class="w-12 h-12 rounded-full border-black-heavy flex items-center justify-center bg-white mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-yellow)" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path></svg>
          </div>
          <h3 class="font-body text-xl font-bold mb-1 text-white">B.S. in Computer Science</h3>
          <p class="text-base font-body text-gray-300">University of Technology, 2018</p>
        </NeuCard>
        <NeuCard :hoverable="false" class="bg-black" content-class="!p-6">
          <div class="w-12 h-12 rounded-full border-black-heavy flex items-center justify-center bg-white mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-yellow)" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path></svg>
          </div>
          <h3 class="font-body text-xl font-bold mb-1 text-white">B.S. in Computer Systems</h3>
          <p class="text-base font-body text-gray-300 mb-2">Institut Asia Malang, 2018</p>
          <p class="text-xs font-body text-gray-400">Developed a motorcycle security system using voice recognition integrated with a smart helmet.</p>
        </NeuCard>
      </div>

      <!-- Professional Growth -->
      <NeuTag color="yellow" class="mb-2 w-fit">CERTIFICATIONS</NeuTag>
      <h2 class="font-body text-3xl font-bold leading-tight mb-1">PROFESSIONAL GROWTH</h2>
      <p class="text-base font-body mb-8 text-[#555]">Validating my expertise through industry-standard credentials.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <NeuCard :hoverable="false" topBarColor="var(--color-blue)">
          <div class="flex justify-between items-start mb-4">
            <div class="w-10 h-10 border-2 border-black flex items-center justify-center bg-[#dbeafe]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9 12l2 2 4-4"></path></svg>
            </div>
            <span class="font-display font-bold text-sm bg-black text-white px-3 py-1">2020</span>
          </div>
          <h3 class="font-body text-xl font-bold mb-1 text-black">Google Certified Educator</h3>
          <p class="text-base font-body text-[#555]">Google for Education</p>
        </NeuCard>
        <NeuCard :hoverable="false" topBarColor="var(--color-yellow)">
          <div class="flex justify-between items-start mb-4">
            <div class="w-10 h-10 border-2 border-black flex items-center justify-center bg-[#fef08a]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-black)" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            </div>
            <span class="font-display font-bold text-sm bg-black text-white px-3 py-1">2022</span>
          </div>
          <h3 class="font-body text-xl font-bold mb-1 text-black">Full-Stack Certification</h3>
          <p class="text-base font-body text-[#555]">FreeCodeCamp</p>
        </NeuCard>
      </div>

      <!-- Teaching Journey -->
      <NeuTag color="blue" class="mb-2 w-fit">EXPERIENCE</NeuTag>
      <h2 class="font-body text-3xl font-bold leading-tight mb-1">Teaching Journey</h2>
      <p class="text-base font-body mb-8 text-[#555]">Sharing knowledge is a core part of who I am.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NeuCard :hoverable="false" content-class="!p-0">
          <div class="h-[200px] border-b-[3px] border-black relative bg-[#bbf7d0]"></div>
          <div class="p-6">
            <h3 class="font-body text-xl font-bold mb-1">Coding Bootcamp Instructor</h3>
            <p class="text-base font-body text-[#555]">Mentored 50+ students in modern web development</p>
          </div>
        </NeuCard>
        <NeuCard :hoverable="false" content-class="!p-0">
          <div class="h-[200px] border-b-[3px] border-black relative bg-[#1e3a8a]"></div>
          <div class="p-6">
            <h3 class="font-body text-xl font-bold mb-1">Tech Conference Speaker</h3>
            <p class="text-base font-body text-[#555]">Spoke at ReactConf and JSWorld</p>
          </div>
        </NeuCard>
        <NeuCard :hoverable="false" content-class="!p-0">
          <div class="h-[200px] border-b-[3px] border-black relative bg-black text-[#10b981] p-6 font-display text-[11px] overflow-x-auto">
            <pre><code>export const OpenSource = () => {
  return (
    &lt;Community&gt;
      {contributions.map(c => &lt;PR key={c.id} /&gt;)}
    &lt;/Community&gt;
  )
}</code></pre>
            <div class="absolute bottom-6 right-6 w-12 h-12 border-black-heavy flex items-center justify-center font-bold text-xl bg-yellow text-black">&lt;&gt;</div>
          </div>
          <div class="p-6">
            <h3 class="font-body text-xl font-bold mb-1">Open Source Contributor</h3>
            <p class="text-base font-body text-[#555]">Maintainer for multiple popular React libraries</p>
          </div>
        </NeuCard>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import NeuCard from '../components/ui/NeuCard.vue';
import NeuTag from '../components/ui/NeuTag.vue';
import NeuButton from '../components/ui/NeuButton.vue';
</script>
