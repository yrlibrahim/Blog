<template>
  <div class="flex items-center justify-center px-6">
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
            <!-- Metin -->
            <span class="transition-all duration-500 pe-8 transform group-hover:translate-x-10">
              Ücretsiz Ön Seans
            </span>

            <!-- Sağdan çıkan daire -->
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

            <!-- Soldan giren daire -->
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
      <div class="md:w-1/2 w-full">
        <img
          src="https://picsum.photos/500/400"
          alt="Danışmanlık görseli"
          class="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>
    </div>
  </div>
  <!--Card Alani-->
  <div class="px-6 py-16 bg-[#fff2eb]">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl md:text-3xl font-semibold mb-10 text-center text-[#1e352f]">
        Uzmanlık Alanlarım
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="card in cards" :key="card.id" class="rounded-lg overflow-hidden">
          <img :src="card.image" :alt="card.title" class="w-full h-48 object-contain" />
          <div class="p-4">
            <h3 class="text-lg font-semibold mb-2">{{ card.title }}</h3>
            <p class="text-gray-600 text-sm">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const cards = [
  {
    id: 1,
    title: 'Bireysel Danışmanlık',
    description:
      'Kendinizi daha iyi tanımak ve yaşamınızı daha anlamlı kılmak için bireysel destek alın.',
    image: '/src/assets/images/bireysel.png',
  },
  {
    id: 2,
    title: 'Aile Danışmanlığı',
    description:
      'Aile içi iletişimi güçlendirmek ve ilişkileri sağlıklı hale getirmek için destek alın.',
    image: 'https://picsum.photos/400/250?random=2',
  },
  {
    id: 3,
    title: 'Çocuk & Ergen Danışmanlığı',
    description: 'Çocuk ve gençlerin duygusal gelişimini destekleyen özel danışmanlık hizmetleri.',
    image: '/src/assets/images/cocuk.png',
  },
  {
    id: 4,
    title: 'Online Seanslar',
    description: 'Zaman ve mekandan bağımsız olarak güvenli online görüşmelerle destek alın.',
    image: '/src/assets/images/online.png',
  },
  {
    id: 5,
    title: 'Eğitim Danışmanlığı',
    description: 'Geleceğini planlarken profesyonel destek alarak güçlü adımlar at.',
    image: '/src/assets/images/egitim.png',
  },
  {
    id: 6,
    title: 'Yaratıcı Drama ve Atölye Çalışmaları ',
    description:
      'Toplumun ruhsal sağlığı için özel eğitim ve seminerlerle farkındalık oluşturuyoruz.',
    image: '/src/assets/images/drama.png',
  },
]
</script>
