import React from 'react'

import {
    ProductItemImage,
    ProductItem,
    ProductItemDescription,
} from './styles'

import { Card } from 'antd';
const { Meta } = Card;

const ProductSection1 = ({ item }) => {
    return (
        <ProductItem>
            {/* <ProductItemImage
                    src={item.image}
                    alt={item.desc}
                    preview={false}
                />
                <ProductItemDescription>
                    {item.desc}
                </ProductItemDescription> */}

            <Card
                hoverable
                cover={
                    <ProductItemImage
                        src={item.image}
                        alt={item.desc}
                        preview={false}
                    />
                }
            >
                <Meta
                    title={item.desc}
                    description='2022, Apr 9'
                />
            </Card>
        </ProductItem>
    )
}

export default ProductSection1