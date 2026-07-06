
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-blue-500 text-white p-8 text-4xl">
      <Head>
        <title>Home</title>
      </Head>
      <div className="text-3xl font-bold">Halo world</div>
    </div>
  )
}
