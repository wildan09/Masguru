<template>
  <div class="marquee-wrapper bg-blue border-bottom border-black">
    <div class="marquee">
      <span class="text-mono text-white">#VUEJS #NEUBRUTALISM #WEBDEV #PROGRAMMING #MASGURU #RPL #SMK #LEARNING </span>
      <span class="text-mono text-white">#VUEJS #NEUBRUTALISM #WEBDEV #PROGRAMMING #MASGURU #RPL #SMK #LEARNING </span>
      <span class="text-mono text-white">#VUEJS #NEUBRUTALISM #WEBDEV #PROGRAMMING #MASGURU #RPL #SMK #LEARNING </span>
    </div>
  </div>
</template>

<style scoped>
.marquee-wrapper {
  overflow: hidden;
  white-space: nowrap;
  padding: 12px 0;
  border-bottom: var(--border);
}
.marquee {
  display: inline-block;
  animation: marquee 20s linear infinite;
}
.text-white {
  color: var(--color-white);
  padding: 0 16px;
  font-weight: bold;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.33%); }
}
</style>
