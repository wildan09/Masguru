<template>
  <div class="bg-off-white min-h-[calc(100vh-60px)] pb-16">
    <div class="container mx-auto py-8 px-4 md:py-12">
      <!-- Title Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <span class="inline-block px-2.5 py-1 font-body text-[11px] font-bold uppercase tracking-wider bg-black text-yellow mb-2">PORTFOLIO CMS</span>
          <h1 class="font-display text-3xl md:text-4xl font-bold uppercase leading-none">ADMIN DASHBOARD</h1>
        </div>
        <div class="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div class="flex items-center gap-3 bg-white border-2 border-black px-3 py-1.5 shadow-[2px_2px_0px_#000]">
            <div :class="['w-3 h-3 rounded-full border-2 border-black', isConfigured ? 'bg-[#22C55E]' : 'bg-red-500']"></div>
            <span class="font-body text-[10px] font-bold uppercase tracking-wider">
              {{ isConfigured ? 'SUPABASE CONNECTED' : 'LOCAL FALLBACK ACTIVE' }}
            </span>
          </div>
          <button @click="handleLogout" class="bg-red-500 text-white border-2 border-black px-4 py-1.5 font-body font-bold text-[10px] uppercase cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-neu">
            LOGOUT
          </button>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div class="flex flex-wrap gap-2 mb-8 border-b-3 border-black pb-4">
        <button 
          v-for="tab in ['projects', 'tips', 'submissions', 'settings']" 
          :key="tab"
          @click="activeTab = tab"
          :class="[
            'px-5 py-2.5 font-body font-bold text-xs uppercase tracking-wider border-2 border-black cursor-pointer transition-neu',
            activeTab === tab 
              ? 'bg-black text-white shadow-none translate-x-0.5 translate-y-0.5' 
              : 'bg-white text-black shadow-[3px_3px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000]'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <!-- TAB content: PROJECTS -->
      <div v-if="activeTab === 'projects'" class="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
        <!-- Add Project Form -->
        <NeuCard :hoverable="false" class="h-fit">
          <h3 class="font-body text-xl font-bold mb-4">Add Project</h3>
          <form @submit.prevent="handleAddProject" class="flex flex-col gap-4">
            <div>
              <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">Title</label>
              <input v-model="projectForm.title" type="text" required class="px-3 py-2 border-2 border-black w-full text-sm outline-none" placeholder="e.g. Portfolio Site" />
            </div>
            <div>
              <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">Description</label>
              <textarea v-model="projectForm.description" required rows="3" class="px-3 py-2 border-2 border-black w-full text-sm outline-none" placeholder="Short description of the project..."></textarea>
            </div>
            <div>
              <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">Tags (comma separated)</label>
              <input v-model="projectForm.tagsInput" type="text" class="px-3 py-2 border-2 border-black w-full text-sm outline-none" placeholder="LARAVEL, MYSQL, VUE" />
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div>
                <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">Demo URL</label>
                <input v-model="projectForm.demo_url" type="text" class="px-3 py-2 border-2 border-black w-full text-sm outline-none" placeholder="#" />
              </div>
              <div>
                <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">GitHub URL</label>
                <input v-model="projectForm.github_url" type="text" class="px-3 py-2 border-2 border-black w-full text-sm outline-none" placeholder="#" />
              </div>
            </div>
            <div>
              <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">Category</label>
              <select v-model="projectForm.category" class="px-3 py-2 border-2 border-black w-full text-sm outline-none bg-white">
                <option value="web">Web</option>
                <option value="mobile">Mobile</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">Highlight Image (Max 5MB)</label>
              <input type="file" accept="image/*" @change="(e) => handleFileSelect(e, 'project')" class="px-3 py-2 border-2 border-black w-full text-sm outline-none bg-white cursor-pointer" />
            </div>
            <NeuButton type="submit" variant="yellow" class="mt-2 w-full" :disabled="isUploadingProject">
              {{ isUploadingProject ? 'UPLOADING...' : 'SAVE PROJECT' }}
            </NeuButton>
          </form>
        </NeuCard>

        <!-- Projects List Table -->
        <NeuCard :hoverable="false" class="h-fit">
          <h3 class="font-body text-xl font-bold mb-4">Existing Projects</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-black text-white font-body text-xs uppercase tracking-wider">
                  <th class="p-3 text-left border-2 border-black">Title</th>
                  <th class="p-3 text-left border-2 border-black">Category</th>
                  <th class="p-3 text-left border-2 border-black">Tags</th>
                  <th class="p-3 text-center border-2 border-black">Actions</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="isLoading">
                  <tr v-for="i in 3" :key="`skel-proj-${i}`" class="border-2 border-black">
                    <td colspan="4" class="p-3 border-2 border-black">
                      <NeuSkeleton variant="text" />
                    </td>
                  </tr>
                </template>
                <template v-else>
                  <tr v-for="p in projects" :key="p.id" class="border-2 border-black font-body text-sm hover:bg-gray-50">
                    <td class="p-3 border-2 border-black font-bold">{{ p.title }}</td>
                    <td class="p-3 border-2 border-black uppercase text-xs font-semibold">{{ p.category }}</td>
                    <td class="p-3 border-2 border-black">
                      <span v-for="t in p.tags" :key="t" class="inline-block bg-yellow text-[10px] font-bold px-1.5 py-0.5 border border-black mr-1 uppercase">
                        {{ t }}
                      </span>
                    </td>
                    <td class="p-3 border-2 border-black text-center">
                      <button @click="handleDeleteProject(p.id)" class="bg-red-500 text-white border-2 border-black px-2 py-1 font-bold text-xs uppercase cursor-pointer hover:bg-red-600 transition-neu">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr v-if="projects.length === 0">
                    <td colspan="4" class="p-8 text-center text-gray-500 italic">No projects found. Add your first project using the form.</td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </NeuCard>
      </div>

      <!-- TAB content: TIPS -->
      <div v-if="activeTab === 'tips'" class="flex flex-col gap-12">
        <!-- Add Tip Form -->
        <NeuCard :hoverable="false" class="h-fit">
          <h3 class="font-body text-xl font-bold mb-4">Add Tip & Trick</h3>
          <form @submit.prevent="handleAddTip" class="flex flex-col gap-4">
            <div>
              <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">Title</label>
              <input v-model="tipForm.title" type="text" required class="px-3 py-2 border-2 border-black w-full text-sm outline-none" placeholder="e.g. Master Flexbox in CSS" />
            </div>
            <div>
              <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">Description</label>
              <textarea v-model="tipForm.description" required rows="2" class="px-3 py-2 border-2 border-black w-full text-sm outline-none" placeholder="Short preview of the tip..."></textarea>
            </div>
            <div>
              <div class="flex justify-between items-center mb-1">
                <label class="font-body text-[10px] font-bold uppercase tracking-wider block">Article Content</label>
                <label class="font-body text-[10px] font-bold uppercase tracking-wider bg-black text-yellow px-2 py-1 cursor-pointer hover:bg-yellow hover:text-black border-2 border-black transition-colors">
                  + Insert Image
                  <input type="file" accept="image/*" class="hidden" @change="handleInsertImageToArticle" />
                </label>
              </div>
              <textarea v-model="tipForm.content" required rows="15" class="px-3 py-2 border-2 border-black w-full text-sm outline-none font-body" placeholder="Write your full article here... Markdown supported!"></textarea>
            </div>
            <div>
              <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">Category</label>
              <input v-model="tipForm.category" type="text" class="px-3 py-2 border-2 border-black w-full text-sm outline-none" placeholder="PROGRAMMING, WEB, GIT" />
            </div>
            <div>
              <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">Link / URL</label>
              <input v-model="tipForm.url" type="text" class="px-3 py-2 border-2 border-black w-full text-sm outline-none" placeholder="#" />
            </div>
            <div>
              <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">Highlight Image (Max 5MB)</label>
              <input type="file" accept="image/*" @change="(e) => handleFileSelect(e, 'tip')" class="px-3 py-2 border-2 border-black w-full text-sm outline-none bg-white cursor-pointer" />
            </div>
            <NeuButton type="submit" variant="blue" class="mt-2 w-full text-white" :disabled="isUploadingTip">
              {{ isUploadingTip ? 'UPLOADING...' : 'SAVE TIP & TRICK' }}
            </NeuButton>
          </form>
        </NeuCard>

        <!-- Tips List Table -->
        <NeuCard :hoverable="false" class="h-fit">
          <h3 class="font-body text-xl font-bold mb-4">Existing Tips & Tricks</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-black text-white font-body text-xs uppercase tracking-wider">
                  <th class="p-3 text-left border-2 border-black">Title</th>
                  <th class="p-3 text-left border-2 border-black">Category</th>
                  <th class="p-3 text-left border-2 border-black">Description</th>
                  <th class="p-3 text-center border-2 border-black">Actions</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="isLoading">
                  <tr v-for="i in 3" :key="`skel-tip-${i}`" class="border-2 border-black">
                    <td colspan="4" class="p-3 border-2 border-black">
                      <NeuSkeleton variant="text" />
                    </td>
                  </tr>
                </template>
                <template v-else>
                  <tr v-for="t in tips" :key="t.id" class="border-2 border-black font-body text-sm hover:bg-gray-50">
                    <td class="p-3 border-2 border-black font-bold">{{ t.title }}</td>
                    <td class="p-3 border-2 border-black font-semibold text-xs text-blue uppercase">{{ t.category }}</td>
                    <td class="p-3 border-2 border-black max-w-xs truncate text-[#555]">{{ t.description }}</td>
                    <td class="p-3 border-2 border-black text-center">
                      <button @click="handleDeleteTip(t.id)" class="bg-red-500 text-white border-2 border-black px-2 py-1 font-bold text-xs uppercase cursor-pointer hover:bg-red-600 transition-neu">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr v-if="tips.length === 0">
                    <td colspan="4" class="p-8 text-center text-gray-500 italic">No tips found. Add your first tip using the form.</td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </NeuCard>
      </div>

      <!-- TAB content: SUBMISSIONS -->
      <div v-if="activeTab === 'submissions'">
        <NeuCard :hoverable="false">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h3 class="font-body text-xl font-bold">Student Submissions Log</h3>
            <div class="text-xs font-body text-gray-500">
              Total submissions: <strong class="text-black font-bold">{{ submissions.length }}</strong>
            </div>
          </div>
          
          <div class="overflow-x-auto">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-black text-white font-body text-xs uppercase tracking-wider">
                  <th class="p-3 text-left border-2 border-black">Date</th>
                  <th class="p-3 text-left border-2 border-black">Student Name</th>
                  <th class="p-3 text-left border-2 border-black">Class (Year)</th>
                  <th class="p-3 text-left border-2 border-black">Drive URL</th>
                  <th class="p-3 text-left border-2 border-black">Notes</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="isLoading">
                  <tr v-for="i in 3" :key="`skel-sub-${i}`" class="border-2 border-black">
                    <td colspan="5" class="p-3 border-2 border-black">
                      <NeuSkeleton variant="text" />
                    </td>
                  </tr>
                </template>
                <template v-else>
                  <tr v-for="s in submissions" :key="s.id" class="border-2 border-black font-body text-sm hover:bg-gray-50">
                    <td class="p-3 border-2 border-black text-xs font-mono text-[#555]">{{ formatDate(s.created_at) }}</td>
                    <td class="p-3 border-2 border-black font-bold uppercase text-black">{{ s.student_name }}</td>
                    <td class="p-3 border-2 border-black uppercase text-xs font-semibold">{{ s.class_name }} ({{ s.academic_year }})</td>
                    <td class="p-3 border-2 border-black">
                      <a :href="s.google_drive_link" target="_blank" class="text-blue hover:underline font-bold truncate max-w-[150px] inline-block">
                        View Drive
                      </a>
                    </td>
                    <td class="p-3 border-2 border-black text-[#555] max-w-xs truncate">{{ s.notes || '-' }}</td>
                  </tr>
                  <tr v-if="submissions.length === 0">
                    <td colspan="5" class="p-8 text-center text-gray-500 italic">No submissions yet.</td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </NeuCard>
      </div>

      <!-- TAB content: SETTINGS -->
      <div v-if="activeTab === 'settings'" class="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8">
        <!-- Config form -->
        <NeuCard :hoverable="false" class="h-fit">
          <h3 class="font-body text-xl font-bold mb-2">Integration Configuration</h3>
          <p class="text-sm font-body text-[#555] mb-6 leading-relaxed">
            Insert your credentials below to connect to your live Supabase cloud database and display Google Looker Studio reports.
          </p>

          <form @submit.prevent="handleSaveSettings" class="flex flex-col gap-5">
            <div>
              <label class="font-body text-xs font-bold uppercase tracking-wider mb-1.5 block">Supabase API URL</label>
              <input v-model="settings.url" type="text" class="px-4 py-2.5 border-2 border-black w-full text-base outline-none font-mono" placeholder="https://xxxxxxxxxxxxxxxxxxxx.supabase.co" />
            </div>
            
            <div>
              <label class="font-body text-xs font-bold uppercase tracking-wider mb-1.5 block">Supabase Anon Key</label>
              <input v-model="settings.key" type="password" class="px-4 py-2.5 border-2 border-black w-full text-base outline-none font-mono" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." />
            </div>

            <div>
              <label class="font-body text-xs font-bold uppercase tracking-wider mb-1.5 block">Looker Studio Embedded IFrame URL</label>
              <input v-model="settings.lookerStudioUrl" type="text" class="px-4 py-2.5 border-2 border-black w-full text-base outline-none font-mono" placeholder="https://lookerstudio.google.com/embed/reporting/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/page/xxxx" />
              <p class="text-[10px] text-gray-500 font-body mt-1">Get this URL by clicking "Share > Embed report" in Looker Studio and copying the URL inside the src.</p>
            </div>

            <NeuButton type="submit" variant="primary" class="mt-2 w-full">SAVE CONFIGURATION</NeuButton>
          </form>
        </NeuCard>

        <!-- Supabase Setup Guide -->
        <NeuCard :hoverable="false" class="bg-black text-white" content-class="!bg-black !text-white flex flex-col h-full">
          <h3 class="font-body text-xl font-bold mb-2 text-yellow">Database Setup Instructions</h3>
          <p class="text-sm font-body text-gray-300 mb-6 leading-relaxed">
            Create three tables inside your Supabase **SQL Editor** to allow the dynamic sections and submissions to sync correctly.
          </p>
          
          <pre class="bg-[#111] p-4 text-xs font-mono text-[#10b981] overflow-y-auto max-h-[300px] border-2 border-gray-700"><code>-- Projects Table
create table projects (
  id bigint generated always as identity primary key,
  title text not null,
  description text,
  tags text[] default '{}',
  demo_url text,
  github_url text,
  category text default 'web',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Tips Table
create table tips (
  id bigint generated always as identity primary key,
  title text not null,
  description text,
  category text default 'programming',
  url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Submissions Table
create table submissions (
  id bigint generated always as identity primary key,
  academic_year text not null,
  class_name text not null,
  student_name text not null,
  google_drive_link text not null,
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);</code></pre>
        </NeuCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import NeuCard from '../components/ui/NeuCard.vue';
import NeuTag from '../components/ui/NeuTag.vue';
import NeuButton from '../components/ui/NeuButton.vue';
import NeuSkeleton from '../components/ui/NeuSkeleton.vue';
import { 
  isSupabaseConfigured, 
  getSupabaseKeys, 
  saveSupabaseConfig, 
  getLookerStudioUrl, 
  saveLookerStudioUrl,
  getProjects,
  addProject,
  deleteProject,
  getTips,
  addTip,
  deleteTip,
  getSubmissions,
  logout,
  uploadImage
} from '../services/supabase';

const router = useRouter();
const activeTab = ref('projects');
const isConfigured = ref(false);
const isLoading = ref(true);

const projects = ref<any[]>([]);
const tips = ref<any[]>([]);
const submissions = ref<any[]>([]);

async function handleLogout() {
  await logout();
  router.push('/login');
}

const settings = reactive({
  url: '',
  key: '',
  lookerStudioUrl: ''
});

const projectForm = reactive({
  title: '',
  description: '',
  tagsInput: '',
  demo_url: '',
  github_url: '',
  category: 'web'
});

const tipForm = reactive({
  title: '',
  description: '',
  content: '',
  category: 'PROGRAMMING',
  url: ''
});

const projectImageFile = ref<File | null>(null);
const tipImageFile = ref<File | null>(null);
const isUploadingProject = ref(false);
const isUploadingTip = ref(false);

function handleFileSelect(event: Event, type: 'project' | 'tip') {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      alert('File is too large! Maximum allowed size is 5MB.');
      target.value = ''; // clear input
      if (type === 'project') projectImageFile.value = null;
      else tipImageFile.value = null;
      return;
    }
    
    if (type === 'project') projectImageFile.value = file || null;
    else tipImageFile.value = file || null;
  }
}

async function handleInsertImageToArticle(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    if (!file) return;
    
    if (file.size > 5 * 1024 * 1024) {
      alert('File is too large! Maximum 5MB.');
      target.value = '';
      return;
    }
    
    try {
      const url = await uploadImage(file);
      tipForm.content += `\n\n![Image](${url})\n\n`;
    } catch (error: any) {
      alert('Failed to upload image: ' + error.message);
    } finally {
      target.value = ''; // Reset input
    }
  }
}

