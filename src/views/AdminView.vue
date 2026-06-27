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
                      <div class="flex items-center justify-center gap-2">
                        <button @click="openEditProject(p)" class="bg-black text-yellow border-2 border-black px-2 py-1 font-bold text-xs uppercase cursor-pointer hover:bg-yellow hover:text-black transition-neu">
                          Edit
                        </button>
                        <button @click="handleDeleteProject(p.id)" class="bg-red-500 text-white border-2 border-black px-2 py-1 font-bold text-xs uppercase cursor-pointer hover:bg-red-600 transition-neu">
                          Delete
                        </button>
                      </div>
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
      <div v-if="activeTab === 'tips'" class="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                      <div class="flex items-center justify-center gap-2">
                        <button @click="openEditTip(t)" class="bg-black text-yellow border-2 border-black px-2 py-1 font-bold text-xs uppercase cursor-pointer hover:bg-yellow hover:text-black transition-neu">
                          Edit
                        </button>
                        <button @click="handleDeleteTip(t.id)" class="bg-red-500 text-white border-2 border-black px-2 py-1 font-bold text-xs uppercase cursor-pointer hover:bg-red-600 transition-neu">
                          Delete
                        </button>
                      </div>
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

    <!-- =========================================== -->
    <!-- EDIT PROJECT MODAL                          -->
    <!-- =========================================== -->
    <Teleport to="body">
      <div
        v-if="editProjectModal.open"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="closeEditProject"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <!-- Modal Box -->
        <div class="relative bg-white border-4 border-black shadow-[8px_8px_0px_#000] w-full max-w-lg max-h-[90vh] overflow-y-auto">
          <!-- Modal Header -->
          <div class="bg-black text-white px-6 py-4 flex items-center justify-between sticky top-0 z-10">
            <div>
              <span class="font-body text-[10px] font-bold uppercase tracking-widest text-yellow block mb-0.5">EDITING PROJECT</span>
              <h2 class="font-display text-xl font-bold uppercase leading-tight">{{ editProjectModal.data.title }}</h2>
            </div>
            <button
              @click="closeEditProject"
              class="w-9 h-9 flex items-center justify-center border-2 border-yellow text-yellow font-bold text-lg hover:bg-yellow hover:text-black transition-neu"
            >✕</button>
          </div>

          <!-- Modal Form -->
          <form @submit.prevent="handleUpdateProject" class="p-6 flex flex-col gap-4">
            <div>
              <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">Title</label>
              <input v-model="editProjectModal.data.title" type="text" required class="px-3 py-2 border-2 border-black w-full text-sm outline-none focus:border-yellow transition-colors" placeholder="e.g. Portfolio Site" />
            </div>
            <div>
              <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">Description</label>
              <textarea v-model="editProjectModal.data.description" required rows="3" class="px-3 py-2 border-2 border-black w-full text-sm outline-none focus:border-yellow transition-colors" placeholder="Short description..."></textarea>
            </div>
            <div>
              <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">Tags (comma separated)</label>
              <input v-model="editProjectModal.data.tagsInput" type="text" class="px-3 py-2 border-2 border-black w-full text-sm outline-none focus:border-yellow transition-colors" placeholder="LARAVEL, MYSQL, VUE" />
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div>
                <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">Demo URL</label>
                <input v-model="editProjectModal.data.demo_url" type="text" class="px-3 py-2 border-2 border-black w-full text-sm outline-none focus:border-yellow transition-colors" placeholder="#" />
              </div>
              <div>
                <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">GitHub URL</label>
                <input v-model="editProjectModal.data.github_url" type="text" class="px-3 py-2 border-2 border-black w-full text-sm outline-none focus:border-yellow transition-colors" placeholder="#" />
              </div>
            </div>
            <div>
              <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">Category</label>
              <select v-model="editProjectModal.data.category" class="px-3 py-2 border-2 border-black w-full text-sm outline-none bg-white focus:border-yellow transition-colors">
                <option value="web">Web</option>
                <option value="mobile">Mobile</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">Replace Image (Max 5MB, optional)</label>
              <input type="file" accept="image/*" @change="(e) => handleFileSelect(e, 'editProject')" class="px-3 py-2 border-2 border-black w-full text-sm outline-none bg-white cursor-pointer" />
              <p v-if="editProjectModal.data.image_url" class="text-[10px] text-gray-500 font-body mt-1">Current image will be kept if no new file is chosen.</p>
            </div>

            <!-- Actions -->
            <div class="flex gap-3 mt-2">
              <button
                type="button"
                @click="closeEditProject"
                class="flex-1 px-4 py-2.5 border-2 border-black font-body font-bold text-xs uppercase cursor-pointer bg-white hover:bg-gray-100 transition-neu"
              >Cancel</button>
              <button
                type="submit"
                :disabled="isUpdatingProject"
                class="flex-1 px-4 py-2.5 border-2 border-black font-body font-bold text-xs uppercase cursor-pointer bg-yellow text-black shadow-[3px_3px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000] disabled:opacity-60 disabled:cursor-not-allowed transition-neu"
              >
                {{ isUpdatingProject ? 'SAVING...' : 'SAVE CHANGES' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Teleport>

    <!-- =========================================== -->
    <!-- EDIT TIP MODAL                              -->
    <!-- =========================================== -->
    <Teleport to="body">
      <div
        v-if="editTipModal.open"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="closeEditTip"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <!-- Modal Box -->
        <div class="relative bg-white border-4 border-black shadow-[8px_8px_0px_#000] w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <!-- Modal Header -->
          <div class="bg-black text-white px-6 py-4 flex items-center justify-between sticky top-0 z-10">
            <div>
              <span class="font-body text-[10px] font-bold uppercase tracking-widest text-blue block mb-0.5">EDITING TIP & TRICK</span>
              <h2 class="font-display text-xl font-bold uppercase leading-tight">{{ editTipModal.data.title }}</h2>
            </div>
            <button
              @click="closeEditTip"
              class="w-9 h-9 flex items-center justify-center border-2 border-blue text-blue font-bold text-lg hover:bg-blue hover:text-white transition-neu"
            >✕</button>
          </div>

          <!-- Modal Form -->
          <form @submit.prevent="handleUpdateTip" class="p-6 flex flex-col gap-4">
            <div>
              <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">Title</label>
              <input v-model="editTipModal.data.title" type="text" required class="px-3 py-2 border-2 border-black w-full text-sm outline-none focus:border-blue transition-colors" placeholder="e.g. Master Flexbox in CSS" />
            </div>
            <div>
              <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">Description</label>
              <textarea v-model="editTipModal.data.description" required rows="2" class="px-3 py-2 border-2 border-black w-full text-sm outline-none focus:border-blue transition-colors" placeholder="Short preview of the tip..."></textarea>
            </div>
            <div>
              <div class="flex justify-between items-center mb-1">
                <label class="font-body text-[10px] font-bold uppercase tracking-wider block">Article Content</label>
                <label class="font-body text-[10px] font-bold uppercase tracking-wider bg-black text-yellow px-2 py-1 cursor-pointer hover:bg-yellow hover:text-black border-2 border-black transition-colors">
                  + Insert Image
                  <input type="file" accept="image/*" class="hidden" @change="handleInsertImageToEditArticle" />
                </label>
              </div>
              <textarea v-model="editTipModal.data.content" rows="12" class="px-3 py-2 border-2 border-black w-full text-sm outline-none font-body focus:border-blue transition-colors" placeholder="Write your full article here... Markdown supported!"></textarea>
            </div>
            <div>
              <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">Category</label>
              <input v-model="editTipModal.data.category" type="text" class="px-3 py-2 border-2 border-black w-full text-sm outline-none focus:border-blue transition-colors" placeholder="PROGRAMMING, WEB, GIT" />
            </div>
            <div>
              <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">Link / URL</label>
              <input v-model="editTipModal.data.url" type="text" class="px-3 py-2 border-2 border-black w-full text-sm outline-none focus:border-blue transition-colors" placeholder="#" />
            </div>
            <div>
              <label class="font-body text-[10px] font-bold uppercase tracking-wider mb-1 block">Replace Image (Max 5MB, optional)</label>
              <input type="file" accept="image/*" @change="(e) => handleFileSelect(e, 'editTip')" class="px-3 py-2 border-2 border-black w-full text-sm outline-none bg-white cursor-pointer" />
              <p v-if="editTipModal.data.image_url" class="text-[10px] text-gray-500 font-body mt-1">Current image will be kept if no new file is chosen.</p>
            </div>

            <!-- Actions -->
            <div class="flex gap-3 mt-2">
              <button
                type="button"
                @click="closeEditTip"
                class="flex-1 px-4 py-2.5 border-2 border-black font-body font-bold text-xs uppercase cursor-pointer bg-white hover:bg-gray-100 transition-neu"
              >Cancel</button>
              <button
                type="submit"
                :disabled="isUpdatingTip"
                class="flex-1 px-4 py-2.5 border-2 border-black font-body font-bold text-xs uppercase cursor-pointer bg-blue text-white shadow-[3px_3px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000] disabled:opacity-60 disabled:cursor-not-allowed transition-neu"
              >
                {{ isUpdatingTip ? 'SAVING...' : 'SAVE CHANGES' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Teleport>
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
  updateProject,
  getTips,
  addTip,
  deleteTip,
  updateTip,
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

// ---- File refs for add forms ----
const projectImageFile = ref<File | null>(null);
const tipImageFile = ref<File | null>(null);
const isUploadingProject = ref(false);
const isUploadingTip = ref(false);

// ---- Edit modal state ----
const editProjectImageFile = ref<File | null>(null);
const editTipImageFile = ref<File | null>(null);
const isUpdatingProject = ref(false);
const isUpdatingTip = ref(false);

const editProjectModal = reactive<{
  open: boolean;
  id: number | string | null;
  data: {
    title: string;
    description: string;
    tagsInput: string;
    demo_url: string;
    github_url: string;
    category: string;
    image_url: string;
  };
}>({
  open: false,
  id: null,
  data: { title: '', description: '', tagsInput: '', demo_url: '', github_url: '', category: 'web', image_url: '' }
});

const editTipModal = reactive<{
  open: boolean;
  id: number | string | null;
  data: {
    title: string;
    description: string;
    content: string;
    category: string;
    url: string;
    image_url: string;
  };
}>({
  open: false,
  id: null,
  data: { title: '', description: '', content: '', category: 'PROGRAMMING', url: '', image_url: '' }
});

// ---- Open / close edit modals ----
function openEditProject(p: any) {
  editProjectModal.id = p.id;
  editProjectModal.data.title = p.title;
  editProjectModal.data.description = p.description || '';
  editProjectModal.data.tagsInput = Array.isArray(p.tags) ? p.tags.join(', ') : (p.tags || '');
  editProjectModal.data.demo_url = p.demo_url || '';
  editProjectModal.data.github_url = p.github_url || '';
  editProjectModal.data.category = p.category || 'web';
  editProjectModal.data.image_url = p.image_url || '';
  editProjectImageFile.value = null;
  editProjectModal.open = true;
  document.body.style.overflow = 'hidden';
}

function closeEditProject() {
  editProjectModal.open = false;
  document.body.style.overflow = '';
}

function openEditTip(t: any) {
  editTipModal.id = t.id;
  editTipModal.data.title = t.title;
  editTipModal.data.description = t.description || '';
  editTipModal.data.content = t.content || '';
  editTipModal.data.category = t.category || 'PROGRAMMING';
  editTipModal.data.url = t.url || '';
  editTipModal.data.image_url = t.image_url || '';
  editTipImageFile.value = null;
  editTipModal.open = true;
  document.body.style.overflow = 'hidden';
}

function closeEditTip() {
  editTipModal.open = false;
  document.body.style.overflow = '';
}

// ---- File select handler (supports add & edit) ----
function handleFileSelect(event: Event, type: 'project' | 'tip' | 'editProject' | 'editTip') {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      alert('File is too large! Maximum allowed size is 5MB.');
      target.value = '';
      if (type === 'project') projectImageFile.value = null;
      else if (type === 'tip') tipImageFile.value = null;
      else if (type === 'editProject') editProjectImageFile.value = null;
      else editTipImageFile.value = null;
      return;
    }
    if (type === 'project') projectImageFile.value = file || null;
    else if (type === 'tip') tipImageFile.value = file || null;
    else if (type === 'editProject') editProjectImageFile.value = file || null;
    else editTipImageFile.value = file || null;
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
      target.value = '';
    }
  }
}

async function handleInsertImageToEditArticle(event: Event) {
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
      editTipModal.data.content += `\n\n![Image](${url})\n\n`;
    } catch (error: any) {
      alert('Failed to upload image: ' + error.message);
    } finally {
      target.value = '';
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

// ---- ADD Project ----
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

    projects.value = await getProjects();
    alert('Project saved successfully!');
  } catch (error: any) {
    alert('Error saving project: ' + error.message);
  } finally {
    isUploadingProject.value = false;
  }
}

