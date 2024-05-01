'use server'

import Link from 'next/link'
import { IoHome } from 'react-icons/io5'
import LinkButton from './components/LinkButton'

export default async function NotFound() {
  return (
    <div className='flex h-svh w-svw flex-col items-center justify-center gap-8'>
      <h1 className='text-2xl font-medium'>Page not found</h1>
      <Link href='/'>
        <LinkButton>
          <IoHome />
          <p className='text-xl font-medium'>back</p>
        </LinkButton>
      </Link>
    </div>
  )
}
