<script setup>
import TheFooter from './components/layout/TheFooter.vue'
import TheNavbar from './components/layout/TheNavbar.vue'
import TheSidebar from './components/layout/TheSidebar.vue'
</script>

<template>
  <div class="app-layout">
    <TheNavbar />

    <div class="app-body">
      <TheSidebar />

      <main class="app-content">
        <RouterView />
      </main>
    </div>

    <TheFooter />
  </div>
</template>
