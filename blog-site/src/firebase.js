// src/firebase.js
import { initializeApp } from 'firebase/app'
// 🔽 Firestore'u bu şekilde başlatacağız
import { initializeFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics, isSupported as analyticsSupported } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyB1DjNzoQKGfSifSFYU4jeS_6VvBqT-Nes',
  authDomain: 'blogsite-ffa8a.firebaseapp.com',
  projectId: 'blogsite-ffa8a',
  storageBucket: 'blogsite-ffa8a.appspot.com', // ✅ düzeltilen kısım
  messagingSenderId: '922907500398',
  appId: '1:922907500398:web:80802c4ed9fee23be9ab7f',
  measurementId: 'G-0MNS8GBQFY',
}

const app = initializeApp(firebaseConfig)

// ✅ Ağ/uzantı sorunlarında 400 almamak için
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
  // Eğer hala sorun olursa şunu deneyebilirsin:
  // experimentalForceLongPolling: true,
})

export const storage = getStorage(app)

// Analytics sadece güvenli origin'de ve tarayıcıda çalışır
export let analytics = null
if (typeof window !== 'undefined') {
  analyticsSupported().then((ok) => {
    if (ok) analytics = getAnalytics(app)
  })
}
