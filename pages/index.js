import Head from 'next/head'
import Layout from '../components/Home/Layout'
import Landing from '../components/Home/Landing'
import News from '../components/Home/News'
import Shop from '../components/Home/Shop'

export default function Home() {
  return (
    <>
      <Head>
        <title>Museo de la Música Puertorriqueña - Home</title>
        <meta name="description" content="Discover the rich musical heritage of Puerto Rico at the Museo de la Música Puertorriqueña. Explore traditional instruments, cultural exhibits, and the vibrant history of Puerto Rican music." />
        <link rel="icon" href="/images/LOGO MUSEO.png" />
      </Head>
      <Layout>
        <Landing />
        <News />
        <Shop />
      </Layout>
    </>
  )
}
