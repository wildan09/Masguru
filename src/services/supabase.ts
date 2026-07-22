import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// Seed data
const defaultProjects = [
  {
    id: 1,
    title: 'Student Portal API',
    description: 'A robust RESTful API built for managing student records, grades, and attendance. Includes JWT authentication and role-based access control.',
    tags: ['LARAVEL', 'MYSQL', 'REST API'],
    demo_url: '#',
    github_url: '#',
    category: 'web'
  },
  {
    id: 2,
    title: 'Interactive CSS Playground',
    description: 'A browser-based tool to help students visually understand CSS Flexbox and Grid layouts. Real-time code generation and visual feedback.',
    tags: ['REACT', 'TAILWIND', 'ZUSTAND'],
    demo_url: '#',
    github_url: '#',
    category: 'web'
  }
];

const defaultTips = [
  {
    id: 1,
    title: 'How to Install Git on Windows',
    description: 'A quick step-by-step guide to get Git running on your Windows machine in under 5 minutes.',
    category: 'PROGRAMMING',
    url: '#'
  },
  {
    id: 2,
    title: 'Setup Tailwind CSS v4 in Vite',
    description: 'Integrate the lightning-fast Tailwind CSS v4 engine inside your Vite workspace using the official Vite plugin.',
    category: 'PROGRAMMING',
    url: '#'
  },
  {
    id: 3,
    title: 'Dynamic Routing in Vue Router',
    description: 'Learn how to handle param-based pages and route guards dynamically in Vue.js applications.',
    category: 'PROGRAMMING',
    url: '#'
  }
];

// Initialize local storage seeds if empty
if (!localStorage.getItem('portofolio_projects')) {
  localStorage.setItem('portofolio_projects', JSON.stringify(defaultProjects));
}
if (!localStorage.getItem('portofolio_tips')) {
  localStorage.setItem('portofolio_tips', JSON.stringify(defaultTips));
}
if (!localStorage.getItem('portofolio_submissions')) {
  localStorage.setItem('portofolio_submissions', JSON.stringify([]));
}

let supabase: SupabaseClient | null = null;

export function initSupabase() {
  const envUrl = import.meta.env.VITE_SUPABASE_URL;
  const envKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  const localUrl = localStorage.getItem('supabase_url');
  const localKey = localStorage.getItem('supabase_anon_key');

  const url = envUrl || localUrl;
  const key = envKey || localKey;

  if (url && key) {
    try {
      supabase = createClient(url, key);
    } catch (e) {
      console.error('Failed to initialize Supabase client:', e);
      supabase = null;
    }
  } else {
    supabase = null;
  }
}

// Run immediately
initSupabase();

export function isSupabaseConfigured(): boolean {
  return supabase !== null;
}

export function getSupabaseKeys() {
  return {
    url: import.meta.env.VITE_SUPABASE_URL || localStorage.getItem('supabase_url') || '',
    key: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || localStorage.getItem('supabase_anon_key') || ''
  };
}

export function saveSupabaseConfig(url: string, key: string) {
  if (url) localStorage.setItem('supabase_url', url);
  else localStorage.removeItem('supabase_url');
  
  if (key) localStorage.setItem('supabase_anon_key', key);
  else localStorage.removeItem('supabase_anon_key');

  initSupabase();
}

export function getLookerStudioUrl(): string {
  return localStorage.getItem('looker_studio_url') || '';
}

export function saveLookerStudioUrl(url: string) {
  localStorage.setItem('looker_studio_url', url);
}

// --- SESSION MANAGEMENT ---
export const SESSION_TIMEOUT_MS = 3 * 60 * 60 * 1000; // 3 jam
export const SESSION_WARN_BEFORE_MS = 5 * 60 * 1000;  // warning 5 menit sebelum expire

export function updateActivity() {
  localStorage.setItem('last_activity', Date.now().toString());
}

export function getLastActivity(): number | null {
  const val = localStorage.getItem('last_activity');
  return val ? parseInt(val, 10) : null;
}

export function getSessionRemainingMs(): number {
  const last = getLastActivity();
  if (!last) return 0;
  const elapsed = Date.now() - last;
  return Math.max(0, SESSION_TIMEOUT_MS - elapsed);
}

