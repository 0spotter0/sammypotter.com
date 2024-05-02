'use server'

import Link from 'next/link'
import { getPostsMetadata } from './actions'

export type BlogPost = {
  title: string
  subtitle: string
  date: string
  slug: string
  content: string
  thumbnail: string
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
      className='rounded-xl p-4 ring-stone-300/40 transition-all duration-200'
    >
      <div className='mb-2 flex aspect-[16/10] w-[350px] max-w-full items-center justify-center overflow-hidden bg-stone-200 dark:bg-neutral-700'>
        {props.post.thumbnail ? (
          <img
            src={props.post.thumbnail}
            alt={`thumbnail for ${props.post.slug}`}
            className='object-cover'
          />
        ) : (
          <p className='text-secondary'>no image</p>
        )}
      </div>
      <h2 className='text-lg font-medium'>{props.post.title}</h2>
      <h2 className='text-md text-secondary'>{props.post.date}</h2>
    </Link>
  )
}
