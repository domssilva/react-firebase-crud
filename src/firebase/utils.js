import { analytics } from 'firebase';
import {firestore} from './index';

const COLLECTION_NAME = {
  todo: 'Todo',
  property: 'Property',
};
const todoDocRef = firestore.collection(COLLECTION_NAME.todo);
const propertyDocumentRef = firestore.collection(COLLECTION_NAME.property);

/**
 * @param filename
 */
export const addNewField = (filename) => {
  propertyDocumentRef.add({
    download_url: 'http://link.com',
    contract_file: filename,
  })
}

/**
 * @param filename
 * @param docId
 */
export const updateField = (docId, filename) => {
  propertyDocumentRef.doc(docId).update({
      download_url: 'http://link.com',
      contract_file: filename,
    });
}

/**
 * @param {string} task
 */
export const addTodo = (task) => {
  try {
    todoDocRef.add(task);
    console.log(`new todo added.`);
  } catch (err) {
    console.error(err);
  }
}

export const getTodos = () => {
  todoDocRef.get().then((doc) => {
      if (doc.exists) {
          return doc.data();
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

// analytics

const btnClick = (data) => {
    analytics.log('button_click', data)
}

export const analyticsLogger = {
  btnClick,
}