'use server'

import { readdir, readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'

export type BlogPost = {
  title: string
  subtitle: string
  date: string
  slug: string
  content: string
  thumbnail: string
}

export async function getPostMetadata(
  fileName: string
): Promise<BlogPost | null> {
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
}

async function getPostsMetadata(): Promise<BlogPost[]> {
  const markdownFiles = readdirSync('posts/').filter((fileName) =>
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

export const Blog = async () => {
  const posts = await getPostsMetadata()

  return (
    <div className='flex w-full flex-wrap justify-center gap-8 px-20'>
      {posts.map((post: BlogPost) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <div className='aspect-[16/10] w-[350px] max-w-full overflow-hidden'>
            <img
              src={post.thumbnail}
              alt={`thumbnail for ${post.slug}`}
              className='object-cover'
            />
          </div>
          <h2 className='text-lg font-medium'>{post.title}</h2>
          <h2 className='text-md text-neutral-500'>{post.date}</h2>
        </Link>
      ))}
    </div>
  )
}
