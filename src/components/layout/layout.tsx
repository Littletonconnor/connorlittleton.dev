import Head from 'next/head'
import { useRouter } from 'next/router'
import { Container } from '../container/container'
import clsx from 'clsx'
import * as icons from '../icons/icons'
import { environment, formatDate } from '../../lib/utils'

function Layout() {
  return null
}

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={clsx(className, 'prose dark:prose-invert')}>{children}</div>
  )
}

Layout.SimpleLayout = function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string
  intro?: string
  children: React.ReactNode
}) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}

Layout.ArticleLayout = function ArticleLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}: {
  children: React.ReactNode
  meta: any
  isRssFeed?: boolean
  previousPathname?: string
}) {
  let router = useRouter()

  if (isRssFeed) {
    return children
  }

  const ogUrl = environment.isDev()
    ? 'http://localhost:3000'
    : 'https://connorlittleton.dev'

  return (
    <>
      <Head>
        <title>{`${meta.title} - Connor Littleton`}</title>
        <meta name="description" content={meta.description} />
        {/* OG Image */}
        <meta name="og:title" content={meta.title}></meta>
        <meta name="og:description" content={meta.description}></meta>
        <meta
          property="og:image"
          content={`${ogUrl}/api/og?title=${meta.title}&author=${meta.author}`}
        />
      </Head>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            {previousPathname && (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back to articles"
                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
              >
                <icons.ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
              </button>
            )}
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {meta.title}
                </h1>
                <time
                  dateTime={meta.date}
                  className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">{formatDate(meta.date)}</span>
                </time>
              </header>
              <Prose className="mt-8">{children}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Layout
