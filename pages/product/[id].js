import React from 'react'

import Layout from '../../components/Layout'
import ProductDetailPage from '../../components/Content/ProductDetails'

import { fakeProduct1, fakeProduct2 } from '../../components/Content'

const ProducItemPage = ({ product }) => {

    return (
        <Layout title={`Temple-demo | ${product.desc}`} >
            <ProductDetailPage product={product} />
        </Layout>
    )
}

export default ProducItemPage


export const getStaticPaths = async () => {
    // const { data: products } = await commerce.products.list()
    // const paths = products.map((product) => ({
    //     params: {
    //         permalink: product.permalink
    //     },
    // }))

    const paths = fakeProduct2.map(item => ({
        params: {
            id: item.id
        }
    }))

    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps = async ({ params }) => {
    // const { permalink } = params
    // const product = await commerce.products.retrieve(permalink, {
    //     type: 'permalink',
    // });

    const { id } = params
    const product = fakeProduct2.find(item => item.id === id)

    return {
        props: {
            product,
        },
    };
}