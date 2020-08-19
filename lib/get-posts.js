import { promises as fs } from 'fs'
import grayMatter from 'gray-matter'
import serializeDate from 'lib/serialize-date'
import path from 'path'

export default async () => {
  try {
    const postRoot = path.join(process.cwd(), 'posts')
    const files = await fs.readdir(postRoot)
    const fileContent = await Promise.all(
      files.map((file) => {
        return fs.readFile(path.join(postRoot, file)).then((data) => {
          return {
            slug: file.slice(0, -3),
            fileContent: data
          }
        })
      })
    )

    const contentData = fileContent.map(({ slug, fileContent }) => {
      const { data, content } = grayMatter(fileContent)
      return {
        meta: Object.assign({}, data, {
          date: new Date(data.date).toISOString(),
          slug: slug
        }),
        content: content
      }
    })

    const posts = contentData
      .reduce((acc, postItem) => {
        if (!postItem.meta.published) {
          return acc
        }
        return acc.concat(postItem)
      }, [])
      .sort((a, b) => {
        return (
          serializeDate(b.meta.date).getTime() -
          serializeDate(a.meta.date).getTime()
        )
      })

    return posts
  } catch (err) {
    throw err
  }
}
