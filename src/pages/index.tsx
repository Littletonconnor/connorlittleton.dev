import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { Container } from '../components/container/container'
import * as icons from '../components/icons/icons'
import image1 from '../images/photos/image-1.jpg'
import image2 from '../images/photos/image-2.jpg'
import image3 from '../images/photos/image-3.jpg'
import image4 from '../images/photos/image-4.jpg'
import image5 from '../images/photos/image-5.jpg'
import clsx from 'clsx'
import { getAllArticles } from '../lib/getArticles'
import { formatDate } from '../lib/utils'
import { InferGetStaticPropsType } from 'next'
import Card from '../components/card/card'
import { Button } from '../components/button/button'
import { RESUME } from '../lib/constants'
import { resolve } from 'path'

function SocialLink({
  icon: Icon,
  href,
  ...props
}: {
  icon: any
  href: string
  props?: any
}) {
  return (
    <Link className="group -m-1 p-1" href={href} {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Photos() {
  const rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ]

  return (
    <div className="mt-12 sm:mt-16">
      <div className="flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, index) => (
          <div
            key={index}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[index]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function Article({ article }: { article: any }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <icons.MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Resume() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <icons.BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {RESUME.map((job: any, index) => (
          <li key={index} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={job.logo}
                alt=""
                className={job.className}
                unoptimized
              />
            </div>
            <dl>
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {job.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {job.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${job.start.label ?? job.start} until ${
                  job.end.label ?? job.end
                }`}
              >
                <time dateTime={job.start.dateTime ?? job.start}>
                  {job.start.label ?? job.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={job.end.dateTime ?? job.end}>
                  {job.end.label ?? job.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <icons.ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

function Home({ articles }: Props) {
  return (
    <>
      <Head>
        <title>Connor Littleton - Software Engineer.</title>
        <meta
          name="description"
          content="I'm Connor Littleton, a software engineer based in Rohnert Park CA. Welcome to my slice of the internet."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Passionate Software Engineer and avid reader of all things.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hi, my name is Connor and I am a software engineer based in Rohnert
            Park, California. I am currently employed at Wealthfront as a
            software engineer on the growth team, where I am responsible for
            developing tools to assist our clients in increasing their wealth.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/CLittleton1"
              icon={icons.TwitterIcon}
            />
            <SocialLink
              href="https://github.com/Littletonconnor"
              icon={icons.GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/connor-littleton-31bb43135/"
              icon={icons.LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles('articles'))
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}

export default Home
