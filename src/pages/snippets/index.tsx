import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Card from '../../components/card/card'
import { formatDate } from '../../lib/utils'
import { getAllArticles } from '../../lib/getArticles'

function Article({ article }: { article: any }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/snippets/${article.slug}`}>
          {article.title}
        </Card.Title>
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

function Articles({ articles }: Props) {
  return (
    <>
      <Head>
        <title>Snippets - Connor Littleton</title>
        <meta
          name="description"
          content="A list of all the useful snippets i've gathered over the years"
        />
      </Head>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles('snippets')).map(
        ({ component, ...meta }) => meta
      ),
    },
  }
}

export default Articles
