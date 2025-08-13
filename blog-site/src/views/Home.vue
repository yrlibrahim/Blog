<template>
  <div class="flex flex-col items-center justify-center px-6 mb-6">
    <div class="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full border-b pb-10">
      <!-- Metin Alanı -->
      <div class="w-full md:w-1/2 space-y-5">
        <h1 class="text-[32px] md:text-[50px] font-serif leading-tight text-left">
          Kendin için bir adım at; bazen biriyle konuşmak her şeyi değiştirir.
        </h1>
        <p class="text-[16px] text-gray-700 text-left">
          Hayat bazen karmaşık, duygular ise yorucu olabilir. Danışmanlık süreci, seni yargılamadan
          dinleyen bir yol arkadaşıyla, kendini keşfetmeni ve iç huzurunu bulmanı sağlar.
        </p>
        <div class="flex md:justify-start justify-center">
          <button
            class="group relative flex items-center gap-4 border border-gray-300 rounded-full px-6 py-3 bg-[#f9f7ef] text-black font-medium transition-all duration-500 overflow-hidden"
          >
            <span class="transition-all duration-500 pe-8 transform group-hover:translate-x-10">
              Ücretsiz Ön Seans
            </span>
            <span
              class="absolute right-2 w-10 h-10 rounded-full bg-[#FFDCDC] flex items-center justify-center transform transition-all duration-500 group-hover:translate-x-12"
            >
              <svg
                class="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
            <span
              class="absolute left-0 w-10 h-10 rounded-full bg-[#FFDCDC] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500"
            >
              <svg
                class="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <!-- Görsel Alanı -->
      <div class="md:w-1/2 w-full lg:ms-16">
        <img
          src="../../public/images/adsız1.png"
          alt="Danışmanlık görseli"
          class="rounded-lg lg:h-136 shadow-lg"
        />
      </div>
    </div>
  </div>

  <!-- Card Alanı -->
  <div class="bg-[#fff2eb] py-12">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-semibold mb-10 text-center text-[#1e352f]">
        Uzmanlık Alanlarım
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div
          v-for="(alan, index) in uzmanliklar"
          :key="index"
          class="rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
        >
          <img :src="alan.image" :alt="alan.title" class="w-full h-64" />
          <div class="p-5">
            <h3 class="text-lg font-semibold mb-2">{{ alan.title }}</h3>
            <p class="text-gray-600 text-sm">{{ alan.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getDocs, collection, orderBy, query } from 'firebase/firestore'
import { db } from '@/firebase'

const uzmanliklar = ref([])

// Başlığa göre görsel eşleştirme
const imageMap = {
  'bireysel danışmanlık': 'bireysel.png',
  'çocuk danışmanlığı': 'cocuk.png',
  'yaratıcı drama ve atölye çalışmaları': 'drama.png',
  'eğitim danışmanlığı': 'egitim.png',
  'online danışmanlık': 'online.png',
}

onMounted(async () => {
  const q = query(collection(db, 'uzmanliklar'))
  const snap = await getDocs(q)
  uzmanliklar.value = snap.docs.map((doc) => {
    const data = doc.data()
    return {
      ...data,
      image: `/images/${imageMap[data.title.toLowerCase()] || 'bireysel.png'}`,
    }
  })
})
</script>
