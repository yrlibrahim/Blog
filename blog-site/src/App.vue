<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="fixed flex items-center flex-row px-20 w-full bg-[#fff2eb]/80 backdrop-blur-sm">
    <div class="basis-1/3">
      <img src="./assets/logo2.png" class="" />
    </div>

    <div class="basis-2/3">
      <ul class="flex justify-left gap-10 ps-24 font-mono tracking-wide text-lg">
        <li><router-link to="/">Anasayfa</router-link></li>
        <li><router-link to="/consulting">Danışmanlıklar</router-link></li>
        <li><router-link to="/about">Hakkımda</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
      </ul>
    </div>
  </header>
  <main class="pt-36 px-6 bg-[#fff2eb]">
    <RouterView />
  </main>
</template>
