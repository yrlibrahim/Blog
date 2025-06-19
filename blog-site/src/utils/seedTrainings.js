// src/utils/seedTrainings.js
import { db } from '@/firebase'
import { collection, addDoc } from 'firebase/firestore'

const trainings = [
  {
    title: 'Bireysel Danışmanlık',
    description:
      'Kendinizi daha iyi tanımak ve yaşamınızı daha anlamlı kılmak için bireysel destek alın.',
    imageUrl: 'https://via.placeholder.com/150?text=Bireysel', // geçici
  },
  {
    title: 'Çocuk & Ergen Danışmanlığı',
    description: 'Çocuk ve gençlerin duygusal gelişimini destekleyen özel danışmanlık hizmetleri.',
    imageUrl: 'https://via.placeholder.com/150?text=Çocuk',
  },
  {
    title: 'Online Seanslar',
    description: 'Zaman ve mekandan bağımsız olarak güvenli online görüşmelerle destek alın.',
    imageUrl: 'https://via.placeholder.com/150?text=Online',
  },
  {
    title: 'Eğitim Danışmanlığı',
    description: 'Geleceğini planlarken profesyonel destek alarak güçlü adımlar at.',
    imageUrl: 'https://via.placeholder.com/150?text=Eğitim',
  },
  {
    title: 'Yaratıcı Drama ve Atölye Çalışmaları',
    description:
      'Toplumun ruhsal sağlığı için özel eğitim ve seminerlerle farkındalık oluşturuyoruz.',
    imageUrl: 'https://via.placeholder.com/150?text=Drama',
  },
]

export const seedTrainings = async () => {
  const colRef = collection(db, 'trainings')
  for (const training of trainings) {
    await addDoc(colRef, training)
  }
  console.log('Eğitimler başarıyla eklendi.')
}
