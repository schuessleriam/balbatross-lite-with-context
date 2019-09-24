import React, { useContext } from 'react';
import CollectionsContext from '../../contexts/collections/collections.context';
import CollectionItem from './../../components/collection-item/collection-item.component';
import './collection.styles.scss';

const CollectionPage = ( { match } ) => {
    const collections = useContext(CollectionsContext);
    const { title, items } = collections[match.params.collectionId];

    return(
        <div className="collection-page">
            <h2 className="title">{title.toUpperCase()}</h2>
            <div className="items">
                {
                    items.map(item => 
                        <CollectionItem key={item.id} item={item} />
                    )
                }
            </div>
        </div>
    );
}


export default CollectionPage;