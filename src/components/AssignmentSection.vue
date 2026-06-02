<template>
  <section id="assignments" class="bg-yellow section-padding border-bottom border-black">
    <div class="container assignment-container">
      <div class="assignment-info">
        <h2 class="text-h2 mb-md">Submit Assignment</h2>
        <p class="text-body mb-lg">
          Finished your project? Great! Upload your files to Google Drive, make sure the link is public, and paste it here.
        </p>
        <div class="info-card">
          <p class="text-body"><strong>Step 1:</strong> Upload to Drive</p>
          <p class="text-body"><strong>Step 2:</strong> Change link access to "Anyone with the link"</p>
          <p class="text-body"><strong>Step 3:</strong> Fill this form</p>
        </div>
      </div>
      <div class="assignment-form">
        <form @submit.prevent="submitForm">
          <NeuCard :hoverable="false" contentClass="form-card-content">
            <NeuInput v-model="form.name" label="Full Name" placeholder="Your full name..." required />
            <NeuInput v-model="form.class" label="Class" type="select" placeholder="Select your class..." :options="classOptions" required />
            <NeuInput v-model="form.subject" label="Subject" type="select" placeholder="Select subject..." :options="subjectOptions" required />
            <NeuInput v-model="form.assignment" label="Assignment Name" placeholder="e.g. HTML Final Project" required />
            <NeuInput v-model="form.link" label="Google Drive Link" type="url" placeholder="https://drive.google.com/..." required />
            <NeuInput v-model="form.notes" label="Notes (Optional)" type="textarea" placeholder="Any additional notes..." />
            <NeuButton variant="primary" type="submit" class="submit-btn">Submit Assignment</NeuButton>
          </NeuCard>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NeuCard from './ui/NeuCard.vue';
import NeuInput from './ui/NeuInput.vue';
import NeuButton from './ui/NeuButton.vue';

const form = ref({
  name: '',
  class: '',
  subject: '',
  assignment: '',
  link: '',
  notes: ''
});

const classOptions = [
  { label: 'X RPL 1', value: 'x-rpl-1' },
  { label: 'X RPL 2', value: 'x-rpl-2' },
  { label: 'XI RPL 1', value: 'xi-rpl-1' },
  { label: 'XI RPL 2', value: 'xi-rpl-2' },
  { label: 'XII RPL 1', value: 'xii-rpl-1' },
  { label: 'XII RPL 2', value: 'xii-rpl-2' }
];

const subjectOptions = [
  { label: 'Basic Web Programming', value: 'basic-web' },
  { label: 'Database Systems', value: 'database' },
  { label: 'Software Engineering', value: 'rpl' }
];

const submitForm = () => {
  alert('Assignment submitted! (Mocked)');
  form.value = { name: '', class: '', subject: '', assignment: '', link: '', notes: '' };
};
</script>

<style scoped>
.assignment-container {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}
@media (min-width: 1024px) {
  .assignment-container {
    flex-direction: row;
  }
}
.assignment-info {
  flex: 1;
}
.assignment-form {
  flex: 1;
}
.mb-md { margin-bottom: var(--space-md); }
.mb-lg { margin-bottom: var(--space-lg); }
.info-card {
  background-color: var(--color-white);
  border: var(--border);
  padding: 16px;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.submit-btn {
  width: 100%;
  margin-top: var(--space-sm);
}
</style>
