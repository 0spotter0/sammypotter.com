'use server'

import Markdown from 'markdown-to-jsx'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { IoArrowBack } from 'react-icons/io5'
import { getPostMetadata, getPostsMetadata } from '../actions'
import { BlogPost } from '../page'

type PostProps = {
  params: {
    postSlug: string
  }
}

export const generateStaticParams = async () => {
  const posts = await getPostsMetadata()
  return posts.map((post: BlogPost) => ({ postSlug: post.slug }))
}

export default async function Post(props: PostProps) {
  const postMetadata: BlogPost | null = await getPostMetadata(
    `${props.params.postSlug}.md`
  )

  if (!postMetadata) return notFound()

  return (
    <div className='flex h-svh w-svw flex-col items-center gap-6 overflow-hidden overflow-y-auto pb-20 sm:gap-12 sm:pt-10'>
      <Link
        href='/blog'
        className='text-link flex items-center gap-2 underline'
      >
        <IoArrowBack className='text-xl' />
        <p>Back</p>
      </Link>
      <div className='flex w-svw flex-col items-center px-7 sm:w-[80ch]'>
        <h1 className='pb-5 text-3xl font-medium'>{postMetadata.title}</h1>
        <h2 className='text-md text-secondary pb-10 font-light'>
          {postMetadata.subtitle}
        </h2>
        <article className='prose w-full max-w-prose lg:prose-xl dark:prose-invert prose-img:mx-auto'>
          <Markdown>{postMetadata.content}</Markdown>
        </article>
      </div>
      <Link
        href='/blog'
        className='text-link flex items-center gap-2 underline'
      >
        <IoArrowBack className='text-xl' />
        <p>Back</p>
      </Link>
    </div>
  )
}
