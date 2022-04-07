import React from 'react'

import {
    ProductItemImage,
    ProductItem,
    ProductItemDescription,
} from './styles'

const ProductSection1 = ({ item }) => {
    return (
            <ProductItem>
                <ProductItemImage
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

export default ProductSection1