// Load all settings and records
async function loadAll() {
  try {
    isConfigured.value = isSupabaseConfigured();
    
    const keys = getSupabaseKeys();
    settings.url = keys.url;
    settings.key = keys.key;
    settings.lookerStudioUrl = getLookerStudioUrl();

    projects.value = await getProjects();
    tips.value = await getTips();
    submissions.value = await getSubmissions();
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  loadAll();
});

// CRUD Operations
async function handleAddProject() {
  isUploadingProject.value = true;
  try {
    let imageUrl = '';
    if (projectImageFile.value) {
      imageUrl = await uploadImage(projectImageFile.value);
    }

    const tags = projectForm.tagsInput
      ? projectForm.tagsInput.split(',').map(t => t.trim().toUpperCase()).filter(t => t.length > 0)
      : [];

    await addProject({
      title: projectForm.title,
      description: projectForm.description,
      tags,
      demo_url: projectForm.demo_url || '#',
      github_url: projectForm.github_url || '#',
      category: projectForm.category,
      image_url: imageUrl
    });

    // Reset form
    projectForm.title = '';
    projectForm.description = '';
    projectForm.tagsInput = '';
    projectForm.demo_url = '';
    projectForm.github_url = '';
    projectForm.category = 'web';
    projectImageFile.value = null;

    // Reload lists
    projects.value = await getProjects();
    alert('Project saved successfully!');
  } catch (error: any) {
    alert('Error saving project: ' + error.message);
  } finally {
    isUploadingProject.value = false;
  }
}

