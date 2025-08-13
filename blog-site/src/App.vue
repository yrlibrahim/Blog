<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="fixed w-full bg-[#fff2eb]/80 backdrop-blur-sm z-50">
    <!-- Header içeriği -->
    <div
      class="flex flex-col md:flex-row items-center justify-around px-4 md:px-20 py-2 md:py-4 gap-2 md:gap-0"
    >
      <!-- Logo (her zaman ortada) -->

      <div class="shrink-0">
        <img src="./assets/logo2.png" class="h-16 md:h-20 mx-auto md:mx-0 object-contain" />
      </div>

      <!-- Menü (her zaman yatay, ortalı) -->
      <ul
        class="flex flex-row flex-wrap justify-left gap-4 md:gap-10 font-mono tracking-wide text-sm sm:text-base md:text-lg text-center"
      >
        <li><RouterLink to="/">Anasayfa</RouterLink></li>
        <li><RouterLink to="/consulting">Danışmanlıklar</RouterLink></li>
        <li><RouterLink to="/about">Hakkımda</RouterLink></li>
        <li><RouterLink to="/blog">Blog</RouterLink></li>
      </ul>
    </div>
  </header>

  <main class="pt-[120px] md:pt-[140px] px-4 md:px-6 bg-[#fff2eb]">
    <RouterView />
  </main>
</template>