// ---- UPDATE Project ----
async function handleUpdateProject() {
  if (!editProjectModal.id) return;
  isUpdatingProject.value = true;
  try {
    let imageUrl = editProjectModal.data.image_url;
    if (editProjectImageFile.value) {
      imageUrl = await uploadImage(editProjectImageFile.value);
    }

    const tags = editProjectModal.data.tagsInput
      ? editProjectModal.data.tagsInput.split(',').map(t => t.trim().toUpperCase()).filter(t => t.length > 0)
      : [];

    await updateProject(editProjectModal.id, {
      title: editProjectModal.data.title,
      description: editProjectModal.data.description,
      tags,
      demo_url: editProjectModal.data.demo_url || '#',
      github_url: editProjectModal.data.github_url || '#',
      category: editProjectModal.data.category,
      image_url: imageUrl
    });

    projects.value = await getProjects();
    closeEditProject();
    alert('Project updated successfully!');
  } catch (error: any) {
    alert('Error updating project: ' + error.message);
  } finally {
    isUpdatingProject.value = false;
  }
}

async function handleDeleteProject(id: number | string) {
  if (confirm('Are you sure you want to delete this project?')) {
    await deleteProject(id);
    projects.value = await getProjects();
  }
}

// ---- ADD Tip ----
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

    tips.value = await getTips();
    alert('Tip & Trick saved successfully!');
  } catch (error: any) {
    alert('Error saving tip: ' + error.message);
  } finally {
    isUploadingTip.value = false;
  }
}

// ---- UPDATE Tip ----
async function handleUpdateTip() {
  if (!editTipModal.id) return;
  isUpdatingTip.value = true;
  try {
    let imageUrl = editTipModal.data.image_url;
    if (editTipImageFile.value) {
      imageUrl = await uploadImage(editTipImageFile.value);
    }

    await updateTip(editTipModal.id, {
      title: editTipModal.data.title,
      description: editTipModal.data.description,
      content: editTipModal.data.content,
      category: editTipModal.data.category.toUpperCase(),
      url: editTipModal.data.url || '#',
      image_url: imageUrl
    });

    tips.value = await getTips();
    closeEditTip();
    alert('Tip & Trick updated successfully!');
  } catch (error: any) {
    alert('Error updating tip: ' + error.message);
  } finally {
    isUpdatingTip.value = false;
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
