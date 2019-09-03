import React, {Component} from 'react';
import SHOPDATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
    constructor(props) {

        super(props);

        this.state = {
            collections: SHOPDATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className="shop-page">
                {
                    collections.map( ({id, ...remainingProps}) => (
                        <CollectionPreview key={id} {...remainingProps} />
                    ))
                }
            </div>
        );
    }

}

export default ShopPage;