export function clearActivity() {
  localStorage.removeItem('last_activity');
}

// --- AUTHENTICATION SERVICE ---
export async function login(email: string, pass: string) {
  if (supabase) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password: pass });
    if (error) throw error;
    updateActivity();
    return data;
  } else {
    // Mock authentication for Local Fallback mode
    if (email === 'admin@admin.com' && pass === 'admin') {
      localStorage.setItem('mock_auth_session', 'true');
      updateActivity();
      return { user: { email } };
    }
    throw new Error('Invalid mock credentials. Try admin@admin.com / admin');
  }
}

export async function logout() {
  if (supabase) {
    await supabase.auth.signOut();
  } else {
    localStorage.removeItem('mock_auth_session');
  }
  clearActivity();
}

export async function getSession() {
  if (supabase) {
    const { data } = await supabase.auth.getSession();
    return data.session;
  } else {
    return localStorage.getItem('mock_auth_session') ? { user: { email: 'admin@admin.com' } } : null;
  }
}

export function onAuthStateChange(callback: (session: any) => void) {
  if (supabase) {
    supabase.auth.onAuthStateChange((_event, session) => callback(session));
  }
}

// --- STORAGE SERVICE ---
export async function uploadImage(file: File): Promise<string> {
  // Validate file size (max 5MB)
  if (file.size > 5 * 1024 * 1024) {
    throw new Error('File size exceeds 5MB limit.');
  }

  if (supabase) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('portfolio_images')
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

    const { data } = supabase.storage
      .from('portfolio_images')
      .getPublicUrl(filePath);

    return data.publicUrl;
  } else {
    // Local Fallback: Convert to Base64 Data URL
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }
}

// --- PROJECTS SERVICE ---
const _projectsCache: { data: any[] | null; ts: number } = { data: null, ts: 0 };
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 menit

export async function getProjects() {
  // Jika cache masih valid, langsung return
  if (_projectsCache.data && Date.now() - _projectsCache.ts < CACHE_TTL_MS) {
    return _projectsCache.data;
  }
  if (supabase) {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error && data) {
      _projectsCache.data = data;
      _projectsCache.ts = Date.now();
      return data;
    }
    console.error('Supabase getProjects error, falling back to LocalStorage:', error);
  }
  const local = JSON.parse(localStorage.getItem('portofolio_projects') || '[]');
  _projectsCache.data = local;
  _projectsCache.ts = Date.now();
  return local;
}

export async function addProject(project: { title: string; description: string; tags: string[]; demo_url: string; github_url: string; category: string; image_url?: string }) {
  _projectsCache.data = null; // invalidate cache
  if (supabase) {
    const { data, error } = await supabase
      .from('projects')
      .insert([project])
      .select();
    if (!error) return data;
    console.error('Supabase addProject error, saving to LocalStorage instead:', error);
  }

  const local = JSON.parse(localStorage.getItem('portofolio_projects') || '[]');
  const newProj = { ...project, id: Date.now() };
  local.unshift(newProj);
  localStorage.setItem('portofolio_projects', JSON.stringify(local));
  return [newProj];
}

export async function deleteProject(id: number | string) {
  _projectsCache.data = null; // invalidate cache
  if (supabase) {
    const { error } = await supabase.from('projects').delete().eq('id', id);
    if (!error) return true;
    console.error('Supabase deleteProject error:', error);
  }

  const local = JSON.parse(localStorage.getItem('portofolio_projects') || '[]');
  const updated = local.filter((p: any) => p.id !== id);
  localStorage.setItem('portofolio_projects', JSON.stringify(updated));
  return true;
}

export async function updateProject(id: number | string, project: { title: string; description: string; tags: string[]; demo_url: string; github_url: string; category: string; image_url?: string }) {
  _projectsCache.data = null; // invalidate cache
  if (supabase) {
    const { data, error } = await supabase
      .from('projects')
      .update(project)
      .eq('id', id)
      .select();
    if (!error) return data;
    console.error('Supabase updateProject error, updating LocalStorage instead:', error);
  }

  const local = JSON.parse(localStorage.getItem('portofolio_projects') || '[]');
  const idx = local.findIndex((p: any) => p.id.toString() === id.toString());
  if (idx !== -1) local[idx] = { ...local[idx], ...project };
  localStorage.setItem('portofolio_projects', JSON.stringify(local));
  return [local[idx]];
}

