import glob from 'fast-glob'
import path from 'path'

async function importArticle(filename: string, relativePath: string) {
  const { meta, default: component } = await import(
    `../pages/${relativePath}/${filename}`
  )

  return {
    slug: filename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles(relativePath: string) {
  const filenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), `src/pages/${relativePath}`),
  })

  const articles = await Promise.all(
    filenames.map((f) => importArticle(f, relativePath))
  )

  return articles.sort(
    (a, z) => new Date(z.date).getTime() - new Date(a.date).getTime()
  )
}
