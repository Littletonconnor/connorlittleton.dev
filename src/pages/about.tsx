import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../components/container/container'
import * as icons from '../components/icons/icons'
import portraitImage from '../images/photos/me.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  children: string
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function About() {
  return (
    <>
      <Head>
        <title>About - Connor Littleton</title>
        <meta
          name="description"
          content="I'm Connor Littleton. I live in Rohnert Park CA where I work as a software engineer."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(max-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Connor Littleton. I live in Rohnert Park California where I
              work as a software engineer.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Hello! My name is Connor Littleton and I am a software engineer
                based in Rohnert Park, California.
              </p>
              <p>
                In my free time, I enjoy both playing and watching baseball. I
                also enjoy reading, and can often be found with my nose buried
                in a good book.
              </p>
              <p>
                I have always had a passion for technology and problem-solving,
                which is what led me to pursue a career in software engineering.
                I am constantly learning and growing in my field, and I love the
                challenge of taking on new projects and finding creative
                solutions to complex problems. Outside of work, I am an avid
                baseball fan and enjoy spending time with my friends and family.
              </p>
              <p>
                Overall, I am a dedicated and hard-working individual who is
                always looking for new opportunities to learn and grow.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/CLittleton1"
                icon={icons.TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://github.com/Littletonconnor"
                icon={icons.GitHubIcon}
                className="mt-4"
              >
                Follow on Github
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/connor-littleton-31bb43135/"
                icon={icons.LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default About