async function handleDeleteProject(id: number | string) {
  if (confirm('Are you sure you want to delete this project?')) {
    await deleteProject(id);
    projects.value = await getProjects();
  }
}

async function handleAddTip() {
  isUploadingTip.value = true;
  try {
    let imageUrl = '';
    if (tipImageFile.value) {
      imageUrl = await uploadImage(tipImageFile.value);
    }

    await addTip({
      title: tipForm.title,
      description: tipForm.description,
      content: tipForm.content,
      category: tipForm.category.toUpperCase(),
      url: tipForm.url || '#',
      image_url: imageUrl
    });

    // Reset form
    tipForm.title = '';
    tipForm.description = '';
    tipForm.content = '';
    tipForm.category = 'PROGRAMMING';
    tipForm.url = '';
    tipImageFile.value = null;

    // Reload lists
    tips.value = await getTips();
    alert('Tip & Trick saved successfully!');
  } catch (error: any) {
    alert('Error saving tip: ' + error.message);
  } finally {
    isUploadingTip.value = false;
  }
}

async function handleDeleteTip(id: number | string) {
  if (confirm('Are you sure you want to delete this tip?')) {
    await deleteTip(id);
    tips.value = await getTips();
  }
}

function handleSaveSettings() {
  saveSupabaseConfig(settings.url, settings.key);
  saveLookerStudioUrl(settings.lookerStudioUrl);
  alert('Configuration saved! Reconnecting to database...');
  loadAll();
}

function formatDate(isoString: string) {
  if (!isoString) return '-';
  try {
    const d = new Date(isoString);
    return d.toLocaleString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  } catch (e) {
    return isoString;
  }
}
</script>
