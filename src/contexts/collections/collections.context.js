import { createContext } from 'react';
import COLLECTION_DATA from './shop.data';

const CollectionsContext = createContext(COLLECTION_DATA);

export default CollectionsContext;