import { useEffect, useRef } from 'react'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'

import '../styles/tailwind.css'
import '../styles/prism.css'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

function usePrevious(value: string) {
  const ref = useRef<string>('')

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }: AppProps) {
  const previousPathname = usePrevious(router.pathname)

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className={`${inter.variable} relative font-sans`}>
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
