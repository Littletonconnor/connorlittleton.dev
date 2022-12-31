import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/card/card'
import Layout from '../components/layout/layout'
import { PROJECTS } from '../lib/constants'
import * as icons from '../components/icons/icons'
import clsx from 'clsx'

function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Connor Littleton</title>
        <meta name="description" content="Projects I've recently worked on." />
      </Head>
      <Layout.SimpleLayout
        title="Projects I've recently worked on."
        intro="I've worked on lots of different little projects over the years. But these are ones i'm most proud of."
      >
        <ul
          role="list"
          className="gapy-y-16 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3"
        >
          {PROJECTS.map((project) => (
            <Card as="li" key={project.name}>
              <div
                className={clsx(
                  'relative z-10 flex h-12 w-12 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0',
                  project.gradient
                )}
              />
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <icons.LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </Layout.SimpleLayout>
    </>
  )
}

export default Projects
