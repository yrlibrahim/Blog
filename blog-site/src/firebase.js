// src/firebase.js

// Gerekli modüller
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics } from 'firebase/analytics'

// Firebase konfigürasyonu
const firebaseConfig = {
  apiKey: 'AIzaSyCNs1JxAzvdpTJI99vPw13s6G1mJN9CEkc',
  authDomain: 'danismanlik-websitesi.firebaseapp.com',
  projectId: 'danismanlik-websitesi',
  storageBucket: 'danismanlik-websitesi.appspot.com',
  messagingSenderId: '1012610996029',
  appId: '1:1012610996029:web:787722f9e25443a1d31754',
  measurementId: 'G-P3W2PEGR64',
}

// Uygulamayı başlat
const app = initializeApp(firebaseConfig)

// Gerekli servisleri al
const db = getFirestore(app)
const storage = getStorage(app)
const analytics = getAnalytics(app)

// Export et
export { db, storage }
