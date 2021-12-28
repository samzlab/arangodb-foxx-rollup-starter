import { db } from '@arangodb';

const testCollection = 'test'; //module.context.collectionName('test');

// ensure we have the test collection
if (!db._collection(testCollection)) {
  db._createDocumentCollection(testCollection);
}