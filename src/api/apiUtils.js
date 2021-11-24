import { db } from '../firebase.config';
import { collection, getDocs, query, orderBy } from '@firebase/firestore/lite';

export async function fetchLevels() {
  const data = [];
  const q = query(collection(db, 'levels'), orderBy('level', 'asc'));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
  return data;
}
