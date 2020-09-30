import {firestore} from './index';

const COLLECTION_NAME = 'Property';
const propertyDocumentRef = firestore.collection(COLLECTION_NAME);

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
