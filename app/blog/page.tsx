'use server'

import { readdirSync, readFileSync } from 'fs'
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

export default async function Blog() {
  const posts = await getPostsMetadata()

  return (
    <div className='flex w-full flex-wrap justify-center gap-8 px-20'>
      {posts.map((post: BlogPost) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </div>
  )
}

const PostPreview = (props: { post: BlogPost }) => {
  return (
    <Link
      href={`/blog/${props.post.slug}`}
      className='rounded-xl p-4 ring-stone-300/40 transition-all duration-200 hover:bg-stone-200/40 hover:ring-[1px]'
    >
      <div className='mb-2 flex aspect-[16/10] w-[350px] max-w-full items-center justify-center overflow-hidden bg-stone-200'>
        {props.post.thumbnail ? (
          <img
            src={props.post.thumbnail}
            alt={`thumbnail for ${props.post.slug}`}
            className='object-cover'
          />
        ) : (
          <p className='text-medium'>no image</p>
        )}
      </div>
      <h2 className='text-lg font-medium'>{props.post.title}</h2>
      <h2 className='text-md text-medium'>{props.post.date}</h2>
    </Link>
  )
}
