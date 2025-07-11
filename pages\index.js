import Head from 'next/head'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Head>
        <title>Swat Beauty</title>
        <meta name="description" content="Swat Beauty Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Features />
      <Cards />
      <Footer />
    </div>
  )
}

export default Home