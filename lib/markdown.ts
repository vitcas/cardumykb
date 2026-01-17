import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export async function getDocBySlug(slug: string[]) {
  const filePath = path.join(CONTENT_DIR, ...slug) + '.md'
  const file = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(file)
  const processed = await remark().use(html).process(content)
  return {
    html: processed.toString(),
    meta: data
  }
}
