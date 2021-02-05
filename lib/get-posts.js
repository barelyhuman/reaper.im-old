import { promises as fs } from 'fs'
import grayMatter from 'gray-matter'
import serializeDate from 'lib/serialize-date'
import path from 'path'
import marked from 'marked'
import prism from 'prismjs'
import loadLanguages from 'prismjs/components/'
import getDate from 'lib/get-date'

export default async () => {
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
        date: getDate(data.date),
        slug: slug
      }),
      content: processContent(content)
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
}

function processContent (content) {
  loadLanguages([
    'javascript',
    'jsx',
    'css',
    'markup',
    'bash',
    'json',
    'plsql'
  ])

  marked.use({
    renderer: {
      listitem (text, task) {
        if (task) {
          return '<li class="checkbox-list">' + text + '</li>\n'
        }
        // use original renderer
        return false
      },
      checkbox (checked) {
        return `<input type="checkbox" ${checked ? 'checked' : ''}></input> `
      }
    }
  })

  marked.setOptions({
    highlight: function (code, lang) {
      if (prism.languages[lang]) {
        return prism.highlight(code, prism.languages[lang], lang)
      } else {
        return code
      }
    }
  })

  return marked.parse(content)
}
