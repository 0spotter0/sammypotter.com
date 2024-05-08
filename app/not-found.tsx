'use server'

import Link from 'next/link'
import { IoHome } from 'react-icons/io5'

export default async function NotFound() {
  return (
    <div className='flex h-svh w-svw flex-col items-center justify-center gap-8'>
      <h1 className='text-2xl font-medium'>Page not found</h1>
      <Link href='/'>
        <div className='flex gap-2'>
          <IoHome />
          <p className='text-xl font-medium'>back</p>
        </div>
      </Link>
    </div>
  )
}
