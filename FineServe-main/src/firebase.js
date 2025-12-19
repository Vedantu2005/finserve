// Firebase initialization and helper functions
// Configure these environment variables in a .env file at project root (Vite uses VITE_ prefix):
// VITE_FIREBASE_API_KEY, VITE_FIREBASE_AUTH_DOMAIN, VITE_FIREBASE_PROJECT_ID,
// VITE_FIREBASE_STORAGE_BUCKET, VITE_FIREBASE_MESSAGING_SENDER_ID, VITE_FIREBASE_APP_ID

import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  orderBy,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

let db = null

try {
  const app = initializeApp(firebaseConfig)
  db = getFirestore(app)
} catch (err) {
  // If firebase isn't configured, avoid crashing—functions will fallback
  console.warn('Firebase initialization failed (env may be missing):', err.message)
}

export async function addArticle(article) {
  if (!db) throw new Error('Firestore not initialized')
  const col = collection(db, 'articles')
  const docRef = await addDoc(col, {
    ...article,
    createdAt: new Date().toISOString(),
  })
  return { id: docRef.id }
}

export async function getArticles() {
  if (!db) return []
  const col = collection(db, 'articles')
  const q = query(col, orderBy('createdAt', 'desc'))
  const snapshot = await getDocs(q)
  const results = []
  snapshot.forEach((doc) => results.push({ id: doc.id, ...doc.data() }))
  return results
}

export async function getArticleById(id) {
  if (!db) return null
  try {
    const ref = doc(db, 'articles', id)
    const snap = await getDoc(ref)
    if (!snap.exists()) return null
    return { id: snap.id, ...snap.data() }
  } catch (err) {
    console.warn('getArticleById error:', err.message)
    return null
  }
}

export default db
