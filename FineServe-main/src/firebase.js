import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  orderBy,
  deleteDoc,
  updateDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

let app;
let db;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (error) {
  console.warn("Firebase Init Error:", error.message);
}

// --- Contact Submissions ---
export async function addContactSubmission(data) {
  if (!db) return;
  const col = collection(db, 'contacts');
  return await addDoc(col, { ...data, createdAt: new Date().toISOString() });
}

export async function getContactSubmissions() {
  if (!db) return [];
  const col = collection(db, 'contacts');
  const q = query(col, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}

// --- Other exports (Articles, Referrals) ---
export async function addArticle(article) {
  if (!db) throw new Error("Firestore not initialized");
  const col = collection(db, 'articles');
  return await addDoc(col, { ...article, createdAt: new Date().toISOString() });
}

export async function getArticles() {
  if (!db) return [];
  const col = collection(db, 'articles');
  const q = query(col, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function getArticleById(id) {
  if (!db) return null;
  try {
    const docRef = doc(db, 'articles', id);
    const snap = await getDoc(docRef);
    if (snap.exists()) return { id: snap.id, ...snap.data() };
    return null;
  } catch (error) { return null; }
}

export async function addReferralSubmission(data) {
  if (!db) return;
  const col = collection(db, 'referrals');
  return await addDoc(col, { ...data, createdAt: new Date().toISOString() });
}

export async function getReferralSubmissions() {
  if (!db) return [];
  const col = collection(db, 'referrals');
  const q = query(col, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}

export default db;