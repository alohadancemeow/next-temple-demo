import React from 'react'

import {
    ProductItemImage2,
    ProductItem,
    ProductItemDescription,
} from './styles'

import { Card } from 'antd';
const { Meta } = Card;

const ProductSection2 = ({ item }) => {
    return (

        <ProductItem>
            <Card
                // bordered={false}
                // loading
                size='small'
                hoverable
                cover={
                    <ProductItemImage2
                        src={item.image}
                        alt={item.desc}
                        preview={false}
                    />
                }
            >
                {/* <ProductItemImage2
                    src={item.image}
                    alt={item.desc}
                    preview={false}
                /> */}
                {/* <ProductItemDescription>
                    {item.desc}
                </ProductItemDescription> */}


                <Meta
                    title={item.desc}
                    description='2022, Apr 9'
                />
            </Card>
        </ProductItem>
    )
}

export default ProductSection2