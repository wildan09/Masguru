<template>
  <div>
    <!-- Hero Section -->
    <section
      class="bg-yellow py-12 px-4 md:py-20 md:px-8 border-b-[3px] border-black"
    >
      <div
        class="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-12"
      >
        <div class="flex-1">
          <NeuTag class="mb-6 border-black-heavy"
            >RPL TEACHER & PROGRAMMER</NeuTag
          >
          <h1
            class="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-none mb-6 mt-4"
          >
            Building the next<br />generation of devs.
          </h1>
          <p
            class="text-base md:text-lg mb-8 max-w-[600px] font-body text-[#333]"
          >
            I teach practical software engineering, build cool projects, and
            share my knowledge. Always learning, always building.
          </p>
          <div class="flex gap-4 flex-wrap mb-10">
            <NeuButton variant="primary" size="lg">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
              VIEW PROJECTS
            </NeuButton>
            <NeuButton variant="secondary" size="lg">CONTACT ME</NeuButton>
          </div>

          <div
            class="flex flex-wrap md:flex-nowrap gap-4 bg-white border-black-heavy shadow-neu-sm p-2 w-full md:w-fit justify-center"
          >
            <div
              class="px-4 py-2 text-center border-r-2 border-black last:border-r-0"
            >
              <h3 class="font-body text-2xl md:text-3xl font-bold text-blue">
                5+
              </h3>
              <p
                class="font-body text-[11px] font-bold uppercase tracking-wider text-[#555]"
              >
                YEARS TEACHING
              </p>
            </div>
            <div
              class="px-4 py-2 text-center border-r-2 border-black last:border-r-0"
            >
              <h3 class="font-body text-2xl md:text-3xl font-bold text-blue">
                200+
              </h3>
              <p
                class="font-body text-[11px] font-bold uppercase tracking-wider text-[#555]"
              >
                ACTIVE STUDENTS
              </p>
            </div>
            <div
              class="px-4 py-2 text-center border-r-2 border-black last:border-r-0"
            >
              <h3 class="font-body text-2xl md:text-3xl font-bold text-blue">
                30+
              </h3>
              <p
                class="font-body text-[11px] font-bold uppercase tracking-wider text-[#555]"
              >
                PROJECTS DONE
              </p>
            </div>
          </div>
        </div>
        <div class="flex-shrink-0 relative mt-8 md:mt-0 md:mr-8 lg:mr-20">
          <div
            class="w-[200px] h-[200px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] relative rotate-3 hover:rotate-0 transition-neu group cursor-pointer z-10 mt-4 md:mt-0"
          >
            <!-- Shadow background -->
            <div
              class="absolute inset-0 bg-blue translate-x-3 translate-y-3 border-[3px] border-black"
            ></div>
            <!-- Image container -->
            <div
              class="absolute inset-0 border-[3px] border-black bg-white overflow-hidden"
            >
              <img
                src="/img/masguru.jpeg"
                alt="Profile"
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <!-- Decorative elements -->
            <div
              class="absolute -top-4 -right-4 w-8 h-8 bg-yellow border-[3px] border-black rounded-full z-20 flex items-center justify-center shadow-[2px_2px_0px_#000]"
            >
              <div class="w-2 h-2 bg-black rounded-full animate-ping"></div>
            </div>
            <div
              class="absolute -bottom-3 -left-3 px-3 py-1 bg-white border-[3px] border-black z-20 font-body font-bold text-xs tracking-widest uppercase shadow-[2px_2px_0px_#000] rotate-[-5deg] group-hover:rotate-0 transition-transform"
            >
              HELLO!
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Marquee Banner -->
    <div
      class="overflow-hidden whitespace-nowrap py-3.5 bg-blue border-b-[3px] border-black"
    >
      <div class="inline-block animate-marquee whitespace-nowrap">
        <span
          class="font-display text-sm font-bold text-white px-4"
          v-for="i in 4"
          :key="i"
        >
          HTML/CSS • JAVASCRIPT • REACT • NEXT.JS • LARAVEL • PHP • MYSQL •
          TAILWIND CSS • GIT • GITHUB • FIGMA • VS CODE •
        </span>
      </div>
    </div>

    <!-- About Me Summary -->
    <section class="bg-white py-16 px-4 md:py-24 border-b-[3px] border-black">
      <div class="container mx-auto">
        <h2
          class="font-body text-3xl md:text-4xl font-bold leading-tight mb-8 underline decoration-[3px] underline-offset-4"
        >
          About Me
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8">
          <NeuCard :hoverable="false" class="p-6">
            <h3 class="font-body text-xl md:text-2xl font-bold mb-4">
              Hello, I'm Mas Guru! 👋
            </h3>
            <p class="text-base mb-4 font-body leading-relaxed text-[#333]">
              I bridge the gap between theoretical computer science and
              practical software engineering. As an RPL (Rekayasa Perangkat
              Lunak) teacher, my mission is to equip the next generation with
              modern, industry-standard skills.
            </p>
            <p class="text-base mb-6 font-body leading-relaxed text-[#333]">
              When I'm not grading assignments or explaining the intricacies of
              closures in JavaScript, I'm building tools, contributing to open
              source, and exploring new web technologies.
            </p>
            <a
              href="#"
              class="text-blue font-bold underline decoration-2 underline-offset-2"
              >Download Full Resume ↗</a
            >
          </NeuCard>

          <div class="flex flex-col gap-6" style="padding-bottom: 24px">
            <NeuCard
              style="background-color: var(--color-yellow)"
              :hoverable="false"
            >
              <h3
                class="font-body text-lg md:text-xl font-bold mb-2 flex items-center text-black"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="mr-3"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
                TEACHER
              </h3>
              <hr class="border-black mb-3" />
              <p
                class="text-sm md:text-base text-black font-body leading-relaxed"
              >
                Currently teaching Basic Web Programming, Databases, and
                Software Engineering principles to high school students.
              </p>
            </NeuCard>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Summary -->
    <section
      class="bg-black py-16 px-4 md:py-24 border-b-[3px] border-black text-white"
    >
      <div class="container mx-auto">
        <h2 class="font-body text-3xl md:text-4xl font-bold text-yellow mb-8">
          Tech Stack & Skills
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p
              class="font-body text-[11px] font-bold uppercase tracking-wider text-white mb-4"
            >
              PROGRAMMING
            </p>
            <div class="flex flex-wrap gap-2">
              <NeuTag>JAVASCRIPT</NeuTag>
              <NeuTag>PHP</NeuTag>
              <NeuTag>PYTHON</NeuTag>
              <NeuTag>SQL</NeuTag>
              <NeuTag>HTML5</NeuTag>
              <NeuTag>CSS3</NeuTag>
            </div>
          </div>
          <div>
            <p
              class="font-body text-[11px] font-bold uppercase tracking-wider text-white mb-4"
            >
              FRAMEWORKS
            </p>
            <div class="flex flex-wrap gap-2">
              <NeuTag>LARAVEL</NeuTag>
              <NeuTag>REACT</NeuTag>
              <NeuTag>NEXT.JS</NeuTag>
              <NeuTag>TAILWIND</NeuTag>
              <NeuTag>BOOTSTRAP</NeuTag>
            </div>
          </div>
          <div>
            <p
              class="font-body text-[11px] font-bold uppercase tracking-wider text-white mb-4"
            >
              TOOLS
            </p>
            <div class="flex flex-wrap gap-2">
              <NeuTag>GIT</NeuTag>
              <NeuTag>GITHUB</NeuTag>
              <NeuTag>VS CODE</NeuTag>
              <NeuTag>DOCKER</NeuTag>
              <NeuTag>POSTMAN</NeuTag>
            </div>
          </div>
          <div>
            <p
              class="font-body text-[11px] font-bold uppercase tracking-wider text-white mb-4"
            >
              DESIGN
            </p>
            <div class="flex flex-wrap gap-2">
              <NeuTag>FIGMA</NeuTag>
              <NeuTag>UI/UX</NeuTag>
              <NeuTag>WIREFRAMING</NeuTag>
              <NeuTag>NEUBRUTALISM</NeuTag>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Summary -->
    <section class="bg-white py-16 px-4 md:py-24 border-b-[3px] border-black">
      <div class="container mx-auto">
        <div class="flex justify-between items-center mb-8">
          <h2 class="font-body text-3xl md:text-4xl font-bold text-black">
            Featured Projects
          </h2>
          <a
            href="#"
            class="font-body text-[11px] font-bold uppercase tracking-wider text-black underline decoration-2 underline-offset-2"
            >View All GitHub →</a
          >
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <template v-if="isLoading">
            <NeuSkeleton v-for="i in 2" :key="`skel-${i}`" variant="card" />
          </template>
          <template v-else>
            <NeuCard
              v-for="(p, idx) in featuredProjects"
              :key="p.id"
              :hoverable="false"
              content-class="!p-0"
            >
              <div
                :class="[
                  'h-8 flex items-center px-4 gap-1.5 border-b-[3px] border-black',
                  idx % 2 === 0 ? 'bg-yellow' : 'bg-blue',
                ]"
              >
                <span
                  class="w-3 h-3 border-2 border-black rounded-full bg-white"
                ></span>
                <span
                  class="w-3 h-3 border-2 border-black rounded-full bg-white"
                ></span>
                <span
                  class="w-3 h-3 border-2 border-black rounded-full bg-white"
                ></span>
              </div>
              <div
                v-if="p.image_url"
                class="border-b-[3px] border-black h-48 overflow-hidden bg-white"
              >
                <img
                  :src="p.image_url"
                  :alt="p.title"
                  class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div class="p-6 flex flex-col flex-1">
                <h3 class="font-body text-xl font-bold mb-2 text-black">
                  {{ p.title }}
                </h3>
                <div class="flex flex-wrap gap-2 mb-4">
                  <NeuTag v-for="tag in p.tags" :key="tag">{{ tag }}</NeuTag>
                </div>
                <p
                  class="text-sm md:text-base mb-6 flex-1 font-body text-[#333] leading-relaxed"
                >
                  {{ p.description }}
                </p>
                <div class="flex gap-3">
                  <NeuButton
                    v-if="p.demo_url && p.demo_url !== '#'"
                    variant="primary"
                    size="sm"
                    @click="goToUrl(p.demo_url)"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                      class="mr-1.5"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    DEMO
                  </NeuButton>
                  <NeuButton
                    v-if="p.github_url && p.github_url !== '#'"
                    variant="secondary"
                    size="sm"
                    @click="goToUrl(p.github_url)"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      class="mr-1.5"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    GITHUB
                  </NeuButton>
                </div>
              </div>
            </NeuCard>
            <div
              v-if="featuredProjects.length === 0"
              class="col-span-2 text-center text-gray-500 py-12"
            >
              No projects to display. Add some in the Admin panel!
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import NeuButton from "../components/ui/NeuButton.vue";
import NeuCard from "../components/ui/NeuCard.vue";
import NeuTag from "../components/ui/NeuTag.vue";
import NeuSkeleton from "../components/ui/NeuSkeleton.vue";
import { getProjects } from "../services/supabase";

const featuredProjects = ref<any[]>([]);
const isLoading = ref(true);

onMounted(async () => {
  try {
    const allProjects = await getProjects();
    featuredProjects.value = allProjects.slice(0, 2);
  } finally {
    isLoading.value = false;
  }
});

function goToUrl(url: string) {
  if (url && url !== "#") {
    window.open(url, "_blank");
  }
}
</script>
