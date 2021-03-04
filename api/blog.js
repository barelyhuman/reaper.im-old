import { createFile } from 'lib/github'
import { isAuthenticated } from 'lib/isAuthenticated'

const handler = async (req, res) => {
  try {
    switch (req.method) {
      case 'POST': {
        const file = {
          filePath: `posts/${getFileName(req.body.date, req.body.title)}`,
          fileContent: `---  
title: ${req.body.title}  
published: true  
date: ${req.body.date}  
---\n

${req.body.body}
          `
        }
        const repo = {
          repoName: 'reaper.im'
        }
        await createFile(file, repo)
        res.send({ success: true })
      }
      default:
        {
          res.statusCode = 404
          res.end()
        }
        return
    }
  } catch (err) {
    console.error(err)
    res.statusCode = 500
    return res.json({
      stack: String(err),
      message: 'Oops! Something went wrong.'
    })
  }
}

export default isAuthenticated(handler)

function getFileName (date, title) {
  const instance = new Date(date)
  const month = instance.getMonth() + 1
  const year = instance.getFullYear()
  const day = instance.getDay()
  const monthPadded = month < 10 ? `0${month}` : month
  const dayPadded = day < 10 ? `0${day}` : day
  const normalizedTitle = title.split(' ').join('-')
  return `${year}${monthPadded}${dayPadded}-${normalizedTitle}.md`
}
