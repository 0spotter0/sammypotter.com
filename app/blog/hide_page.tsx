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
    <div className='mx-auto flex w-full flex-col gap-2 px-20 px-5 pb-20 sm:w-fit sm:pt-10 md:max-w-[70vw] lg:max-w-[50vw]'>
      {posts.map((post: BlogPost) => (
        <div key={post.slug} className='group'>
          <PostPreview key={post.slug} post={post} />
          <div className='h-px w-full border-0 bg-stone-200 group-last:hidden dark:bg-neutral-600' />
        </div>
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
      <div className='flex flex-col flex-col-reverse gap-3 sm:flex-row sm:gap-8'>
        <h2 className='text-secondary w-24 shrink-0 grow-0 font-mono text-xs sm:w-32 sm:text-base'>
          {props.post.date}
        </h2>
        <h2 className='line-clamp-2 overflow-hidden text-ellipsis font-medium dark:font-normal'>
          {props.post.title}
        </h2>
      </div>
    </Link>
  )
}
