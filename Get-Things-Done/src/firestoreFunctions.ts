// import { firestore } from './firebase';
// import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

// export const fetchData = async (collectionName: string) => {
//   try {
//     const querySnapshot = await getDocs(collection(firestore, collectionName));
//     const documents = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     return documents;
//   } catch (error) {
//     console.error('Error fetching documents: ', error);
//     return [];
//   }
// };

// export const addData = async (collectionName: string, data: any) => {
//   try {
//     const newDocRef = await addDoc(collection(firestore, collectionName), data);
//     console.log('Document added with ID: ', newDocRef.id);
//   } catch (error) {
//     console.error('Error adding document: ', error);
//   }
// };

// export const updateData = async (collectionName: string, documentId: string, updatedData: any) => {
//   try {
//     const documentRef = doc(firestore, collectionName, documentId);
//     await updateDoc(documentRef, updatedData);
//     console.log('Document updated successfully!');
//   } catch (error) {
//     console.error('Error updating document: ', error);
//   }
// };

// export const deleteData = async (collectionName: string, documentId: string) => {
//   try {
//     const documentRef = doc(firestore, collectionName, documentId);
//     await deleteDoc(documentRef);
//     console.log('Document deleted successfully!');
//   } catch (error) {
//     console.error('Error deleting document: ', error);
//   }
// };