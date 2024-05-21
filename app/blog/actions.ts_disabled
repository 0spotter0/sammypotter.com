'use server'

import { readFileSync, readdirSync } from 'fs'
import { BlogPost } from './page'
import matter from 'gray-matter'

export async function getPostMetadata(
  fileName: string
): Promise<BlogPost | null> {
  try {
    const slug = fileName.replace('.md', '')

    const rawFile = readFileSync(`posts/${slug}.md`, 'utf-8')

    if (!rawFile) return null

    const parsedMetadata = matter(rawFile)

    return {
      title: parsedMetadata.data.title,
      subtitle: parsedMetadata.data.subtitle,
      date: parsedMetadata.data.date,
      slug: slug,
      content: parsedMetadata.content,
      thumbnail: parsedMetadata.data.thumbnail,
    }
  } catch (error) {
    return null
  }
}

export async function getPostsMetadata(): Promise<BlogPost[]> {
  const markdownFiles = readdirSync('posts/').filter((fileName: string) =>
    fileName.endsWith('.md')
  )

  if (!markdownFiles || markdownFiles.length === 0) return []

  const postsMetadata: (BlogPost | null)[] = await Promise.all(
    markdownFiles.map(
      (fileName: string): Promise<BlogPost | null> => getPostMetadata(fileName)
    )
  )

  const nullFiltered = postsMetadata.filter(
    (item): item is BlogPost => item !== null
  )

  return nullFiltered
}
