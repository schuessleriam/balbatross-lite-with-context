import React, { useContext } from 'react';
import CollectionsContext from './../../contexts/collections/collections.context.js';
import CollectionPreview from './../collection-preview/collection-preview.component';
import './collection-overview.styles.scss';

const CollectionsOverview = ( ) => {
    let collections = useContext(CollectionsContext); 
    collections = Object.keys(collections).map(key => collections[key]);
    return (
        <div className="collections-overview">
            {
                collections.map( ({id, ...remainingProps}) => (
                    <CollectionPreview key={id} {...remainingProps} />
                ))
            }
        </div>
    );
}

export default CollectionsOverview;