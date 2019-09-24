import React from 'react';
import { cartContext } from './../../providers/cart/cart.provider';
import CustomButton from "./../custom-button/custom-button.component";
import './collection-item.styles.scss';

const CollectionItem = ({item}) => {
    const { addItem } = React.useContext(cartContext);
    const { name, price, imageUrl } = item    
        return(
            <div className="collection-item">

                <div 
                    className="image"
                    style={{
                        backgroundImage: `url(${imageUrl})`
                    }}
                />
                <div className="item-footer">
                    <span>{name}</span>
                    <span>{price}</span>
                </div>
                <CustomButton inverted onClick={ () => addItem(item)}>ADD TO CART</CustomButton>

            </div>
        );
}

export default CollectionItem;