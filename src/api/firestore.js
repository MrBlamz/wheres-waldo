import { db } from '../firebase.config';
import {
  collection,
  getDocs,
  query,
  orderBy,
  addDoc,
  Timestamp,
} from '@firebase/firestore/lite';

export async function fetchLevels() {
  const data = [];
  const q = query(collection(db, 'levels'), orderBy('level', 'asc'));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
  return data;
}

export async function fetchLeaderboard() {
  const data = [];
  const docs = await getDocs(collection(db, 'leaderboard'));
  docs.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
  return data;
}

export async function createDocWithRandomID(collectionName, data) {
  const docRef = await addDoc(collection(db, collectionName), data);
  return docRef;
}

export function createTimestampInMilliseconds() {
  return Timestamp.now().toMillis();
}
