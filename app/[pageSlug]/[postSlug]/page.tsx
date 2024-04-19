'use server'

import Markdown from 'markdown-to-jsx'
import Link from 'next/link'
import { IoArrowBack, IoArrowUp } from 'react-icons/io5'
import { getPostMetadata, BlogPost } from '../blog'
import { notFound } from 'next/navigation'
import { readFileSync } from 'fs'

type PostProps = {
  params: {
    postSlug: string
  }
}

export default async function Post(props: PostProps) {
  const postMetadata: BlogPost | null = await getPostMetadata(
    `${props.params.postSlug}.md`
  )

  if (!postMetadata) return notFound()

  return (
    <div className='flex h-svh w-svw flex-col items-center gap-12 overflow-hidden overflow-y-auto py-10'>
      <Link href='/blog' id='top'>
        <div className='flex items-center gap-2'>
          <IoArrowBack className='text-3xl' />
          <p className='font-bold'>back</p>
        </div>
      </Link>
      <div className='flex w-svw flex-col items-center px-7 sm:w-[80ch]'>
        <h1 className='pb-5 text-3xl font-medium'>{postMetadata.title}</h1>
        <h2 className='text-md pb-10 font-light text-neutral-500'>
          {postMetadata.subtitle}
        </h2>
        <article className='prose prose-img:mx-auto lg:prose-xl w-full max-w-[70ch]'>
          <Markdown>{postMetadata.content}</Markdown>
        </article>
      </div>
      <Link href='/blog' id='top'>
        <div className='flex items-center gap-2'>
          <IoArrowBack className='text-3xl' />
          <p className='font-bold'>back</p>
        </div>
      </Link>
    </div>
  )
}
