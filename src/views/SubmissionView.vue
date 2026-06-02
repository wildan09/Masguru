<template>
  <div class="flex flex-col lg:flex-row lg:items-start min-h-[calc(100vh-60px)] bg-white">
    <!-- Left Side: Instructions -->
    <div class="w-full lg:w-[400px] lg:flex-shrink-0 flex justify-center py-8 px-4 md:py-16 md:px-8 bg-yellow border-b-[4px] border-[#0a0a0a] lg:border-b-0 lg:border-r-[4px] border-[#0a0a0a]">
      <div class="w-full">
        <div class="bg-black text-yellow font-display font-bold text-[14px] px-3 py-2 inline-block leading-tight mb-4">
          STUDENT<br>PORTAL
        </div>
        <h2 class="font-body text-3xl font-bold leading-tight mb-2 text-black">Submit Your Assignment</h2>
        <p class="text-base font-body leading-relaxed mb-8 max-w-[400px] text-[#333]">
          Follow these steps carefully before submission.
        </p>

        <div class="flex flex-col gap-4">
          <!-- Step 1 -->
          <div class="p-5 bg-white border-black-heavy shadow-neu-sm">
            <div class="flex items-center mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="mr-3"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
              <span class="font-display font-extrabold text-2xl text-black">01</span>
            </div>
            <h4 class="font-body text-base font-bold mb-1 text-black">Upload Drive</h4>
            <p class="text-xs font-body text-[#555]">Set sharing to 'Anyone with the link'.</p>
          </div>

          <!-- Step 2 -->
          <div class="p-5 bg-white border-black-heavy shadow-neu-sm">
            <div class="flex items-center mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="mr-3"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
              <span class="font-display font-extrabold text-2xl text-black">02</span>
            </div>
            <h4 class="font-body text-base font-bold mb-1 text-black">Copy Link</h4>
            <p class="text-xs font-body text-[#555]">Copy the full drive.google.com URL.</p>
          </div>

          <!-- Step 3 -->
          <div class="p-5 bg-white border-black-heavy shadow-neu-sm">
            <div class="flex items-center mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="mr-3"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <span class="font-display font-extrabold text-2xl text-black">03</span>
            </div>
            <h4 class="font-body text-base font-bold mb-1 text-black">Submit Form</h4>
            <p class="text-xs font-body text-[#555]">Fill accurately and submit below.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Side: Form -->
    <div class="flex-1 flex justify-center py-8 px-4 md:py-16 md:px-8 bg-white">
      <div class="max-w-5xl w-full">
        <!-- Receipt Toast Alert -->
        <div v-if="submitSuccess" class="bg-yellow border-black-heavy shadow-neu-sm p-5 mb-8 flex items-start gap-4 animate-bounce">
          <div class="bg-black text-white p-2 border-2 border-black rounded-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div>
            <h4 class="font-body font-bold text-lg uppercase tracking-wide">SUBMISSION SUCCESSFUL!</h4>
            <p class="font-body text-sm text-[#0a0a0a]">
              Thank you, <strong>{{ lastStudentSubmitted }}</strong>. Your assignment has been logged in real-time.
            </p>
          </div>
        </div>

        <p class="text-base font-body text-[#555] mb-4">Assignment Submission Form</p>
        
        <form @submit.prevent="handleSubmit" class="p-8 mb-8 bg-white border-black-heavy shadow-neu-md">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label class="font-body text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 block">ACADEMIC YEAR</label>
              <select v-model="form.academic_year" class="px-4 py-3 font-body text-base outline-none bg-white border-black-heavy w-full shadow-none transition-neu focus:-translate-x-0.5 focus:-translate-y-0.5 focus:shadow-neu-sm">
                <option value="2023/2024">2023/2024</option>
                <option value="2024/2025">2024/2025</option>
                <option value="2025/2026">2025/2026</option>
              </select>
            </div>
            <div>
              <label class="font-body text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 block">CLASS</label>
              <select v-model="form.class_name" class="px-4 py-3 font-body text-base outline-none bg-white border-black-heavy w-full shadow-none transition-neu focus:-translate-x-0.5 focus:-translate-y-0.5 focus:shadow-neu-sm">
                <option value="XII RPL 1">XII RPL 1</option>
                <option value="XII RPL 2">XII RPL 2</option>
                <option value="XI RPL 1">XI RPL 1</option>
                <option value="XI RPL 2">XI RPL 2</option>
              </select>
            </div>
          </div>
          
          <div class="mb-4">
            <label class="font-body text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 block">STUDENT FULL NAME</label>
            <input v-model="form.student_name" type="text" required class="px-4 py-3 font-body text-base outline-none bg-white border-black-heavy w-full shadow-none transition-neu focus:-translate-x-0.5 focus:-translate-y-0.5 focus:shadow-neu-sm" placeholder="John Doe">
          </div>
          
          <div class="mb-4">
            <label class="font-body text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 block">GOOGLE DRIVE LINK</label>
            <input v-model="form.google_drive_link" type="url" required class="px-4 py-3 font-body text-base outline-none bg-white border-black-heavy w-full shadow-none transition-neu focus:-translate-x-0.5 focus:-translate-y-0.5 focus:shadow-neu-sm" placeholder="https://drive.google.com/... (Anyone with Link)">
          </div>
          
          <div class="mb-6">
            <label class="font-body text-[11px] font-bold uppercase tracking-wider text-black mb-1.5 block">NOTES</label>
            <textarea v-model="form.notes" class="px-4 py-3 font-body text-base outline-none bg-white border-black-heavy w-full shadow-none transition-neu focus:-translate-x-0.5 focus:-translate-y-0.5 focus:shadow-neu-sm" rows="3" placeholder="Any additional comments..."></textarea>
          </div>
          
          <button type="submit" class="w-full bg-[#0a0a0a] text-yellow font-display font-bold border-[3px] border-[#0a0a0a] p-4 cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#FFE500] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-neu text-base uppercase">SUBMIT ASSIGNMENT</button>
        </form>

        <!-- Real-time Checker (Instantly shows success receipts) -->
        <div class="mb-8 border-3 border-black p-5 bg-off-white shadow-neu-sm">
          <h4 class="font-body font-bold text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
            <span class="w-2.5 h-2.5 bg-[#22C55E] border border-black rounded-full animate-ping"></span>
            Real-Time Submission Checker
          </h4>
          <p class="text-xs font-body text-[#555] mb-4">Search your name to instantly verify if your submission has successfully arrived in the database.</p>
          <div class="flex gap-2">
            <input v-model="searchQuery" type="text" class="px-3 py-2 border-2 border-black flex-1 text-sm bg-white outline-none" placeholder="Type your name...">
          </div>
          <div v-if="searchQuery.trim().length > 1" class="mt-4 bg-white border-2 border-black max-h-[150px] overflow-y-auto">
            <div 
              v-for="sub in filteredSubmissions" 
              :key="sub.id" 
              class="p-2.5 border-b border-black text-xs font-body flex justify-between items-center"
            >
              <div>
                <strong class="text-black uppercase">{{ sub.student_name }}</strong>
                <span class="text-gray-500 ml-2">({{ sub.class_name }})</span>
              </div>
              <span class="bg-[#22C55E] text-white border border-black px-1.5 py-0.5 font-bold uppercase text-[9px]">RECEIVED</span>
            </div>
            <div v-if="filteredSubmissions.length === 0" class="p-4 text-center text-xs text-gray-500 italic">
              No matching submission found.
            </div>
          </div>
        </div>

        <p class="text-base font-body text-[#555] mb-4">Submission Dashboard (Looker Studio)</p>
        <div class="w-full aspect-video border-black-heavy shadow-neu-md bg-[#e8f4fa] relative overflow-hidden flex items-center justify-center">
          <template v-if="isLoading">
            <NeuSkeleton variant="image" class="h-full" />
          </template>
          <template v-else>
            <iframe 
              v-if="lookerStudioUrl" 
              :src="lookerStudioUrl" 
              style="border: 0; width: 100%; height: 100%;" 
              allowfullscreen 
              sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            ></iframe>
            <div v-else class="text-center p-6 flex flex-col items-center">
              <span class="font-body text-[11px] font-bold uppercase tracking-widest text-[#0a0a0a] mb-2">Looker Studio Dashboard</span>
              <p class="text-xs font-body text-[#555] max-w-sm">No report URL configured. Add your Google Looker Studio sharing link in the Admin settings to display live reports here.</p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue';
