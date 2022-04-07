import React from 'react'

import {
    ProductItemImage2,
    ProductItem,
    ProductItemDescription,
} from './styles'

const ProductSection2 = ({ item }) => {
    return (
        <ProductItem>
            <ProductItemImage2
                src={item.image}
                alt={item.desc}
                preview={false}
            />
            <ProductItemDescription>
                {item.desc}
            </ProductItemDescription>
        </ProductItem>
    )
}

export default ProductSection2