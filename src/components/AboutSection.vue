<template>
  <section id="about" class="bg-white section-padding border-bottom border-black">
    <div class="container about-container">
      <div class="about-text">
        <h2 class="text-h2 mb-md">About Me</h2>
        <p class="text-body">
          Hello! I'm a passionate RPL (Rekayasa Perangkat Lunak) teacher and web developer. 
          I believe in making learning interactive, fun, and up-to-date with industry standards.
          My goal is to bridge the gap between classroom theory and real-world programming.
        </p>
      </div>
      <div class="stat-box-container">
        <div class="stat-box">
          <div class="stat-col border-right">
            <h3 class="stat-num text-blue">5+</h3>
            <p class="stat-label">Years<br>Teaching</p>
          </div>
          <div class="stat-col border-right">
            <h3 class="stat-num text-blue">200+</h3>
            <p class="stat-label">Active<br>Students</p>
          </div>
          <div class="stat-col">
            <h3 class="stat-num text-blue">30+</h3>
            <p class="stat-label">Projects<br>Done</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}
@media (min-width: 1024px) {
  .about-container {
    flex-direction: row;
    align-items: center;
  }
}
.about-text {
  flex: 1;
}
.mb-md { margin-bottom: var(--space-md); }
.stat-box-container {
  flex: 1;
  display: flex;
  justify-content: center;
}
.stat-box {
  display: flex;
  border: var(--border);
  background-color: var(--color-white);
  box-shadow: var(--shadow-sm);
}
.stat-col {
  padding: 16px 24px;
  text-align: center;
}
.border-right {
  border-right: var(--border);
}
.stat-num {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 700;
  color: var(--color-blue);
  margin-bottom: 8px;
}
.stat-label {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 700;
}
</style>
