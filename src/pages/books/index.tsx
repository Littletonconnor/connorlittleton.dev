import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Card from '../../components/card/card'
import Layout from '../../components/layout/layout'
import { formatDate } from '../../lib/utils'
import { getAllArticles } from '../../lib/getArticles'

function Article({ article }: { article: any }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/books/${article.slug}`}>{article.title}</Card.Title>
        <Card.Eyebrow className="md:hidden" dateTime={article.date} decorate>
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

function Books({ articles }: Props) {
  return (
    <>
      <Head>
        <title>Books - Connor Littleton</title>
        <meta
          name="description"
          content="All of the books I've read and what I thought about them."
        />
      </Head>
      <Layout.SimpleLayout
        title="Books."
        intro="All of the books I've read and what I thought about them."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.title} article={article} />
            ))}
          </div>
        </div>
      </Layout.SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles('books')).map(
        ({ component, ...meta }) => meta
      ),
    },
  }
}

export default Books