// --- TIPS SERVICE ---
const _tipsCache: { data: any[] | null; ts: number } = { data: null, ts: 0 };

export async function getTips() {
  // Jika cache masih valid, langsung return
  if (_tipsCache.data && Date.now() - _tipsCache.ts < CACHE_TTL_MS) {
    return _tipsCache.data;
  }
  if (supabase) {
    const { data, error } = await supabase
      .from('tips')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error && data) {
      _tipsCache.data = data;
      _tipsCache.ts = Date.now();
      return data;
    }
    console.error('Supabase getTips error, falling back to LocalStorage:', error);
  }
  const local = JSON.parse(localStorage.getItem('portofolio_tips') || '[]');
  _tipsCache.data = local;
  _tipsCache.ts = Date.now();
  return local;
}

export async function addTip(tip: { title: string; description: string; content?: string; category: string; url: string; image_url?: string }) {
  _tipsCache.data = null; // invalidate cache
  if (supabase) {
    const { data, error } = await supabase
      .from('tips')
      .insert([tip])
      .select();
    if (!error) return data;
    console.error('Supabase addTip error, saving to LocalStorage instead:', error);
  }

  const local = JSON.parse(localStorage.getItem('portofolio_tips') || '[]');
  const newTip = { ...tip, id: Date.now() };
  local.unshift(newTip);
  localStorage.setItem('portofolio_tips', JSON.stringify(local));
  return [newTip];
}

export async function deleteTip(id: number | string) {
  _tipsCache.data = null; // invalidate cache
  if (supabase) {
    const { error } = await supabase.from('tips').delete().eq('id', id);
    if (!error) return true;
    console.error('Supabase deleteTip error:', error);
  }

  const local = JSON.parse(localStorage.getItem('portofolio_tips') || '[]');
  const updated = local.filter((t: any) => t.id !== id);
  localStorage.setItem('portofolio_tips', JSON.stringify(updated));
  return true;
}

export async function updateTip(id: number | string, tip: { title: string; description: string; content?: string; category: string; url: string; image_url?: string }) {
  _tipsCache.data = null; // invalidate cache
  if (supabase) {
    const { data, error } = await supabase
      .from('tips')
      .update(tip)
      .eq('id', id)
      .select();
    if (!error) return data;
    console.error('Supabase updateTip error, updating LocalStorage instead:', error);
  }

  const local = JSON.parse(localStorage.getItem('portofolio_tips') || '[]');
  const idx = local.findIndex((t: any) => t.id.toString() === id.toString());
  if (idx !== -1) local[idx] = { ...local[idx], ...tip };
  localStorage.setItem('portofolio_tips', JSON.stringify(local));
  return [local[idx]];
}

export async function getTipById(id: number | string) {
  if (supabase) {
    const { data, error } = await supabase.from('tips').select('*').eq('id', id).single();
    if (!error && data) return data;
    console.error('Supabase getTipById error:', error);
  }
  const local = JSON.parse(localStorage.getItem('portofolio_tips') || '[]');
  return local.find((t: any) => t.id.toString() === id.toString()) || null;
}

// --- SUBMISSIONS SERVICE ---
export async function getSubmissions() {
  if (supabase) {
    const { data, error } = await supabase
      .from('submissions')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error && data) return data;
    console.error('Supabase getSubmissions error:', error);
  }
  return JSON.parse(localStorage.getItem('portofolio_submissions') || '[]');
}

export async function submitAssignment(submission: { academic_year: string; class_name: string; student_name: string; google_drive_link: string; notes: string }) {
  if (supabase) {
    const { data, error } = await supabase
      .from('submissions')
      .insert([submission])
      .select();
    if (!error) return data;
    console.error('Supabase submitAssignment error, saving to LocalStorage instead:', error);
  }

  const local = JSON.parse(localStorage.getItem('portofolio_submissions') || '[]');
  const newSub = { ...submission, id: Date.now(), created_at: new Date().toISOString() };
  local.unshift(newSub);
  localStorage.setItem('portofolio_submissions', JSON.stringify(local));
  return [newSub];
}
