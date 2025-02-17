import { getFirestore, getDocs, collection } from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
  const snapshoot = await getDocs(collection(firestore, collectionName));

  const data = snapshoot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data
}