import NeuSkeleton from '../components/ui/NeuSkeleton.vue';
import { submitAssignment, getLookerStudioUrl, getSubmissions } from '../services/supabase';

const form = reactive({
  academic_year: '2024/2025',
  class_name: 'XII RPL 1',
  student_name: '',
  google_drive_link: '',
  notes: ''
});

const submitSuccess = ref(false);
const lastStudentSubmitted = ref('');
const lookerStudioUrl = ref('');
const submissions = ref<any[]>([]);
const searchQuery = ref('');
const isLoading = ref(true);

async function loadData() {
  try {
    lookerStudioUrl.value = getLookerStudioUrl();
    submissions.value = await getSubmissions();
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  loadData();
});

const filteredSubmissions = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) return [];
  return submissions.value.filter(sub => 
    sub.student_name?.toLowerCase().includes(query)
  );
});

async function handleSubmit() {
  const payload = {
    academic_year: form.academic_year,
    class_name: form.class_name,
    student_name: form.student_name,
    google_drive_link: form.google_drive_link,
    notes: form.notes
  };

  const res = await submitAssignment(payload);

  if (res) {
    submitSuccess.value = true;
    lastStudentSubmitted.value = form.student_name;
    
    // Clear submission input
    form.student_name = '';
    form.google_drive_link = '';
    form.notes = '';

    // Reload list for real-time checker
    submissions.value = await getSubmissions();

    // Auto hide success banner after 8 seconds
    setTimeout(() => {
      submitSuccess.value = false;
    }, 8000);
  } else {
    alert('Something went wrong during submission. Please try again.');
  }
}
</script>
