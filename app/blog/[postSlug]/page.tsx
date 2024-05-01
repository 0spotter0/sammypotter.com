'use server'

import LinkButton from '@/app/components/LinkButton'
import Markdown from 'markdown-to-jsx'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { IoArrowBack } from 'react-icons/io5'
import { BlogPost, getPostMetadata, getPostsMetadata } from '../../blog/page'

type PostProps = {
  params: {
    postSlug: string
  }
}

export const generateStaticParams = async () => {
  const posts = await getPostsMetadata()
  return posts.map((post) => {
    postsSlug: post.slug
  })
}

export default async function Post(props: PostProps) {
  const postMetadata: BlogPost | null = await getPostMetadata(
    `${props.params.postSlug}.md`
  )

  if (!postMetadata) return notFound()

  return (
    <div className='flex h-svh w-svw flex-col items-center gap-12 overflow-hidden overflow-y-auto py-10'>
      <Link href='/blog'>
        <LinkButton>
          <IoArrowBack />
          <p>back</p>
        </LinkButton>
      </Link>
      <div className='flex w-svw flex-col items-center px-7 sm:w-[80ch]'>
        <h1 className='pb-5 text-3xl font-medium'>{postMetadata.title}</h1>
        <h2 className='text-md text-medium pb-10 font-light'>
          {postMetadata.subtitle}
        </h2>
        <article className='prose w-full max-w-[70ch] lg:prose-xl prose-img:mx-auto'>
          <Markdown>{postMetadata.content}</Markdown>
        </article>
      </div>
      <Link href='/blog'>
        <LinkButton>
          <IoArrowBack />
          <p>back</p>
        </LinkButton>
      </Link>
    </div>
  )
}
