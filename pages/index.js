import React from 'react'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Content from '../components/Content'

const Home = () => {
  return (
    <Layout>
      <Nav />
      <Hero />
      <Content />
    </Layout>
  )
}

export default Home
